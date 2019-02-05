import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.sass' ]
} )
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading = true;

  constructor ( private spotify: SpotifyService ) {

  }

  ngOnInit() {
    this.spotify.getNewReleases()
      .subscribe( ( data: any ) => {
        console.log( data );
        setTimeout( () => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, 500 );
      } );
  }
}
