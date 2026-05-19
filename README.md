# encurtador_url

URL shortener service built with NestJS + TypeScript + MySQL.

## Features

- Shorten any URL with a unique slug
- Redirect to original URL via slug
- Track access count per shortened URL
- URL expiration support

## Tech Stack

- **NestJS** (Node.js framework)
- **TypeScript**
- **MySQL** + TypeORM (with migrations)
- **Jest** (unit + e2e tests)
- **ESLint + Prettier**

## Getting Started

```bash
npm install
npm run start:dev
```

Configure your `.env` based on the config folder before running.

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/urls` | Create short URL |
| GET | `/:slug` | Redirect to original URL |
| GET | `/urls/:slug/stats` | Get access stats |
