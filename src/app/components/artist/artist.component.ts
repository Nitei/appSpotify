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
  loading: boolean;
  topTracks: any = [];

  constructor ( private route: ActivatedRoute, private spoty: SpotifyService ) {
    this.loading = true;
    this.route.params.subscribe( params => {
      this.getArtista( params[ 'id' ] );
      this.getTracks( params[ 'id' ] );
    } );
  }

  getTracks( id: string ) {
    this.spoty.getTopTracks( id )
      .subscribe( tracks => {
        this.topTracks = tracks;
        console.log( tracks );
      } );
  }

  getArtista( id: string ) {
    this.spoty.getArtista( id )
      .subscribe( artista => {
        this.artista = artista;
        this.loading = false;
        // console.log( artista );
      } );
  }

  ngOnInit() {

  }

}
