import { LightningElement, wire} from 'lwc';
import gad from '@salesforce/apex/LwcWireMethodController.getAccountData';
export default class LwcWireMethod extends LightningElement {
    acn 
    changeName(event){
        this.acn = event.target.value
    }
    arn 
    changeAnlRvn(event){
        this.arn = event.target.value
    }
    @wire(gad,{accName:'$acn', ar:'$arn'}) acts;
}