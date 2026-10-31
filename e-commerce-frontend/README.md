# E-Commerce Frontend (Angular)

A frontend for a basic e-commerce website built with **Angular 13**.


## Features

- Trending products
- Product collections grouped by category
- Products in a collection with filters
- Individual product page with images and details
- Cart and checkout
- Login, register, reset password, logout
- Account details and edit account details
- Order history

> Note: Some features (such as login and order history) may need a backend API. Check the services in `src/app` to see which data is hardcoded and which is fetched from an API.

## Tech Stack

- Angular 13
- TypeScript 4.4
- RxJS 7.4
- SCSS
- angular-responsive-carousel

## Prerequisites

Install the following before you start:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | **16.x** (recommended for Angular 13) | https://nodejs.org |
| npm | 8.x or higher (comes with Node.js) | - |
| Git | Latest | https://git-scm.com |

Check your versions:

```bash
node -v
npm -v
git --version
```

### Using a different Node.js version?

Angular 13 works best on Node 16. If your Node version is newer (17 or above), use a version manager to switch:

- **Windows:** [nvm-windows](https://github.com/coreybutler/nvm-windows)
- **macOS / Linux:** [nvm](https://github.com/nvm-sh/nvm)

```bash
nvm install 16
nvm use 16
```

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NishaKadam2808/AI-Powered-API-Security-Gateway.git
   cd AI-Powered-API-Security-Gateway
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open the app**

   Go to http://localhost:4200 in your browser. The app reloads automatically when you change a source file.

> When Angular asks about sharing anonymous usage data, you can answer `N`. It does not affect the app.

## Available Scripts

| Command | What it does |
|---------|--------------|
| `npm start` | Runs the dev server at http://localhost:4200 |
| `npm run build` | Builds the app into the `dist/` folder |
| `npm run watch` | Rebuilds automatically on changes (development) |
| `npm test` | Runs unit tests with Karma |

## Troubleshooting

**`ERR_OSSL_EVP_UNSUPPORTED` error on startup**

You are on a newer Node.js version. Either switch to Node 16 (recommended) or enable the legacy OpenSSL provider before running the app:

- Windows PowerShell:
  ```powershell
  $env:NODE_OPTIONS="--openssl-legacy-provider"
  npm start
  ```
- macOS / Linux:
  ```bash
  export NODE_OPTIONS=--openssl-legacy-provider
  npm start
  ```

**`npm install` fails with peer dependency errors**

Use:

```bash
npm install --legacy-peer-deps
```

**`EPERM` or `EBUSY` errors during install on Windows**

Don't keep the project inside a OneDrive-synced folder. Move it to a path such as `C:\projects\` and install again.

**Port 4200 is already in use**

Run on another port:

```bash
npx ng serve --port 4300
```

**Warning about "legacy View Engine" libraries**

This warning about `angular-responsive-carousel` is harmless. The app still builds and runs.

## Contributing (Team Workflow)

1. Pull the latest code:
   ```bash
   git checkout main
   git pull
   ```
2. Create your own branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes, then commit and push:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push -u origin feature/your-feature-name
   ```
4. Open a **Pull Request** on GitHub and ask a teammate to review it.

## Team

| Name | Role |
|------|------|
| Mayur Tummewar | Team Member |
| Shruti Sonalkar | Team Member |
| Sayali Rathod | Team Member |
| Nisha Kadam | Team Member |
| _Add teammate_ | _Role_ |

