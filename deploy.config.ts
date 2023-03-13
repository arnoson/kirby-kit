import { defineDeployConfig } from '@very-simple/deploy'
import 'dotenv/config.js'

export default defineDeployConfig({
	host: process.env.FTP_HOST!,
	user: process.env.FTP_USER!,
	password: process.env.FTP_PASSWORD!,
	parallel: 5,
	source: './',
	destination: './',
	dryRun: true,
	exclude: [
		'stats.sqlite',
		'.vscode/',
		'.github/',
		'.ddev/',
		'.git/',
		'.env',
		'node_modules/',
		'^public/media/',
		'^content/',
		'^storage/',
	],
	excludeGlob: ['.*'],
	include: ['.htaccess'],
})
