import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from './usuario.model';
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [PeticionesService]
})
export class ContactoComponent implements OnInit {
  public usuario: UsuarioModel;
  constructor( private peticionesService: PeticionesService) {
    this.usuario = new UsuarioModel('', '');
  }

  ngOnInit() {
  }

  onSubmit(form) {
  this.peticionesService.addUser(this.usuario).subscribe(
    response => {
      console.log(response);
      form.form.reset();
    },
    error => {
      console.log(<any>error);
    });
  }
}
