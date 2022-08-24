# test-vuecli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

src
│
├── assets
├── core
│   ├── ... # http
│   ├── ... # plugins
│   ├── ... # router
│   ├── ... # store
│   └── ... # url    
├── page
│     ├── view
│     └── store
│         ├── action.js         # where we assemble modules and export the store
│         ├── getters.js        # root actions
│         ├── index.js          # root mutations
│         ├── mutations.js      # root mutations
│         ├── state.js          # root mutations
│         └── type.js           # root mutations
│            
├── components
│   ├── components
│   └── index.js
└── styles
    ├── mutations.js      # root mutations
    └── modules
        


        