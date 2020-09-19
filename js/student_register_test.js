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
        var msg=document.getElementById("match_pwd");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","123");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.innerHTML).toEqual("not matching");
    });
    it('should change the text to red color when the passwords do not match.', function() {
        var msg=document.getElementById("match_pwd");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","123");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.style.color).toEqual("red");
    });
    it('should indicate "matching" when the passwords match.', function() {
        var msg=document.getElementById("match_pwd");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","1234");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.innerHTML).toEqual("matching");
    });
    it('should change the text to green color when the passwords match.', function() {
        var msg=document.getElementById("match_pwd");
        var pwd1=document.getElementById("pwd");
        var pwd2=document.getElementById("cpwd");
        pwd1.setAttribute("value","1234");
        pwd2.setAttribute("value","1234");
        var calc = new check();
        expect(msg.style.color).toEqual("green");
    });
    it('should display error message when name is not comprised of only alphabets', function(){
        var msg=document.getElementById("name_val");
        var name=document.getElementById("stud_name");
        name.setAttribute("value","srih2343");
        var calc=new name_check();
        expect(msg.style.display).toEqual("block");
    });
    it('should display no error message when name is comprised of only alphabets', function(){
        var msg=document.getElementById("name_val");
        var name=document.getElementById("stud_name");
        name.setAttribute("value","Srihitha Reddy");
        var calc=new name_check();
        expect(msg.style.display).toEqual("none");
    });
    it('should display error message when roll no is not in format',function(){
        var msg=document.getElementById("roll_val");
        var rno=document.getElementById("rollno");
        rno.setAttribute("value","abcdefgh");
        var calc=new rno_check();
        expect(msg.style.display).toEqual("block");
    });
    
    it('should display no message when roll no is in format',function(){
        var msg=document.getElementById("roll_val");
        var rno=document.getElementById("rollno");
        rno.setAttribute("value","CB.EN.U4CSE17065");
        var calc=new rno_check();
        expect(msg.style.display).toEqual("none");
    });
});