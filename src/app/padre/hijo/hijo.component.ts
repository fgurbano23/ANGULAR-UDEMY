import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  mensaje: string;
  @Output() propagar = new EventEmitter<string>();
  @Input() propiedad: {x: string};
  constructor() { }
  onPropagar() {
    this.propagar.emit(this.mensaje);
  }

  ngOnInit() {
  }

}
