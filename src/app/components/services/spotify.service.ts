import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class SpotifyService {


  constructor ( private http: HttpClient ) { }

  getQuery( query: string ) {
    const spotyToken = 'BQAe_UEkGRRkc-KoGfry5ITeYNwWJpNecvfF9nzQG4AbSDcjGZaZfTQ0zHG31SYwkJ4mmlY1bBuHqYMe0n4';
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
}
