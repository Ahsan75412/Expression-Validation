function validation(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var post  = document.getElementById('post').value;
   



    var usercheck = /^[A-Za-z. ]{3,30}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}/;
    var emailcheck = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
    var mobilecheck = /^01[0-9]{9}$/ ;
    var postcheck = /^[0-9]{4}$/;
    


    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML = " ";
    }else{
        document.getElementById('usererror').innerHTML = "**Username is Invalid!";
         return false;
    } 



    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML = " ";
    }else{
        document.getElementById('passworderror').innerHTML = "**Password is Invalid!";
         return false;
    } 

    if(cpassword.match(password)){
        document.getElementById('cpassworderror').innerHTML = " ";
    }else{
        document.getElementById('cpassworderror').innerHTML = "**Password is Not Matching!";
         return false;
    } 



    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }else{
        document.getElementById('emailerror').innerHTML = "**Email is Invalid!";
         return false;
    } 




    if(mobilecheck.test(number)){
        document.getElementById('mobileerror').innerHTML = " ";
    }else{
        document.getElementById('mobileerror').innerHTML = "**Your Number is Invalid!";
         return false;
    } 



    if(postcheck.test(post)){
        document.getElementById('posterror').innerHTML = " ";
    }else{
        document.getElementById('posterror').innerHTML = "**Your Post Code is Invalid!";
         return false;
    } 




    }




