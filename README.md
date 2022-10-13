# Curso de Node.js - Escalab - Generación 10

![](http://www.reactiongifs.us/wp-content/uploads/2013/10/nuh_uh_conan_obrien.gif)


[![Unit tests](https://github.com/Escalab-Academy/curso_node_gen_10/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Escalab-Academy/curso_node_gen_10/actions/workflows/unit-test.yml)
[![E2E tests](https://github.com/Escalab-Academy/curso_node_gen_10/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Escalab-Academy/curso_node_gen_10/actions/workflows/e2e-test.yml)

## Pre requisitos

- Node.js v16 (como mínimo)
- npm v8 (como mínimo)
- Un archivo `.env` que luzca como el archivo `.env.example`.
- Docker (opcional).

## Instalación

Para instalar las dependencias de este proyecto, corre en tu terminal:

```bash
npm i
```

## Uso

### Sin Docker

Para correr el servidor en modo de desarrollo, utiliza:
```bash
npm run express
```

### Con Docker

1. Hacemos un build de la imagen de docker:
    ```bash
    docker build -f Dockerfile.local -t node_gen:10 .
    ```
2. Creamos y corremos el contenedor a partir de la imagen creada:
    ```bash
    docker start -p3000:2000 --name escalab node_gen:10 &
    ```
3. Si deseas ver los logs de la aplicación, puedes usar:
    ```bash
    docker escalab logs -f
    ```


![]([https://www.reactiongifs.us/salute-cristiano-ronaldo/)


## Autor ✒️

* **Mauricio** - *Trabajo Inicial* -


## Licencia 📄

Este proyecto está bajo la Licencia ( ISC ) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Compañeros del curso de nodejs 📢
* Profesor Anthony. 
* Scalab 🤓.



---
⌨️ con ❤️ por [MauricioSelfene](https://github.com/MauricioSelfene/) 😊
