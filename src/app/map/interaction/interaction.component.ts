import { Component, Input, OnInit, Host } from '@angular/core';

import { MapService } from '../map.service';
import { MapidService } from '../mapid.service';
import OlMap from 'ol/Map';
import Synchronize from 'ol-ext/interaction/Synchronize';

/**
 * Add interactions to a map
 * @example
  <app-map>
    <app-interaction></app-interaction>
  </app-map>
 */
@Component({
  selector: 'app-interaction',
  template: ''
})

export class InteractionComponent implements OnInit {

  @Input() layer;

  /**
   * Add new layers to the map
   */
  constructor(
    private mapService: MapService,
    @Host()
    private mapidService: MapidService
  ) { }

  ngOnInit() {
    // Get the current map
    const map: OlMap = this.mapService.getMap(this.mapidService);
    // Get the second map to synchronize
    const mapId = this.mapidService.getId();
    const map2 = (mapId === 'map1' ? 'map' : 'map1');
    // Add interaction
    const sync = new Synchronize({ maps: [ this.mapService.getMap(map2) ] });
    map.addInteraction(sync);
  }
}
