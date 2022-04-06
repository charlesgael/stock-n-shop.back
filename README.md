# stock-n-shop.back

>

## About

This project uses [NestJS](https://nestjs.com). A progressive Node.js framework for building efficient, reliable and scalable server-side applications.

It is the backend part of the main application

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

```
cd path/to/stock-n-shop.back
npm install
```

3. Start your app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Postgres on hand

To start postgres

```
$ docker run --name postgres -e POSTGRES_PASSWORD=passwd -p 5432:5432 -d postgres
```

<!-- ## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support). -->

## License

stock-n-shop is [MIT licensed](LICENSE).

## Help

For more information on all the things you can do with Feathers visit [docs.nestjs.com](https://docs.nestjs.com).
