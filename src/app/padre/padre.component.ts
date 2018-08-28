import {Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import {PeticionesService} from '../services/peticiones.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  providers: [PeticionesService]
})
export class PadreComponent implements OnInit, OnChanges {
  fecha = new Date();

  enlacePropiedad = [{ x: '1' }, {x: '2'}];

  constructor( private peticionesService: PeticionesService,
               private _route: ActivatedRoute,
               private _router: Router ) {}
  @ViewChild('referencia') ref: ElementRef;

  ngOnInit() {
    this.peticionesService.getUser().subscribe(
      result => {
        console.log(result.data);
      },
      error => {
        console.log(<any> error);
      }
    );

    this._route.params.subscribe(( params: Params ) => {
      console.log(params);
    });

  }

  procesaPropagar(mensaje) {
    console.log(this.ref.nativeElement.value);
    console.log(mensaje);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }
}
