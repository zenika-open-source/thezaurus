This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Installation

Create a `.env` file in the root directory, then put this data:

```
# A long, secret value used to encrypt the session cookie
AUTH0_SECRET=''
# The base url of your application
AUTH0_BASE_URL=''
# The url of your Auth0 tenant domain
AUTH0_ISSUER_BASE_URL=''
# Your Auth0 application's Client ID
AUTH0_CLIENT_ID=''
# Your Auth0 application's Client Secret
AUTH0_CLIENT_SECRET=''

# Nom de la feuille qui sert à contenir les informations. Laisser vide pour prendre la première page par défaut.
GOOGLE_DOC_SHEET_NAME = ""
GOOGLE_DOC_ID = ""
GOOGLE_CLIENT_EMAIL = ""
GOOGLE_CLIENT_ID = ""
GOOGLE_CLIENT_PRIVATE_KEY = ""
```


## Deploy to Google Cloud Run

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)