import { Component, Input, ElementRef, OnInit, Host, Optional } from '@angular/core';

import { MapService } from '../map.service';
import { MapidService } from '../mapid.service';
import OlMap from 'ol/Map';
import BookmarkCtrl from 'ol-ext/control/GeoBookmark';

/**
 * Add a control to the map
 * The control can be set inside the map (using parent id) or outside (using a mapId attribute)
 * @example
  <!-- Display a control inside a map -->
  <app-map>
    <app-control></app-control>
  </app-map>

  <!-- Display a control outside a map -->
  <app-control mapId="map"></app-control>
 */
@Component({
  selector: 'app-control',
  template: ''
})

export class ControlComponent implements OnInit {

  /** Map id
   */
  @Input() mapId: string;

  /** Define the service
   */
  constructor(
    private mapService: MapService,
    @Host()
    @Optional()
    private mapidService: MapidService,
    private elementRef: ElementRef
  ) { }

  /** Add the control to the map
   */
  ngOnInit() {
    // Get the current map or get map by id
    const map: OlMap = this.mapService.getMap(this.mapidService || this.mapId);
    // Get the target if outside the map
    const target = this.elementRef.nativeElement.parentElement ? this.elementRef.nativeElement : null;
    // Create the control
    const mark = new BookmarkCtrl({ target: target });
    map.addControl(mark);
  }
}
