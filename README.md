# Heartbeat

## INTRO
### branch `1-start`

open _c:/Projects_
````
ng new heartbeat

cd test-lib

code .
````
open terminal 
````
ng serve
````
open browser 

## LIBRARIES
### branch `2-library`
````
ng g library heartbeat-lib`
````
inspect the files in source control

new terminal
````
ng build heartbeat-lib --watch`
````
inspect _dist_ folder

add to component:
````
<p [style.color]="color" [style.font-size.em]="size">
  ALT + NUM 3
</p>

@Input() public color = 'red';
@Input() public size = 1;
````
open in terminal: _dist/heartbeat-lib_
````
npm link
````
close the terminal

inside normal folder:
````
npm link heartbeat-lib

ng serve
````
in _app.module.ts_:
````
imports: [ HeartbeatLibModule ]
````

make sure it's:
````
import { HeartbeatLibModule } from 'projects/heartbeat-lib/src/public-api';
````
in _app.component.ts_:
````
<heartbeat-component color="green" size=4></heartbeat-component> 
````
playaround with properties: size, color

## ELEMENTS
### branch `3-elements`

stop serve

````
ng add @angular/elements
````

in lib-component: 
````
encapsulation: ViewEncapsulation.ShadowDom
````
in lib-module: exports -> _entryComponents_
````
  constructor(injector: Injector) {
    const el = createCustomElement(HeartbeatLibComponent, { injector });
    customElements.define('heartbeat-component', el);
  }
````
_public-api.ts_: remove all except module

_app.module_: 
````
schemas: [CUSTOM_ELEMENTS_SCHEMA]

import { HeartbeatLibModule } from 'heartbeat-lib';
````
_tsconfig.json_: 
````
target=es2015
````

## SCHEMATICS
### branch: `4-schematics`

stop serve
````
npm i -g @angular-devkit/schematics-cli
````
open cmd
````
schematics blank --name=test-schema
cd test-schema
code .
````
explain the reasons of not doing this way..

switch to the project

create folder _schematics_ in _projects/heartbeat-lib_

create folder _ng-add_ in _schematics_ folder

create file _collection.json_ in _schematics_ folder:

````
{
  "$schema": "../../../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "ng-add": {
      "description": "Add my library to the project.",
      "factory": "./ng-add/index#ngAdd"
    }
  }
}
````

Add in lib's _package.json_:
````
"schematics": "./schematics/collection.json"
````

Add _index.ts_ in _schematics/ng-add_:

````
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
export function ngAdd(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
````

add _tsconfig.schematics.json_ in lib's folder:

````

{
    "compilerOptions": {
      "baseUrl": ".",
      "lib": [
        "es2018",
        "dom"
      ],
      "declaration": true,
      "module": "commonjs",
      "moduleResolution": "node",
      "noEmitOnError": true,
      "noFallthroughCasesInSwitch": true,
      "noImplicitAny": true,
      "noImplicitThis": true,
      "noUnusedParameters": true,
      "noUnusedLocals": true,
      "rootDir": "schematics",
      "outDir": "../../dist/heartbeat-lib/schematics",
      "skipDefaultLibCheck": true,
      "skipLibCheck": true,
      "sourceMap": true,
      "strictNullChecks": true,
      "target": "es6",
      "types": [
        "jasmine",
        "node"
      ]
    },
    "include": [
      "schematics/**/*"
    ],
    "exclude": [
      "schematics/*/files/**/*"
    ]
  }

````

add scripts into lib's _package.json_ file:

````
  "scripts": {
    "build": "tsc -p tsconfig.schematics.json",
    "copy:collection": "copy schematics\\collection.json ..\\..\\dist\\heartbeat-lib\\schematics\\collection.json",
    "postbuild": "npm run copy:collection"
  },
````
from the root terminal:
````
ng build heartbeat-lib
cd projects/heartbeat-lib
npm run build
````

from the root in the terminal:
````
npm link dist/heartbeat-lib
ng add heartbeat-lib
````

## PWA
### branch: `5-pwa`

start with _1-start_ branch and serve the code

show it in the browser with _offline_ mode

````
ng add @angular/pwa
ng build --prod
npm install -g http-server
http-server -p 8080 -c-1 dist/heartbeat
````

show it in browser _online_ and _offline_

## UNIVERSAL
### branch: `6-universal`

start with _1-start_ branch

````
ng add @nguniversal/express-engine --clientProject=heartbeat
````

take a look at changed files:

show _package.json_ and new packages added

explain _angular.json_ differences, added _main.server.ts_ and diff in _main.ts_

explain _tsconfig.server.json_

explain _app.server.module.ts_ and diff in _app.module.ts_

explain _server.ts_ and webpack configuration file for server

return to _package.json_ and explain scripts added

````
npm run build:ssr && npm run serve:ssr
````

open browser on  http://localhost:4000/

play around with network throttling

## NATIVE SCRIPT

open file explorer and projects folder

````
npm install -g nativescript
tns
````

install NativeScript playground app on Android/iOS

````
tns create
tns preview
````

start playground app

scan QR code

make changes to home component




