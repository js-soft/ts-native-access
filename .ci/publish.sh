set -e
set -x

npx lerna publish from-package --yes --no-verify-access
