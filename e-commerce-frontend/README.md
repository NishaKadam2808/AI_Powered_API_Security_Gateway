# E-Commerce Frontend (Angular)

Frontend for a basic e-commerce website, built with Angular. It is part of the **AI-Powered API Security Gateway** project and works as a demo client.


## Features

- Trending products
- Product collections grouped by category
- Products in a collection
- Product page with image carousel, quantity selector, and details
- Cart
- Login, register, forgot password, and reset password pages
- Account details, edit account details, and edit address pages

## Requirements

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | **22.22.3 or newer**, or **24.15.0 or newer**, or **26.0.0 or newer** | Required by the Angular CLI. Older versions will not run. |
| npm | 10 or newer | Comes with Node.js |
| Git | Any recent version | To clone the repository |
| Angular | Installed through `npm install` | See `package.json` for the exact version |

Check your versions:

```bash
node -v
npm -v
git --version
```

If your Node.js is too old, download the latest LTS from https://nodejs.org, then close and reopen your terminal (and VS Code).

## Installation

```bash
git clone https://github.com/NishaKadam2808/AI_Powered_API_Security_Gateway.git
cd AI_Powered_API_Security_Gateway/e-commerce-frontend
npm ci
```

`npm ci` installs the exact versions in `package-lock.json`. You can use `npm install` instead if you prefer.

If the code you need is on another branch, switch to it before installing:

```bash
git checkout <branch-name>
```

## Run the app

```bash
npm start
```

Open http://localhost:4200 in your browser. The page reloads automatically when you change a file.

When the Angular CLI asks about anonymous usage analytics, you can answer `N`.

## Available scripts

| Command | What it does |
|---------|--------------|
| `npm start` | Starts the dev server at http://localhost:4200 |
| `npm run build` | Builds the app for production into `dist/` |
| `npm run watch` | Rebuilds automatically on changes (development) |

## Project structure

```
e-commerce-frontend/
├── public/              Static files served as-is (images are in public/assets)
├── src/
│   ├── app/
│   │   ├── components/  Pages and UI pieces (home, collection, cart, account, navbar, footer)
│   │   ├── data/        Hardcoded products, collections, trending items, cart
│   │   └── ...          app.module.ts, app-routing.module.ts, app.component.*
│   ├── index.html
│   └── styles.scss      Global styles
├── angular.json
└── package.json
```

## Security

The dependencies were upgraded from Angular 13 (end of life, 127 reported vulnerabilities) to a current Angular version. At the time of the upgrade, `npm audit` reported **0 vulnerabilities**.

Check it yourself at any time:

```bash
npm audit
```

New advisories can appear over time. If `npm audit` reports something, update the affected package or run `npm audit fix`. Avoid `npm audit fix --force` unless you are ready to handle breaking changes.

This is a demo client with hardcoded data and no real authentication. Do not treat the login and register pages as secure.

## Troubleshooting

**The Angular CLI says the Node.js version is not supported**

Install a supported Node.js version (see Requirements), then reopen the terminal and run `node -v` to confirm.

**`npm ci` fails with a lock file error**

Delete `node_modules` and run `npm install` instead.

**Port 4200 is already in use**

```bash
npx ng serve --port 4300
```

**Images or styles are missing**

Images are served from `public/assets`. In stylesheets use `url("/assets/images/...")`, and in templates use `assets/images/...`.

**EPERM or EBUSY errors on Windows**

Avoid cloning into a OneDrive-synced folder. Use a path such as `D:\projects\` or `C:\projects\`.

## Contributing (team workflow)

1. Get the latest code:
   ```bash
   git checkout main
   git pull
   ```
2. Create your own branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push -u origin feature/your-feature-name
   ```
4. Open a pull request on GitHub and ask a teammate to review it.

## Team

| Name | Role |
|------|------|
| Mayur Tummewar | Team Member |
| Shruti Sonalkar | Team Member |
| Sayali Rathod | Team Member |
| Nisha Kadam | Team Member |
