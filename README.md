# yo-mess-application
YoMess (Your Messages) est une application permettant d'envoyer et recevoir des messages à tout moment et en toute sécurité

## Architecture



## Staff techniques
- React
- Redux
- Redux Saga

Tests unitaires :
- Jest
- Enzyme 
- Jest snapshots
- Redux Saga Test Plan


## Qualité de code : Eslint & Husky
- Airbnb
- Complexité 
- precommit git hook

```
  "scripts": {
    "lint": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src",
    "lint:debug": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src --debug",
    "lint:fix": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src --fix",
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint",
    }
  },
  ```

## Unit tests : jest, couvertude, husky


## Performance : Webpack Prod, loadable, lazy routes, lazy components, Bundle analyze & bundle phobia


## React devtools, Redux devtools & Chrome Audit devtools


