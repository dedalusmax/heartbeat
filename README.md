# Heartbeat

## INTRO
### branch `1-start`

open c:/Projects
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
inspect dist folder

add to component:
````
<p [style.color]="color" [style.font-size.em]="size">
  ALT + NUM 3
</p>

@Input() public color = 'red';
@Input() public size = 1;
````
open in terminal: dist/heartbeat-lib
````
npm link
````
close the terminal

inside normal folder:
````
npm link heartbeat-lib

ng serve
````
in app.module:
````
imports: [ HeartbeatLibModule ]
````

make sure it's:
````
import { HeartbeatLibModule } from 'projects/heartbeat-lib/src/public-api';
````
in app.comp:
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

lib-component: 
````
encapsulation: ViewEncapsulation.ShadowDom
````
lib-module: exports -> entryComponents
````
  constructor(injector: Injector) {
    const el = createCustomElement(HeartbeatLibComponent, { injector });
    customElements.define('heartbeat-component', el);
  }
````
public-api.ts: remove all except module

app.module: 
````
schemas: [CUSTOM_ELEMENTS_SCHEMA]

import { HeartbeatLibModule } from 'heartbeat-lib';
````
tsconfig.json: 
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

create folder „schematics“ in projects/heartbeat-lib folder

create folder „ng-add“ in schematics folder

create file „collection.json“ in schematics folder:

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

Add in lib's package.json:
````
"schematics": "./schematics/collection.json"
````

Add index.ts in schematics/ng-add:

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

add tsconfig.schematics.json in lib's folder:

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

add scripts into lib's package.json file:

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

