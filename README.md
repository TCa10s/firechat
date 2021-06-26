<h1 align="center">Fire-chat</h1>

<div align="center">
  <h3>
    <a href="https://fire-chat-app.netlify.app/">
      Demo
    </a>
  </h3>
</div>

## Overview

![screenshot](https://raw.githubusercontent.com/TCar10s/firechat/main/src/assets/img/screenshot-desktop.png?token=AHUEIBLGDQH6GWTUCYTVPI3A25RTS)


## Notas

Recuerden reconstruir los módulos de Node.

```
npm install
```

Para reconstruir el build, recuerden:

```
ng build --prod
```

Debes proporcionar tus credenciales de firebase en el archivo enviroments.ts

```
export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },
```

Y por último:

```
ng serve
```

## Contact

- Website [www.tutoscarlos.xyz](https://www.tutoscarlos.xyz)
- GitHub [@TCar10s](https://https://github.com/TCar10s)
- Twitter [@Tutos_Carlos11](https://twitter.com/Tutos_Carlos11)
