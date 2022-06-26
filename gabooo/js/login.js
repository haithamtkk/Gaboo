
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

console.log(btn);
console.log(modal);


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById('login').style.display="block";
  document.getElementById('signup').style.display="none";
}

btn2.onclick = function() {
  modal.style.display = "block";
  document.getElementById('login').style.display="none";
  document.getElementById('signup').style.display="block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function showOrHidden(){

   if(document.getElementById('login').style.display=="block")
   {
    document.getElementById('login').style.display="none";
    document.getElementById('signup').style.display="block";
   }
   else
   {
    document.getElementById('signup').style.display="none";
    document.getElementById('login').style.display="block";
    
   }
}


function cheak(event){
   
    var name=document.getElementById('name').value;
    var Email=document.getElementById('Email').value;
    var phone=document.getElementById('phone').value;
    var pass=document.getElementById('pass').value;
    var confirm=document.getElementById('confirm').value;

    
   if(name !="" && Email != "" && phone !="" && pass !="" && confirm !="")
   {
    if(pass != confirm)
    {
        document.getElementById('notmach').innerHTML="the password does not match";
        event.preventDefault();
    }
    else
    {
        document.getElementById("signupForm").submit();
    }
   }
   

}
