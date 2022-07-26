import { LightningElement } from 'lwc';
import gcr from '@salesforce/apex/lwcImperativeMethodController.getConlist';
export default class LwcImperativeMethod extends LightningElement {
    cln
    changeHand(e){
        this.cln=e.target.value
    }
    conDataStat=false;
    conData
    conErrStat=false;
    conErr
    clickHandler(event){
        gcr({conName:this.cln})
            .then(result=> {
                this.conData=result;
                this.conDataStat=true;
            })
            .catch(error=>{
                this.conErr=error
                this.conErrStat=true;
            });
        }
    }

