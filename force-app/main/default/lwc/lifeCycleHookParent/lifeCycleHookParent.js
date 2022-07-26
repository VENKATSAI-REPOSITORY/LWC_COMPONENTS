import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LifeCycleHookParent extends LightningElement {
    constructor(){
        super();
        console.log('Parent Constructor');
    }
    connectedCallback(){
        console.log('Parent Connected callback')

    }
    errorCallback(error,stack){
console.log(error.message)
console.log(stack)
    }
    renderedCallback(){
        console.log('Parent rendered callback')
    }
    status=false
    changeHandler(event){
        const evt = new ShowToastEvent({
            title: 'sample',
            message: 'Child Component ready',
            variant: "success"
        });
        this.dispatchEvent(evt);
      this.status = !this.status
    }
}