# FitLog Deployment

## Vercel
1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Keep the framework as Next.js.
4. Build command: `npm run build`.
5. Deploy.

No environment variables are required.

## Important
The project uses Next.js App Router, so dynamic routes such as `/workout/1` are handled by Next.js and reloading them on Vercel does not require a custom SPA rewrite.
