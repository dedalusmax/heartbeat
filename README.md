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

````
stop serve
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

