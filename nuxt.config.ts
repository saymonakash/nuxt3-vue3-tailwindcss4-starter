import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  // Modules to include in the project
  modules: [
    '@nuxtjs/robots',
    '@nuxt/image', // Image optimization
    '@nuxtjs/sitemap', // Sitemap generation
    '@nuxt/content', // Content management
    '@pinia/nuxt', // State management
    '@vueuse/nuxt', // Vue Composition API utilities
    '@nuxtjs/device', // Device detection
    '@nuxtjs/fontaine', // Font optimization
    'nuxt-delay-hydration', // Delay hydration for better performance
    'nuxt-security', // Security enhancements
    '@vite-pwa/nuxt', // PWA support
    'nuxt-seo-utils', // SEO utilities
    'nuxt-schema-org',
  ],

  // Disable devtools in production
  devtools: { enabled: false },

  // Vite configuration with Tailwind CSS plugin
  vite: {
    plugins: [tailwindcss()],
  },

  // Site metadata
  site: {
    url: process.env.NUXT_SITE_URL || 'https://example.com',
    name: process.env.NUXT_SITE_NAME || 'Saymon Arefin Akash Portfolio',
    description:
      process.env.NUXT_SITE_DESCRIPTION ||
      'Frontend Developer specializing in Vue.js, Nuxt.js, Tailwind CSS & Alpine.js. Expert in crafting responsive, animated websites.',
    indexable: true,
    trailingSlash: true,
    titleTemplate: '%s | %siteName',
    ogTitle: process.env.NUXT_SITE_NAME || 'Saymon Arefin Akash Portfolio',
    ogDescription:
      process.env.NUXT_SITE_DESCRIPTION ||
      'Frontend Developer specializing in Vue.js, Nuxt.js, Tailwind CSS & Alpine.js. Expert in crafting responsive, animated websites.',
    ogImage: `${process.env.NUXT_SITE_URL || 'https://example.com'}/android-chrome-512x512.png`,
    ogUrl: process.env.NUXT_SITE_URL || 'https://example.com',
    keywords: [
      'saymonakash',
      'saymonarefinakash',
      'simonakash310',
      'Saymon Arefin Akash',
      'Vue.js Developer',
      'Nuxt.js Expert',
    ],
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
  },

  // Sitemap configuration
  sitemap: {
    excludeAppSources: true,
    exclude: ['/admin'],
    cacheMaxAgeSeconds: 10000,
  },

  schemaOrg: {
    identity: definePerson({
      name: 'Saymon Arefin Akash',
      image: '/assets/images/saymon_squre.png',
      description:
        'Frontend Developer specializing in Html, CSS, Vue.js, Nuxt.js, Tailwind CSS & Alpine.js.',
      url: 'https://example.com',
      sameAs: [
        'https://twitter.com/saymonakash310',
        'https://github.com/saymonakash',
        'https://www.linkedin.com/in/saymonakash/',
        'https://www.fiverr.com/users/saymonakash',
        'https://www.facebook.com/saymonarefinakash310',
      ],
    }),
  },
  // Robots.txt configuration
  robots: {
    blockAiBots: true,
    disallow: ['/admin'],
  },

  // Route rules
  routeRules: {
    '/admin/**': { index: false },
  },

  // App head configuration
  app: {
    head: {
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Saymon Arefin Akash' },
        {
          name: 'description',
          content:
            process.env.NUXT_SITE_DESCRIPTION ||
            'Frontend Developer specializing in Vue.js, Nuxt.js, Tailwind CSS & Alpine.js.',
        },
        {
          property: 'og:image',
          content: `${process.env.NUXT_SITE_URL || 'https://example.com'}/android-chrome-512x512.png`,
        },
        {
          property: 'twitter:image',
          content: `${process.env.NUXT_SITE_URL || 'https://example.com'}/android-chrome-512x512.png`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  // Security configuration
  security: {
    strict: true,
    corsHandler: {
      origin: process.env.NUXT_SITE_URL || 'https://example.com',
      methods: ['GET', 'POST'],
    },
    headers: {
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: 'require-corp',
      xFrameOptions: 'SAMEORIGIN',
      strictTransportSecurity: { maxAge: 31536000, includeSubdomains: true },
      xContentTypeOptions: 'nosniff',
    },
  },

  // Global CSS
  css: ['~/assets/css/tailwind.css'],

  // Nuxt content module configuration
  content: {},

  // Nitro configuration for prerendering and asset compression
  nitro: {
    prerender: {
      routes: [],
      crawlLinks: true,
    },
    compressPublicAssets: true,
  },

  // Image optimization configuration
  image: {
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 375,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  // Pinia configuration for state management
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // Delay hydration configuration
  delayHydration: {
    mode: 'mount',
  },

  // PWA configuration
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: process.env.NUXT_SITE_NAME || 'Saymon Arefin Akash Portfolio',
      short_name: 'Saymon Akash',
      description:
        process.env.NUXT_SITE_DESCRIPTION || 'Frontend Developer Portfolio',
      theme_color: '#18181b',
      background_color: '#18181b',
      start_url: '/index.html',
      display: 'standalone',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/example\.com\/api\/.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 },
          },
        },
        {
          urlPattern:
            /\.(?:png|jpg|jpeg|svg|gif|webp|avif|woff2|woff|ttf|css|js)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'static-assets',
            expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
          },
        },
      ],
    },
  },
})
