import { Injectable } from '@angular/core';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

/**
 * Openlayers map service to acces maps by id
 * Inject the service in the class that have to use it and access the map with the getMap method.
 * @example
 *
  import { MapService } from '../map.service';
  import OlMap from 'ol/Map';

  constructor(
    private mapService: MapService,
  ) { }
  ngOnInit() {
    // Get the current map
    const map: OlMap = this.mapService.getMap('map');
  }
 */
@Injectable({
  providedIn: 'root'
})
export class MapService {

  /**
   * List of Openlayer map objects [ol.Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html)
   */
  private map = {};

  constructor() { }

  /**
   * Create a map
   * @param id map id
   * @returns [ol.Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) the map
   */
  private createMap(id): OlMap {
    const map = new OlMap({
      target: id,
      view: new OlView({
        center: [0, 0],
        zoom: 1,
        projection: 'EPSG:3857'
      })
    });
    return map;
  }

  /**
   * Get a map. If it doesn't exist it will be created.
   * @param id id of the map or an objet with a getId method (from mapid service), default 'map'
   */
  getMap(id): OlMap {
    id = ((id && id.getId) ? id.getId() : id ) || 'map';
    // Create map if not exist
    if (!this.map[id]) {
      this.map[id] = this.createMap(id);
    }
    // return the map
    return this.map[id];
  }

  /** Get all maps
   * NB: to access the complete list of maps you should use the ngAfterViewInit() method to have all maps instanced.
   * @return the list of maps
   */
  getMaps() {
    return this.map;
  }

  /** Get all maps
   * NB: to access the complete list of maps you should use the ngAfterViewInit() method to have all maps instanced.
   * @return array of maps
   */
  getArrayMaps() {
    return Object.values(this.map);
  }

}
