describe('passwordMatch Directive - ', function() {
    var HTMLElements={}
    document.getElementById = jasmine.createSpy('HTML Element').and.callFake(function(ID) {
        if(!HTMLElements[ID]) {
           var newElement = document.createElement('input');
           HTMLElements[ID] = newElement;
        }
        return HTMLElements[ID];
    });
    it('should indicate "not matching" when the passwords do not match.', function() {
        var msg=document.getElementById("message");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","123");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.innerHTML).toEqual("not matching");
    });
    it('should change the text to red color when the passwords do not match.', function() {
        var msg=document.getElementById("message");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","123");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.style.color).toEqual("red");
    });
    it('should indicate "matching" when the passwords match.', function() {
        var msg=document.getElementById("message");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","1234");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.innerHTML).toEqual("matching");
    });
    it('should change the text to green color when the passwords match.', function() {
        var msg=document.getElementById("message");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","1234");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.style.color).toEqual("green");
    });
});