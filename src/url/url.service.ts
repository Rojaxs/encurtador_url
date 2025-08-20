import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { randomInt } from 'node:crypto';
import { Url } from 'src/database/entities/url';
import { JwtService } from '@nestjs/jwt';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function randomHash(max = 6) {
  let hash = ''
  for (let i = 0; i < max; i++) {
    hash += alphabet[randomInt(alphabet.length)]
  }
  return hash
}

@Injectable()
export class AppService {
  constructor(@InjectModel(Url) private readonly urlModel: typeof Url,
  private jwtService: JwtService) {}

  async create(url:string, userid: number) {
    const now = new Date()

    const allUrls = await this.urlModel.findAll({
      attributes: ["short_url"],
      raw: true
    })

    const taken = new Set(allUrls.map(r => r.short_url));

    let shortUrl = ''
    const maxTries = 50
    for (let i = 0; i < maxTries; i++) {
      const possibleHash = randomHash(6)

      if(!taken.has(possibleHash)){
        shortUrl = possibleHash
        break
      }
    }

    if(!shortUrl) {
      return "Algo deu errado ao encurtar a URL, tente novamente"
    }

    return this.urlModel.create({
      url: url,
      short_url: shortUrl,
      user_id: userid,
      amount_of_access: 888,
      createdAt: now
    })
    
  }

  async get(hash:string) {
    const getURLInfo = await this.urlModel.findOne({
      where: {
        short_url: hash
      },
      raw:true
    })

    if(!getURLInfo) {
      return "Url não encontrada"
    }
    const realURL = getURLInfo.url

    return realURL
  }
  
  async getUserInfoFromToken(request) {
    const token = request.authorization.replace("Bearer ", "")
    const tokenInfo = this.jwtService.verify(token);
    const userId = tokenInfo.sub
    return userId
  }
}
