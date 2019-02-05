import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.sass' ]
} )
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor ( private spotify: SpotifyService ) { }

  ngOnInit() {
  }

  busqueda( event ) {
    const valor: string = event.target.value.toLowerCase();
    this.spotify.getArtista( valor )
      .subscribe( ( data: any ) => {
        this.artistas = data;
        console.log( data );
      } );
  }

}
