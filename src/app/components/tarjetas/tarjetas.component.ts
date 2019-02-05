import { Component, OnInit, Input } from '@angular/core';

@Component( {
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: [ './tarjetas.component.sass' ]
} )
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor () { }

  ngOnInit() {
    console.log( this.items );
  }

}
