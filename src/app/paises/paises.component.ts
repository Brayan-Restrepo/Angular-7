import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  public paises: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( paises => this.paises = paises);
  }

  /**
   * Mover el elemento del array de pocision para
   * que en la vista se ajuste
   * @param evento Evento del Drag
   */
  drop(evento: CdkDragDrop<any>) {
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
