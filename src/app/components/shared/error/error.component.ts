import { Component, OnInit, Input } from '@angular/core';

@Component( {
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: [ './error.component.sass' ]
} )
export class ErrorComponent implements OnInit {

  @Input() errores: any;

  constructor () { }


  ngOnInit() {
    console.log( this.errores );

  }

}
