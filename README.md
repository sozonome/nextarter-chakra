<img src="https://og.sznm.dev/api/generate?heading=nextarter-chakra&text=Next.js+template+with+Chakra-UI+and+TypeScript+setup.&template=color&center=true&height=330" />

<div align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsozonome%2Fnextarter-chakra" target="_blank"><img src="https://vercel.com/button" alt="Deploy with Vercel" /></a> <a href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-chakra" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a> <a href="https://railway.app/new/template/aqmmai?referralCode=9lKVVo" target="_blank"><img src="https://railway.app/button.svg" alt="Deploy on Railway" height="32px" /></a>

<a href="https://stackblitz.com/github/sozonome/nextarter-chakra" target="_blank"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz" /></a>

  <p>This is a <a href="https://nextjs.org/" target="_blank">Next.js</a> project bootstrapped with <code>create-next-app</code>, added with <a href="https://chakra-ui.com" target="_blank"><b>Chakra UI</b></a> and <a href="https://www.typescriptlang.org" target="_blank"><b>TypeScript</b></a> setup. <br/> Start developing right away!</p>

</div>

## 🔋 ⚡ Battery Packed template

- ✔️ toolings for linting, formatting, and conventions configured

  `eslint`, `prettier`, `husky`, `lint-staged`, `commitlint`, `commitizen`, and `standard-version`

- 📱 PWA-ready

  `next-pwa` configured, disabled by default, just enable it through `next.config.js`

- 🔎 SEO optimization configured

  with `next-seo` and `next-sitemap`. you'll need to reconfigure or tinker with it to get it right according to your needs, but it's there if you need it.

- 🎨 basic responsive layout configured

  don't need it? just remove it 😃

[![CodeFactor](https://www.codefactor.io/repository/github/sozonome/nextarter-chakra/badge)](https://www.codefactor.io/repository/github/sozonome/nextarter-chakra)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=alert_status)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=bugs)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=code_smells)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=sozonome_nextarter-chakra&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=sozonome_nextarter-chakra)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Depfu](https://badges.depfu.com/badges/9e426e58f99c3bd470987a3c6b014a96/overview.svg)](https://depfu.com/github/sozonome/nextarter-chakra?project_id=26148) [![Depfu](https://badges.depfu.com/badges/9e426e58f99c3bd470987a3c6b014a96/count.svg)](https://depfu.com/github/sozonome/nextarter-chakra?project_id=26148)

## Pre-requisites

1. [Node.js](https://nodejs.org/en/) or nvm installed.
2. `pnpm` installed.

## Getting Started

1. You can either click `Use this template` button on this repository and clone the repo or directly from your terminal:

```bash
npx degit sozonome/nextarter-chakra <YOUR_APP_NAME>
```

2. After cloning the project, run this command: `pnpm` or `pnpm install`

3. Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/lib/pages/index.tsx`. The page auto-updates as you edit the file.

## How to Run e2e Test (in local machine)

1. Build production with `pnpm build`, then run the production build using `pnpm start`.
2. Open another terminal (or new terminal tab, don't cancel / close the production server), then run the test with `pnpm test:e2e`.

References:

- https://nextjs.org/docs/testing#playwright
  - https://nextjs.org/docs/testing#running-your-playwright-tests
