set -e
set -x

npm ci

npx lerna bootstrap
npx lerna run build

# linting
npm run lint:eslint
npm run lint:prettier

# auditing
npx lerna run license-check
npx better-lerna-audit --exclude 1006914
