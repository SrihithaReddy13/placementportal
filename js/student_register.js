var check = function() {
    if (document.getElementById('pwd').value ==
      document.getElementById('cpwd').value) {
      document.getElementById('match_pwd').style.color = 'green';
      document.getElementById('match_pwd').innerHTML = 'matching';
    } else {
      document.getElementById('match_pwd').style.color = 'red';
      document.getElementById('match_pwd').innerHTML = 'not matching';
    }
}

var name_check = function(){
  var letters = /^[A-Za-z\s]+$/;
  var name=document.getElementById("stud_name");
  if (name.value==""){
    document.getElementById('name_val').style.display = 'none'; 
  }
  else if(name.value.match(letters)){
    document.getElementById('name_val').style.display = 'none'; 
  }
  else{
    document.getElementById('name_val').style.display = 'block';  
    document.getElementById('name_val').style.color = 'red';
    document.getElementById('name_val').innerHTML = 'This field only allows alphabets';
  }
}

var rno_check = function(){
  var rollno_format = /^([C][B]|[A][M]|[B][G]).([E][N]).([U][4]|[M][3])([C][S][E]|[E][E][E]|[E][C][E]|[M][E][C]|[C][I][V])([1][6]|[1][7]|[1][8])([0-9]{3})$/;
  var rno=document.getElementById("rollno");
  if (rno.value==""){
    document.getElementById('roll_val').style.display = 'none'; 
  }
  else if(rno.value.match(rollno_format)){
    document.getElementById('roll_val').style.display = 'none'; 
  }
  else{
    document.getElementById('roll_val').style.display = 'block';  
    document.getElementById('roll_val').style.color = 'red';
    document.getElementById('roll_val').innerHTML = 'Please Enter correct format of Roll number (ex: CB.EN.U4CSE170XX)';
  }
}