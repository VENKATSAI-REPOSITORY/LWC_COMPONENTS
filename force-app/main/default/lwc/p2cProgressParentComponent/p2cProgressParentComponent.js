import { LightningElement } from 'lwc';

export default class P2cPComponent extends LightningElement {
    percentage=0
    changeHandler(event){
        this.percentage = event.target.value
    }
}