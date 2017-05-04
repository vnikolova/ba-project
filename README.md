##The OP: A Bachelor project

###Run
```
npm install
npm start
```

###File structure
```
TheOP/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
        Button/
        Notifications/
            components/
                ButtonDismiss/
                    images/
                    locales/
                    index.js
                    styles.css
    data/
        users/
            actions.js
            api.js
            reducer.js

    pages/
        Home/
            components/
                ButtonLike/
            services/
        Sign/
            components/
                FormField/
            pages/
                Login/
                Register/
                    locales/
                    index.js
                    styles.css
    services/
        api/
        session/
            actions.js
            index.js
            reducer.js

    index.js
    store.js
```