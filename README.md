<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nuxt Prisma
- Package name: @naveeng2402/nuxt-prisma
- Description: The only nuxt module that makes nuxt devs life simpler
-->

# Nuxt Prisma

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

The only nuxt module that makes nuxt devs life simpler for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@naveeng2402/nuxt-prisma?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

Highlight some of the features your module provide here
- Connect to Prisma with ease
- view prisma studio in nuxt devtools

## Quick Setup

1. Add `@naveeng2402/nuxt-prisma` dependency to your project

```bash
# Using pnpm
pnpm add -D @naveeng2402/nuxt-prisma

# Using yarn
yarn add --dev @naveeng2402/nuxt-prisma

# Using npm
npm install --save-dev @naveeng2402/nuxt-prisma
```

2. Add `@naveeng2402/nuxt-prisma` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@naveeng2402/nuxt-prisma'
  ]
})
```

3. Initialize `prisma` as you would
```bash
npx prisma init
```

That's it! You can now use Nuxt Prisma in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@naveeng2402/nuxt-prisma/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@naveeng2402/nuxt-prisma

[npm-downloads-src]: https://img.shields.io/npm/dm/@naveeng2402/nuxt-prisma.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@naveeng2402/nuxt-prisma

[license-src]: https://img.shields.io/npm/l/@naveeng2402/nuxt-prisma.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@naveeng2402/nuxt-prisma

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
