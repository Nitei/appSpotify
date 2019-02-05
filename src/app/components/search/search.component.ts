import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.sass' ]
} )
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor ( private spotify: SpotifyService ) { }

  ngOnInit() {
  }

  busqueda( event ) {
    const valor: string = event.target.value.toLowerCase();

    if ( valor === '' ) {
      this.loading = false;
      this.artistas = [];
    } else {
      this.loading = true;
      this.spotify.getArtistas( valor )
        .subscribe( ( data: any ) => {
          console.log( data );
          setTimeout( () => {
            this.artistas = data;
            if ( this.artistas.length > 0 ) {
              this.loading = false;
            }
          }, 500 );
        } );

    }
  }

}
