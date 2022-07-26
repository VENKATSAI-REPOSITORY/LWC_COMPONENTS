public with sharing class lwcImperativeMethodController {
    @AuraEnabled
    
    public static list<contact> getConlist(string conName){
        list<contact> con=[select LastName,Phone,Account.Name from 
        contact where LastName=:conName with SECURITY_ENFORCED];
        return con;
        
 }
 
}
