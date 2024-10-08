# Kirby Kit

Test

My personal [Kirby](https://getkirby.com/) starter kit

## Features

- ⚡️ [Vite](https://vitejs.dev/)
- 🐳 [DDEV](https://ddev.com/)
- ♻️ [Very Simple Components](https://github.com/very-simple/components)
- 🚀 [Kirby Deploy](https://github.com/arnoson/kirby-deploy)
- 🍬 [Kirby Template Sugar](https://github.com/arnoson/kirby-template-sugar)
- 📂 Public folder structure
- 📚 Code co-location with file nesting
- 🔄 Live Reload on templates/snippets/layout changes
- 🦾 Typescript
- 🎨 Modern CSS w/ nesting, layers, custom media queries
- 🐛 Debugging
- 📬 Local email testing
- 🗄️ Backups
- 🔑 Dotenv
- ⚙️ Various settings (format on save, german timezone, main branch protection)

## Development

Start DDEV and vite:

```bash
npm run start
```

If DDEV is already running:

```bash
npm run dev
```

## Production

🔒 deploy is only allowed on the `main` branch!

Preview the build locally:

```bash
npm run build
```

Build and upload the website to your production webspace:

```bash
npm run deploy
```

## Staging

Build and upload the website to your staging webspace:

```bash
npm run stage
```
