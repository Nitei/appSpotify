import { Pipe, PipeTransform } from '@angular/core';
import { assertPreviousIsParent } from '@angular/core/src/render3/instructions';

@Pipe( {
  name: 'noimage'
} )
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {
    console.log( images );
    if ( !images ) {
      return 'assets/images/noimage.png';
    }
    if ( images.length > 0 ) {
      return images[ 0 ].url;
    } else {
      return 'assets/images/noimage.png';
    }
  }
}
