import { env } from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-auth-utils',
    'nuxt-icon',
    'nuxt-security',
  ],
  security: {
    headers: {
      crossOriginEmbedderPolicy: env.NODE_ENV === 'development'
        ? 'unsafe-none'
        : 'require-corp',
    },
  },
})
