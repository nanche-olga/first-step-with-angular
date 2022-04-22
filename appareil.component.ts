import { Component,Input , OnInit } from '@angular/core';
import{AppareilService}from'./services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input()  appareilName: string="machine à laver";
  @Input() appareilStatus: string ='éteint';
  @Input() indexOfAppareil:number=0;

  constructor( private appareilService: AppareilService) {

  }

  ngOnInit():void {
  }
  getStatus(){
    return this.appareilStatus;
 }
  getColor(){
    if(this.appareilStatus  ==='allumé'){
      return 'green';
    }
     else if(this.appareilStatus  ==='allumé') {
      return 'red';
    }

    else {
      return 'black ';
    }
  }onSwitchOn(){
    this.appareilService.switchOnOne(this. indexOfAppareil);
}

onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
}
}
