// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  tailwindcss: {    
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/ui'],
  },)