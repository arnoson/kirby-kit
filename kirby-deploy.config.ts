import dotenv from 'dotenv'
import { defineConfig } from 'kirby-deploy'

const env = process.env.NODE_ENV || 'development'
dotenv.config({ path: `.env.${env}` })

export default defineConfig({
  host: process.env.FTP_HOST!,
  user: process.env.FTP_USER!,
  password: process.env.FTP_PASSWORD!,
  url: process.env.URL,
  token: process.env.TOKEN,
  folderStructure: 'composer',
})
