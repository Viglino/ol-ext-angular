# &nbsp;![](src/favicon.ico) ol-ext + Angular
 
This project is an example to use [Openlayers](https://github.com/openlayers/openlayers) and [ol-ext](https://github.com/Viglino/ol-ext) with [Angular 7](https://angular.io/).

> It is by no means a complete app but you should find mecanisms to handle an Openlayers map using Angular, with interactions and controls to customize for your own.

## Goal

The goal of this example is to create a map as simple as that:
````html
<app-map id="map">
  <!-- Add a layers -->
  <app-layer layer="OSM" opacity=.5 visibility=true></app-layer>
  <app-layer layer="watermark" visibility=false></app-layer>
  <!-- Add interactionq -->
  <app-interaction1></app-interaction1>
  <app-interaction2></app-interaction2>
  <!-- Add a controls inside the map -->
  <app-control1></app-control1>
  <app-control2></app-control2>
</app-map>
````

As controls can be set outside the map (using the target option) we also want to have this option too.
````html
<app-map id="map">
  <!-- Add a layers -->
  <app-layer layer="OSM" opacity=.5 visibility=true></app-layer>
  <!-- Add a controls inside the map -->
  <app-control1></app-control1>
</app-map>

<!-- Add control outside -->
<app-control2 mapId="map"></app-control2>
````

We also want to create more than one map:
````html
<app-map id="map">
  <!-- Add a layers -->
  <app-layer layer="OSM" opacity=.5 visibility=true></app-layer>
</app-map>

<app-map id="map2">
  <!-- Add a layers -->
  <app-layer layer="watermark"></app-layer>
</app-map>
````

## Mecanisms

### MapService and MapidService

The map is implemented as a service to let you access it in other components.    

#### Getting a map
You just have to declare the service in your constructor to access the map:
````javascript
constructor(private mapService: MapService) { }
````
Then to retrieve the map you want, use the `getMap` method:
````javascript
const map = mapService.getMap();
// another map
cpnst map1 = mapService.getMap('map1');
````
The parameter is the id of the map you want to get. If you just have one map you can use the default value (`map`).

#### Getting the current map

The `MapidService` let you handle the current map's id. 
It is used by the map component to register a new map id (`mapServe.setId()`).
It's not a root service and each map has its own one, thus each component defined inside a map component can access the current map id using the `getId()` method of the service.

This id is registered by the root `MapComponent` (using the `setId()`method).


#### Customizing the map

Feel free to modify the `createMap()` method of the `MapService` to handle the default map.    
The `MapComponent` let you define the map itself. Use the `ngOnInit()` method to customize the map (set zoom, etc.).

### Creating new map components (controls, layers, interactions...)

This example comes with a set of components for each Openlayers map features: controls, interactions, layer...    
Just copy the `.ts` file to create a new one to use in your app.

You first have to declare the services in your constructor:
````javascript
  constructor(
    private mapService: MapService,
    @Host()
    private mapidService: MapidService
  ) { }
````
Then in ngOnInit, get the current map like this:
````javascript
  ngOnInit() {
    // Get the current map
    const map: OlMap = this.mapService.getMap(this.mapidService);
    // Add component to the map
  }
````

To let the control be set inside or outside the map you also need to get the target ElementRef. In this case the MapidService is optional (as it comes inside a MapComponent it is not defined when set outside a map).
Look at the [ControlComponent](src/app/map/control/control.component.ts) for more informations.

#### Example

The example defines:
* 2 maps 
* a set of layers define using a component propertie
* an interaction to synchonize the maps together
* a control inside the map (Bookmark contol)
* a control outside the map (MousePosition).


## Build

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

### Install

Run `npm install` to install node modules and start developping.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
