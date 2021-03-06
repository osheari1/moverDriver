import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/Rx';

import { data } from './data';

@Component({
  selector: 'listing-page',
  templateUrl: 'listing.html',
})
export class ListingPage {

  listing: any;

  constructor( public nav: NavController ) {
    this.listing = data;

  }

  ionViewDidLoad() {
   }

  goToPage(service: any) {
    console.log("Clicked goToPage", service);
    const opts = {
      'animate': true
    }
    this.nav.push(service.toPage, null, opts);
  }

  buildListing(): void {

  }


}
