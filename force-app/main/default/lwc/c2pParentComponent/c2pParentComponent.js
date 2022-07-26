import { LightningElement } from 'lwc';

export default class CcmfpParentComp extends LightningElement {
    handleClick(){
        this.template.querySelector('c-c2p-child-component').resetSlider()
    }
}
