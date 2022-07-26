public class LwcWireMethodController {
    @AuraEnabled (cacheable = true)
    public static list<Account> getAccountData(string accName, decimal ar){
        list<Account> acc = [select id, Name, Phone,Industry,AnnualRevenue from Account
         where Name=:accName or AnnualRevenue>=:ar];
        return acc;
    }
}
