import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'A13',

  projectId: 'xm41fhrg',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  deployment: {
    appId: 'f6u1nh5xt7hgn7gpum7ctsi3',
    autoUpdates: true
  }
})
