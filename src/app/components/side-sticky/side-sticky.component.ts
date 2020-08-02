import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-sticky',
  templateUrl: './side-sticky.component.html',
  styleUrls: ['./side-sticky.component.scss'],
})
export class SideStickyComponent implements OnInit {

  @Input() hrefLink: string = undefined;
  @Input() downloadLink: string = undefined;
  constructor() { }

  ngOnInit() {}

}
