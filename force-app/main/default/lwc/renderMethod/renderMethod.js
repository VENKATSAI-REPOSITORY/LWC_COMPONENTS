import { LightningElement } from 'lwc';
import signinTemp from './signinTemplate.html'
import signupTemp from './signupTemplate.html'
import renderTemp from './renderMethod.html'

export default class RenderMethod extends LightningElement {
    selectedBtn=''
    render(){
        console.log('hello')
        return this.selectedBtn === 'Signup' ? signupTemp:
                (this.selectedBtn === 'Signin' ? signinTemp:
                renderTemp)
    }
    handleClick(event){
        this.selectedBtn = event.target.label
    }
    submitHandler(event){
        console.log(`${event.target.label} Successfully!!`)
    }
}