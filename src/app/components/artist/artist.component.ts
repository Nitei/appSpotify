import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component( {
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: [ './artist.component.sass' ]
} )
export class ArtistComponent implements OnInit {

  artista: any = {};
  loading = true;

  constructor ( private route: ActivatedRoute, private spoty: SpotifyService ) {
    this.route.params.subscribe( params => {
      console.log( params.id );
      this.getArtista( params[ 'id' ] );
      this.loading = false;
    } );
  }

  getArtista( id: string ) {
    this.spoty.getArtista( id )
      .subscribe( artista => {
        this.artista = artista;
        console.log( artista );
      } );
  }

  ngOnInit() {

  }

}
