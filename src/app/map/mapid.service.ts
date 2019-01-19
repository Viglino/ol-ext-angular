import { Injectable } from '@angular/core';

/**
 * Service to get the current id (declared by the host).
 * Inject the service in the class that have to use it
 * and access the current id with the getId function.
 * You can also use the setId to enable the subcomponent to access the id in the host.
 * @example
  constructor(
    @Host()
    @Optional() // use optional to mal the service optional
    private mapidService: MapidService
  )
  ngOnInit() {
    // Get the current map id
    const mapId = this.mapidService.getId();
  }
 */
@Injectable()
export class MapidService {

  /**
   * The current id
   */
  private id: string;

  constructor() { }

  /**
   * Get Id of the map, default 'map'
   */
  getId(): string {
    return this.id;
  }

  /**
   * Set Id
   */
  setId(id: string= null) {
    this.id = id;
  }

}
