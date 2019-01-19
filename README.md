# OlExtAngular

This project is an example to use ol+ol-ext with Angular 7.

> It is by no means a complete app but you should find mecanisms to handle a map with interaction and controls to customize for your own .

## Goal

The goal of this example is to create a map as simple as this:

````html
<app-map id="map">
  <!-- Add a layers -->
  <app-layer layer="OSM" opacity=.5 visibility=true></app-layer>
  <app-layer layer="watermark" visibility=false></app-layer>
  <!-- Add interactionq -->
  <app-interaction1></app-interaction1>
  <app-interaction2></app-interaction2>
  <!-- Add a controlq insde the map -->
  <app-control1></app-control1>
  <app-control2></app-control2>
</app-map>
````

As controls can be set outside the map (using the target option) we also want to have this option too.
````html
<app-map id="map">
  <!-- Add a layers -->
  <app-layer layer="OSM" opacity=.5 visibility=true></app-layer>
  <!-- Add a controls insde the map (boolmark) -->
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

### MapService  and MapidService


### Creating new components


## Build

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

### Install

Run `npm install` to install node modules and start developping.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
