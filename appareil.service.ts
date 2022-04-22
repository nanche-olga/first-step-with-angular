import {Injectable} from "@angular/core";
@Injectable({
  providedIn:'root',
})


export class AppareilService{
   public appareils=[
    {
      name:'Machine à laver',
      status:'éteint'
    },
     {
      name:'television',
      status:'allumé'
    },
     {
      name:'machine à rincer',
      status:'allumé'
    },
     {
      name:'Machine à appuyer',
      status:'éteint'
    }
  ];

   switchOnAll(){
     for (let appareil of this.appareils){
       appareil.status='allumé'
     }
   }
    switchOffAll(){
      for (let appareil of this.appareils){
       appareil.status='éteint'
     }
   }
   switchOnOne(index:number){
      this.appareils[index].status='allumé';
   }

   switchOffOne(index:number){
      this.appareils[index].status='éteint';
   }




}
