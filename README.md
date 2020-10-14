# yo-mess-application
YoMess (Your Messages) est une application permettant d'envoyer et recevoir des messages à tout moment et en toute sécurité.

https://www.slideshare.net/helabenkhalfallah/yo-messapp

## Comment lancer le projet ?

**Installation des dépendances :**

```
npm install
```

**Application :**

```
npm run start:dev
```

**Serveur Fake :**

```
npm run start:server
```

**Routes de tests :**

```
http://localhost:9001/user-login
http://localhost:9001/yo-mess-dashboard
```

## Architecture & conception
https://www.slideshare.net/helabenkhalfallah/yo-messapp

## Bonnes pratiques

### Javascript
https://medium.com/@helabenkhalfallah/js-like-i-love-to-do-6234570f0d1a

### Clean code & architecture
https://medium.com/@helabenkhalfallah/how-to-write-a-dont-make-me-think-code-for-front-end-73ff20ef607e
https://medium.com/@helabenkhalfallah/from-mobile-to-web-development-51b399911897

## Staff techniques

**Application :**

- React

https://fr.reactjs.org/

- Redux

https://redux.js.org/

- Redux Saga

https://redux-saga.js.org/docs/api/

- antd (librairie des composants atomiques)

https://ant.design/components/overview/


**Tests unitaires :**

- Jest
- Enzyme 
- Jest snapshots
- Redux Saga Test Plan
- Redux mock store

## Qualité de code : Eslint & Husky

**Configuration :**

- Airbnb style guide

https://github.com/airbnb/javascript

- Détection de la complexité du code au fur et à mesure du développement :

```
 // reducing code complexity by capping the amount
    // of cyclomatic complexity allowed in a program.
    complexity: [
      'error',
      10,
    ],
    // enforces a maximum depth that blocks can be nested to reduce code complexity.
    'max-depth': [
      'error',
      3,
    ],
    // enforces a maximum number of lines per file,
    // in order to aid in maintainability and reduce complexity.
    'max-lines': [
      'error',
      {
        max: 1000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // enforces a maximum number of lines per function,
    // in order to aid in maintainability and reduce complexity.
    'max-lines-per-function': [
      'error',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    // enforces a maximum number of parameters in function definitions
    'max-params': [
      'error',
      3,
    ],
    // enforces a maximum number of statements allowed in function blocks.
    'max-statements': [
      'error',
      20,
    ],
    //  enforces a maximum depth that callbacks can be nested
    'max-nested-callbacks': [
      'error',
      2,
    ],
    // max line length
    'max-len': [
      1,
      120,
      2,
      {
        ignoreComments: true,
      },
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'always',
      },
    ],
```


- Ajout d'un git hook pour assurer des commits atomiques clean :

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

- Des différents scripts lint sont ajoutés :

```
  "scripts": {
    "lint": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src",
    "lint:debug": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src --debug",
    "lint:fix": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src --fix",
  },
```

**Note: Utilisation d'eslint cache pour améliorer les performances de l'exécution du linter.**

https://eslint.org/docs/user-guide/command-line-interface#caching


## Tests unitaires : Jest, Couverture, Husky

**Exemple d'un TU d'une page :**

https://github.com/helabenkhalfallah/yo-mess-application/blob/main/src/features/messages/pages/MessagesDashboardPage-test.jsx


**Exemple d'un TU d'un composant de présentation :**

https://github.com/helabenkhalfallah/yo-mess-application/blob/main/src/features/messages/components/MessageAddView-test.jsx

**Exemple d'un TU d'un service :**

https://github.com/helabenkhalfallah/yo-mess-application/blob/main/src/features/messages/services/MessagesService-test.js

**NB : les tests unitaires des composants et services sont obligatoires.**

- Dans un composant de présentation  :

1. On teste la disposition de la vue.
2. On teste les classes css utilisées.
3. On valide les règles de gestions.
4. On teste le comportement en simulant les actions (onChange, onCLick, ...) via enzyme.

**Remarque : les tests unitaires des composants de présentation sont des tests boites noires.**

**Remarque : on utilise Enzyme + Jest + chai pour les composants de présentation.**

- Dans un service  :

1. On teste le cas succès.
2. On teste le cas d'erreur.
3. On test le cas d'exception.
4. En testant le service, on teste aussi l'état final de reducer associé.

**Remarque : on utilise Redux Test Plan pour tester les services saga et les reducers.**

**Remarque : pour les pages on utilise Jest snapshots.**

- Des différents scripts jest sont ajoutés :

```
    "test": "jest",
    "test:update": "jest --updateSnapshot",
    "test:coverage": "jest --coverage --colors"
```

- Ajout d'un git hook pour assurer qu'avant chaque push, les tests unitaires s'exécutent avec succès :

```
  "scripts": {
    "start:dev": "webpack-dev-server -d --config webpack/webpack.dev.config.js --progress --color",
    "start:server": "json-server --watch ./config/data/db.json",
    "build:prod": "webpack --config webpack/webpack.prod.config.js --progress --color",
    "build:analyze": "webpack --config webpack/webpack.prod.config.js --profile --json > stats.json && webpack-bundle-analyzer stats.json",
    "lint": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src",
    "lint:debug": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src --debug",
    "lint:fix": "eslint --cache --cache-location ./.eslintcache --ext js,jsx ./src --fix",
    "test": "jest",
    "test:update": "jest --updateSnapshot",
    "test:coverage": "jest --coverage --colors"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint",
      "pre-push": "npm test"
    }
  },
```

- test:coverage est utile pour améliorer au fur et à mesure la couverture des tests unitaires.

## Performance : Webpack (Configuration Prod), Loadable, Lazy Routes, Lazy Components, Bundle analyze & Bundle Phobia

**Application :**
- Utilisation du Loadable, Suspence & lazy pour créer des lazy routes et des lazy components.

Ce qui en résulte à avoir des chuncks séparés à charger au moment de besoin.

**Webpack - Configuration Prod :**

- Optimisation JS : Terser.
- Optimisation Style : CssMinimizerPlugin & MiniCssExtractPlugin.

**Avant d'utiliser un package externe, il est recommandé d'analyser son impact sur la taille finale du bundle avec Bundle Phobia :**

https://bundlephobia.com/

BundlePhobia peut aussi proposer des alternatifs en cas où le package est volumineux.

**Webpack Bundle Analyze :**

Une commande ajoutée pour lancer en local : webpack bundle analyze et optimiser si besoin

```
 "build:analyze": "webpack --config webpack/webpack.prod.config.js --profile --json > stats.json && webpack-bundle-analyzer stats.json",
 ```

## React devtools, Redux devtools & Chrome Audit devtools

Pour assurer une bonne performance, il est recommandé de lancer au fur et à mesure de l'avancement de développement les devtools : 

React devtools, Redux devtools & Chrome Audit devtools

https://developers.google.com/web/tools/lighthouse
