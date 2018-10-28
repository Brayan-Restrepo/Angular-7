import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  public personas;

  constructor() {
    this.personas = Array(99500).fill(0);
  }

  ngOnInit() {
    console.log(this.personas);
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irMitad() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }
}
