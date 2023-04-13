# thezaurus
A thesaurus for talks given by Z

## Dev mode

1. Having `node` on your computer
2. Clone the repository
3. Go to the directory
4. Launch

If you have `pnpm` (the best solution)
```bash
pnpm install
pnpm run dev
```

If you have `yarn`
```bash
yarn install
yarn dev
```

If you have just `npm`
```bash
npm install
npm run dev
```

## `.env` file

Create a `.env` file in the root directory, then put this data:

```env
VITE_GOOGLE_API_KEY = /* A TOKEN GOOGLE */
VITE_GOOGLE_DOC_ID = /* THE GOOGLE SHEETS ID */
```