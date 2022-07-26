import { LightningElement } from 'lwc';

export default class LifeCycleHookChild extends LightningElement {
    constructor(){
        super();
        console.log('Child Constructor');
    }
    connectedCallback(){
        console.log('Child Connected callback')
        throw new Error('Sample error message')
    }
    renderedCallback(){
        console.log('Child rendered callback')
    }
}