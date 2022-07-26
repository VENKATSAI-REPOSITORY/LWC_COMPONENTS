import details from '@salesforce/schema/RemoteKeyCalloutEvent.Details';
import { api, LightningElement } from 'lwc';

export default class LwcAuraComponent extends LightningElement {
    @api title
    callAura(){
        const event = new CustomEvent('sendmsg',{detail:{"msg":"Hello from Lwc"}})
        this.dispatchEvent(event)
    }
}