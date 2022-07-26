import { api, LightningElement } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api cardHeading
    @api number
    @api isvalid
    @api message
}