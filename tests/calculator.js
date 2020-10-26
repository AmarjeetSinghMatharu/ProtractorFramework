let homepage = require('../pages/homepage');
describe('demo calculator tests', function(){
    it('addition test',function(){

        // POM Method
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('5');        
        homepage.enterSecondNumber('10');
        homepage.clickGo();
        homepage.verifyResult('15');
        browser.sleep(3000)        
        

        // Method -2
        /* element(by.css('input[ng-model="first"]')).click();
        element(by.css('input[ng-model="first"]')).clear().sendKeys('5');
        element(by.css('select[ng-model="operator"]')).click();
        element(by.css('select[ng-model="operator"]')).click();
        element(by.css('input[ng-model="second"]')).click();
        element(by.css('input[ng-model="second"]')).clear().sendKeys('10');
        element(by.css('button')).click();
        element(by.css('h2')).click();
        element(by.css('html')).click();

        let result = element(by.css('h2', '15'));
        expect(result.getText()).toEqual('15');
        browser.sleep(4000)      
        */
        
        /* // Method -1
        var input = element(by.model('first')); 
        input.sendKeys('5')

        var input = element(by.model('second')); 
        input.sendKeys('10')
        
        element(by.css('[ng-click="doAddition()"]')).click()
        let result = element(by.cssContainingText('.ng-binding', '15'));
        browser.sleep(4000)       
        expect(result.getText()).toEqual('15');
        browser.sleep(4000)        
         */
    }); 
    it('subtraction test',function(){

        // POM Method
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('5');        
        homepage.enterSecondNumber('10');
        homepage.clickGo1();
        homepage.verifyResult('15');
        browser.sleep(3000)           

    }); 

}); 