import { LightningElement} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class SalaryCalculation extends LightningElement {
    basicSalary = 0.0
    bsalhandler(event){
        this.basicSalary = parseFloat(event.target.value);
    }
    cbOptions = [{ label: 'HRA', value: 'hra' },
                { label: 'DA', value: 'da' },
                { label: 'TA', value: 'ta' }]
     hraValue = 0.0
     daValue = 0.0
    taValue = 0.0
    grossSalary =0.0
    
     nsSalary = 0.0
    iTax = 0.0  
    cbValue
    checkboxHandler(event){
        this.cbValue = event.target.value
        if(this.cbValue.includes('hra')){
            this.hraValue = this.basicSalary*0.3;
          }else{
            this.hraValue = 0.0
          }
          if(this.cbValue.includes('da')){
            this.daValue = this.basicSalary*0.25;
          }else{
            this.daValue=0.0
          }
          if( this.cbValue.includes('ta')){
            this.taValue = this.basicSalary*0.15;
          }else{
            this.taValue=0.0
        }
          this.grossSalary = this.basicSalary+this.hraValue+this.daValue+this.taValue;
         }
                

    rbOptions = [{ label: 'Gross Salary', value: 'gs' },
                 { label: 'Net Salary', value: 'ns' }];
    rbValue
    radioboxHandler(event){
        this.rbValue = event.target.value;
    }
        gsStatus = false;
        nsStatus = false;
        gsSalary = 0.0
    salaryCalculator(event){
        if(this.rbValue=='gs'){
            this.gsSalary = this.grossSalary; 
            this.gsStatus = true
            this.nsStatus = false
            let it = new ShowToastEvent({title:'Show message', message:'Gross salary Calculated', variant:'success'});
            dispatchEvent(it);
        }
        else{
            this.gsSalary = this.grossSalary;
            if(this.gsSalary<=100000){
                this.iTax = this.gsSalary*0.05
            }
            else if(this.gsSalary>100000 && this.gsSalary<=200000){
                this.iTax = this.gsSalary*0.1
            }
            else if(this.gsSalary>200000){
                this.iTax = this.gsSalary*0.15
            }
            this.nsSalary = this.gsSalary - this.iTax
            let it = new ShowToastEvent({title:'Show message', message:'Net salary Calculated', variant:'success'});
            dispatchEvent(it);
            this.nsStatus = true
            this.gsStatus = false
        }
    }
}