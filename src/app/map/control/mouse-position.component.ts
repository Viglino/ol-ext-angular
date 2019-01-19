import { Component, Input, ElementRef, OnInit, Host, Optional } from '@angular/core';

import { MapService } from '../map.service';
import { MapidService } from '../mapid.service';
import OlMap from 'ol/Map';
import MousePoisition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';

/**
 * Add a Mouse position control to the map
 * The control can be set inside the map (using parent id) or outside (using a mapId attribute)
 */
@Component({
  selector: 'app-mouse-position',
  template: ''
})

export class MousePositionComponent implements OnInit {

  /** Map id
   */
  @Input() mapId: string;

  /**
   * Add a bookmark control to the map
   */
  constructor(
    private mapService: MapService,
    @Host()
    @Optional()
    private mapidService: MapidService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    // Get the current map or get map by id
    const map: OlMap = this.mapService.getMap(this.mapidService || this.mapId);
    // Get the target if outside the map
    const target = this.elementRef.nativeElement.parentElement ? this.elementRef.nativeElement : null;
    // Create the control
    const ctrl = new MousePoisition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      undefinedHTML: '&nbsp;',
      target: target
    });
    map.addControl(ctrl);
  }
}
