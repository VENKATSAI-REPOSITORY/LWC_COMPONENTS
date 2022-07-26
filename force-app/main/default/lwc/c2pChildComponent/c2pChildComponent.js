import { api, LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    val=10
    vl
    changeHandler(e){
        this.val=e.target.value
    }
    @api
    resetSlider(){
        this.val=50
        this.vl=this.template.querySelector('.d1')
        this.vl.innerHTML='This is query selector example of div tag'
        this.vl.style.color='green';
    }
}
