# FitLog — Workout Library

FitLog is a dark, responsive workout library and daily training planner built from the supplied FitLog design. Users can browse workouts, open detailed exercise pages, add up to five lifts to today's plan, save workouts for later, mark completed exercises, and keep their plan after reloads.

## Live Link
Add the deployed URL here after deployment.

## GitHub Repository Link
Add the repository URL here after pushing.

## Technologies Used
- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- REST API / Fetch
- localStorage

## Key Features
1. Responsive home page with hero and workout library.
2. Dynamic workout details page with specifications and instructions.
3. Today's Plan with a five-workout cap and live metrics.
4. Saved workouts with persistent localStorage.
5. Add, save, mark as done, remove, and toast feedback.
6. Sort by duration, calories, or rating.
7. Loading state and custom 404 page.
8. Responsive mobile, tablet, and desktop layouts.

## API
All workouts: https://api.abcz.workers.dev/api/fitlog
Single workout: https://api.abcz.workers.dev/api/fitlog/:id

## Run Locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Production Build
```bash
npm run build
npm start
```

## Suggested Git Commits
```text
setup nextjs fitlog project
build responsive navbar and counters
add hero and library layout
connect workout api and loading state
add workout details page
add my plan and saved tabs
add localstorage and workout actions
finish responsive styles and readme
```
