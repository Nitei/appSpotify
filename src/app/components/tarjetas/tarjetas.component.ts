import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: [ './tarjetas.component.sass' ]
} )
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor ( private router: Router ) { }

  verArtista( clave: any ) {
    let valor: any;
    if ( clave[ 'type' ] === 'album' ) {
      valor = clave.artists[ 0 ][ 'id' ];
    } else {
      valor = clave[ 'id' ];
    }
    this.router.navigate( [ '/artist', valor ] );
  }

  ngOnInit() {
  }

}
