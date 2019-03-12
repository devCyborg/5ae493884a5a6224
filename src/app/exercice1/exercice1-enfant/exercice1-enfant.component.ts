import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Output() evPlusUn : EventEmitter<number> = new EventEmitter<number>();
  @Output() evMoinsUn : EventEmitter<number> = new EventEmitter<number>();

  //pour recuperer le resultat dans le composant enfant
  @Input() result : number;

  constructor() { }

  ngOnInit() {
  }

  incrementer() {
    this.evPlusUn.emit(1);
  }
  decrementer(){
    this.evMoinsUn.emit(1);
  }
}
