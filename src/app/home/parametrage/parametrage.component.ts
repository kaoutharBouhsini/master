import { Component,  OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '../../../../node_modules/@angular/common';
@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.css'],

},
)
export class ParametrageComponent {

  constructor(private viewScroller: ViewportScroller) {
  }

  scrollTo(tag : string)
  {
    this.viewScroller.scrollToAnchor(tag);
  }

 
}
