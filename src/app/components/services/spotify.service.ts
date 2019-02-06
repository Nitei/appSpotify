import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class SpotifyService {


  constructor ( private http: HttpClient ) { }

  getQuery( query: string ) {
    const spotyToken = 'BQD6iW5n2JqN1iQFSagzuqBAEeln1MDhzzjaThn0BB7vu9KFijul-e15Nh1SViKZMMzCPG0y6T7F_ezEeyM';
    const headers = new HttpHeaders( {
      'Authorization': `Bearer ${ spotyToken }`
    } );
    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get( url, { headers } );
  }

  getNewReleases() {
    return this.getQuery( 'browse/new-releases' )
      .pipe( map( data => data[ 'albums' ].items ) );
  }

  getArtistas( valor: string ) {
    return this.getQuery( `search?q=${ valor }&type=artist&limit=20` )
      .pipe( map( data => data[ 'artists' ].items ) );
  }

  getArtista( id: string ) {
    return this.getQuery( `artists/${ id }` )
      .pipe( map( data => data ) );
  }

  getTopTracks( id: string ) {
    return this.getQuery( `artists/${ id }/top-tracks?country=es` )
      .pipe( map( data => data[ 'tracks' ] ) );
  }
}
