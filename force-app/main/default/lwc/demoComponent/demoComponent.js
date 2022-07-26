import { LightningElement, track } from 'lwc';

export default class DemoComponent extends LightningElement {
  //@track age = [20,30,50]
  status
  flag=true
  //   get age1(){
  //     return this.age[0];
  //   }
 changeAge(event){
        this.age = event.target.value;
        if(this.age>=18){
            this.status = true
        }
        else{
          this.flag=false
          this.status=false
        }
   }

}