import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// value =1;
valueone: number;
name:string;
whippedcream:string;
quantity:number;
chocolate:boolean;
display:number;

chocolatemsg:string;
whippedcreammsg:string;


  constructor(public navCtrl: NavController) {
  this.valueone =0;
  }
  onClick1(){
    // console.log(this.value)
    this.valueone -=1;
    
  }
  onClick2(){
    // console.log(this.value)
    this.valueone +=1;
   console.log(this.name);
  
  }
  onClick3(){
    this.display=1;

  }
  event1(){
    if(this.whippedcream){
     this.whippedcreammsg="+whippedcream" ;
    }
    
   } 
  event(){
    if(this.chocolate){
      this.chocolatemsg="+chocolate" ;
     }
    }
    onClick4(){
      this.valueone =0;
      this.name=" ";
      this.display =0;
      
      
  
    }
  }
 

