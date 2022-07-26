import { LightningElement } from 'lwc';

export default class C2pCommunicationParent extends LightningElement {
    showModel = false
    msg
    clickHandler(){
        this.showModel = true
    }
    closeHandler(event){
this.msg=event.detail.msg
this.showModel = false
    }
}