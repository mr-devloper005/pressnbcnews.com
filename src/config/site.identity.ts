export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'czwohacpm0',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Pressnbcnews',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A simple newsroom-style publication for announcements, coverage, and media updates on Pressnbcnews.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'pressnbcnews.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pressnbcnews.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
