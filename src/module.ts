import { defineNuxtModule, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

     // Nitro auto imports
    nuxt.hook('nitro:config', (_nitroConfig) => {
      if (_nitroConfig.imports) {
        _nitroConfig.imports.imports = _nitroConfig.imports.imports || []
        _nitroConfig.imports.imports.push({name:"usePrisma", from:resolver.resolve("./runtime/server/utils/prisma")})

        _nitroConfig.alias = _nitroConfig.alias || {}
        _nitroConfig.alias["#nuxt-prisma"] = resolver.resolve("./runtime/server/utils/prisma")
      }
  })

  }
})
