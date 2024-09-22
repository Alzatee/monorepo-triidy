# TriidyMonorepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# DOCUMENTACIÓN DE LA APLICACIÓN
Documentación [Doumentación de Agular](https://angular.io/docs)

## Ejecutar información sobre las versiones Angular:
````sh
$ ng version
````

## Instalación:
**Para compilar el proyecto se necesita tener en cuenta lo siguiente:**

1. Instalar NodeJs última versión, en su versión TLS [NodeJS Descarga](https://angular.io/docs)
2. Instalar Angular CLI en una termina nodejs o cmd [Angular CLI](https://github.com/angular/angular-cli)
Consultar las versiones del proyecto en este documento
````sh
$ npm install -g @angular/cli
````
3. Instalar Visual Estudio Code [VSCode Descarga](https://code.visualstudio.com/)
4. Descargar la carpeta del proyecto y abrirlo en Visual Studio code
5. Ejecutar el siguiente comando para instalar las dependencias del package (Se creará una carpera "node_modules")
````sh
$ npm install
````

2. Abrir en el navegador el puerto `http://localhost:4200/`
También puede saltar este paso y ejecutar el siguiente comando para que se abra el navegador automáticamente:
````sh
$ npm start
````
	***El comando `ng serve` básico ejecutará por defecto el ambiente de desarrolo (environment.developmen.ts); puede compilar otros ambientes con los comandos a continuación***
### Ambientes locales (Comandos Compilación):
| AMBIENTE | COMANDO |
| ------ | ----- | ----- | ------ | ----- | ----- | ------ |
| DESARROLLO     | `ng serve --configuration development`  |
| PRUEBAS        | `ng serve --configuration qa`           |
| PRODUCCIÓN     | `ng serve --configuration production`   |


## Transpilación (Build):
1. Ejecutar el siguiente comando para transpilar(Realizar el build) el proyecto:
````sh
$ npm build
````
	***El comando `ng build` básico ejecutará por defecto el Build para el ambiente de Producción (environment.production.ts); puede realizar el build a otros ambientes con los comandos a continuación***
### Ambientes locales (Comandos Build):
| AMBIENTE | COMANDO |
| ------ | ----- | ----- | ------ | ----- | ----- | ------ |
| DESARROLLO     | `ng build --configuration development`  |
| PRUEBAS        | `ng build --configuration qa`           |
| PRODUCCIÓN     | `ng build --configuration production`   |

- Para más información sobre los comandos, consultar el archivo package.json (scripts).

## Alias
**Se crearon unos Alias/Paths en el archivo tsconfig.json**
Estos Alias nos permiten acceder en las importaciones a carpetas de interés mucho más directo, fácil y mantenible, Ejemplo:
- "@library/*": [],
- "@environments/*": [],
- "@core/*": [],
- "@components/*": [],
- "@layout/*": [],
- "@services/*": [],
- "@shared/*": []

`import { environment } from '@environments/environment';`
`import { ... } from '@core/...';`

## Dependencias, Versiones: Licencia MIT (Libre).
Versiones:
- Node.js v18.20.4
- Angular CLI v18.1.2
- Versión de Angular: v18.1.0
- Versión Rxjs: v7.8.0

Dependiencias Proyecto:
Bootstrap 5.3.3
[Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
SweetAlert2 11.14.0
[SweetAlert2](https://sweetalert2.github.io/)
@angular/material 18.2.5
[Angular material] (https://material.angular.io/)


Dependiencias Librería:
Bootstrap 5.3.3
[Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
@angular/material 18.2.5
[Angular material] (https://material.angular.io/)
SweetAlert2 11.14.0
[SweetAlert2](https://sweetalert2.github.io/)

## OTROS - ARQUITECTURA DEL PROYECTO.
- Monorepo workspaces en Angular cli
- Arquitectura: Modular / Standalone (para demostrar ciertos puntos de ambas arquitecturas se hace una combinación simple de ambas).
- Nota: como es un monorepo la librería no está almacenada en un artifact de azure o similar, por lo cual no se instala con npm install, sino que al estar en el monorepo se usa directamente en el proyecto.

## Recursos y utilidades
**Las variables [environtmens] están almacenadas de Azure**

ESTRUCTURA SUPERFICIAL DEL PROYECTO:
projects/
  └── rick-and-morty-app/
      ├── public/                     // Archivos públicos (index.html, favicon, etc.)
      └── src/
          └── app/
              ├── core/
              │   ├── services/       // Servicios de la aplicación
              │   ├── directives/     // Directivas reutilizables
              │   ├── guards/         // Guards para rutas
              │   ├── interceptors/   // Interceptores para el manejo de peticiones HTTP
              │   ├── models/         // Modelos de datos
              │   │   ├── classes/    // Clases
              │   │   ├── interfaces/ // Interfaces
              │   │   ├── enums/      // Enumeraciones
              │   │   └── types/      // Tipos personalizados
              │   └── pipes/          // Pipes personalizados
              ├── layout/             // Componentes de layout
              │   ├── header/         // Componente de encabezado
              │   ├── footer/         // Componente de pie de página
              │   └── not-found/      // Componente para 404
              ├── modules/            // Módulos de la aplicación
              │   └── characters/     // Módulo de personajes que contiene todos los componentes requeridos para dicha función.
              └── app...              // Componente principal
          ├── assets/                 // Recursos estáticos (imágenes, estilos, etc.)
          ├── environments/           // Configuración de entornos

  └── LIBRERIA DE COMPONENTES

- Proyecto principal enfocado en una arquitectura módular.
- Librería enfocado en una arquitectura estandalone, para demostrar varios puntos.# monorepo-triidy
