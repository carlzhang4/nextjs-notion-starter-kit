import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'RC4ML-80c2f57d85f74d419e4b1e766a3f398a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'RC4ML',
  domain: 'https://rc4ml-zju.notion.site/RC4ML-80c2f57d85f74d419e4b1e766a3f398a',
  author: 'carlzhang4',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: '',
  github: 'RC4ML',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Team',
      pageId: 'Team-f9b264f3becd4e619c776ed8d459ecbc'
    },
    {
      title: 'Publications',
      pageId: 'Publications-8414411d6ea447fda5eaa4754e5ab225'
    },
    {
      title: 'Projects',
      pageId: 'Projects-9009c5002a8e4a848e6dcbf8cb014486'
    },
    {
      title: 'Contact',
      pageId: 'Contact-b474931fbc534eddae2fca9cb16a0d0c'
    }                 
  ]
})
