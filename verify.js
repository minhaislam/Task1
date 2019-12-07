"use strict"
function valid(){
	var name=document.forms["f1"]["name"];
	var uname=document.forms["f1"]["uname"];
	var email=document.forms["f1"]["email"].value;	
	var pass=document.forms["f1"]["pass"];	
	var cpass=document.forms["f1"]["cpass"];
	
	var d=document.getElementById("date");
	var m=document.getElementById("month");
	var y=document.getElementById("year");

		if (pass.value!=cpass.value) {
			alert("password don't match");
			return false;
		}  
		else{
			if (fname(name))
			 {
			  document.getElementById('em1').innerHTML=name.value;
			  //alert(name.value);
			//return true;
		}
			if (femail(email))
			{	document.getElementById('em2').innerHTML=email;
			// return false;
			}
			if (funame(uname))
			 {document.getElementById('em3').innerHTML=uname.value;
			 	//return false;
			 }
			if (fpass(pass))
			 {document.getElementById('em4').innerHTML=pass.value;
			 	//return false;
			 }
			if (fcpass(cpass))
			 {
			 	document.getElementById('em5').innerHTML=name.value;
			 	//return false;
			 }
				if (radio())
			 {//document.getElementById('em6').innerHTML=r;
			 //	return false;
			 }
				if (dob(d,m,y))
					{document.getElementById('em7').innerHTML=d.value;
						//return false;
					}
			
			else{return false;}
			alert(name.value+"\n"+email+"\n"+uname.value+"\n"+pass.value+"\n"+radio()+"\n"+d.value+"/"+m.value+"/"+y.value);
			return false;
				//
			
		}

		
return true;
}
function fname (name) {
	//var error = false;
		//var name=document.getElementById('name');
		
		//var n1 = document.getElementById('n1').textContent;
		//alert(name);
		if(name.value.length==0){
			//alert('empty');
			document.getElementById('em1').innerHTML="empty";
			return false;
		}
		else if(name.value.length<2){
			//alert('At least two words');
			document.getElementById('em1').innerHTML="At least two words";
			return false;
		}
		else if((name.value[0]<'A' || name.value[0]>'Z') && (name.value[0]<'a' || name.value[0]>'z')){
			//alert('starts with letter');
			document.getElementById('em1').innerHTML="starts with letter";
			return false;
		}
		return name;
		
		}
		function funame (uname) {
		//var uname=document.getElementById('uname');
		//var n1 = document.getElementById('n1').textContent;
		//alert(name.value);
		if(uname.value==""){
			//alert('empty');
			document.getElementById('em3').innerHTML="empty";
			return false;
		
		}
		else if(uname.value.length<2){
			//alert('At least two words');
			document.getElementById('em3').innerHTML="At least two words";
		return false;
		}
		else if((uname.value[0]<'A' || uname.value[0]>'Z') && (uname.value[0]<'a' || uname.value[0]>'z')){
			//alert('starts with letter');
			document.getElementById('em3').innerHTML="starts with letter";
			return false;
		}
		return uname;
		
		}

		function femail(email) {
			//var email=document.getElementById('email').value;
    //alert(email);
    if (email=="") {
    	document.getElementById('em2').innerHTML="empty";
    return false;
    }
    else{
    	var emailParts = email.split('@');
    	if(emailParts.length !== 2) {
       document.getElementById('em2').innerHTML="Wrong number of @ signs";
        return false;   
    }
    else{
    	 var emailName = emailParts[0];
    var emailDomain = emailParts[1];

    
    if(emailName.length < 1 || emailDomain.length < 3) {
       document.getElementById('em2').innerHTML="Wrong number of @ signs";
    	return false;
    }
    else{
    	 var validChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','0','1','2','3','4','5','6','7','8','9','_','-'];

    // emailName must only include valid chars
    for(var i = 0; i < emailName.length; i += 1) {
        if(validChars.indexOf(emailName.charAt(i)) < 0 ) {
             document.getElementById('em2').innerHTML="Invalid character in name section";
         	return false;
        }
    }
    for(var j = 0; j < emailDomain.length; j += 1) {
        if(validChars.indexOf(emailDomain.charAt(j)) < 0) {
             document.getElementById('em2').innerHTML="Invalid character in domain section";
             return false;
        }
    }
     if(emailDomain.indexOf('.') <= 0) {
         document.getElementById('em2').innerHTML="Domain must include but not start with .";
        return false;
    }
    else{
    	 var emailDomainParts = emailDomain.split('.');
    if(emailDomainParts[emailDomainParts.length - 1].length < 2) {
         document.getElementById('em2').innerHTML="Domain's last . should be 2 chars or more from the end";
        return false;
    }
    }
    }
    }
    }
    return email;
}

function fpass (pass) {
		//var pass=document.getElementById('pass');
		//var n1 = document.getElementById('n1').textContent;
		//alert(name.value);
		if(pass.value==""){
			document.getElementById('em4').innerHTML="empty";
        return false;
		}
		else if(pass.value.length<8){
			document.getElementById('em4').innerHTML="must contain 8 characters";
        return false;
		}
		return pass;
	}

		function fcpass (cpass) {
		//var cpass=document.getElementById('pass');
		//var n1 = document.getElementById('n1').textContent;
		//alert(name.value);
		if(cpass.value==""){
			document.getElementById('em5').innerHTML="empty";
        return false;
		}
		else if(cpass.value.length<8){
			document.getElementById('em5').innerHTML="must contain 8 characters";
        return false;
		}
		
	return cpass;
		
		}
		function radio(){
			//var r;
			if(document.getElementById("r1").checked){
				//return r=document.getElementById("r1").value;
				//return r=document.forms["f1"]["r1"];
				return document.getElementById('em6').innerHTML=document.getElementById("r1").value;
				
				
			}
if(document.getElementById("r2").checked){
				//return r=document.getElementById("r2");
				//return r=document.forms["f1"]["r2"];
				return document.getElementById('em6').innerHTML=document.getElementById("r2").value;
			}
if(document.getElementById("r3").checked){
				//return r=document.getElementById("r3");
				 //return r=document.forms["f1"]["r3"];
				return document.getElementById('em6').innerHTML=document.getElementById("r1").value;
			}
			else{
				document.getElementById('em6').innerHTML="must choose an option";
				return false;
			}

		}

		function dob(d,m,y){
				/*var d=document.getElementById("date");
				var m=document.getElementById("month");
				var y=document.getElementById("year");*/
				if (d.value=="" || m.value=="" || y.value=="") {
					document.getElementById('em7').innerHTML="fill all the values";
					return false;
				}
				else if (d.value.length!=2) {
					document.getElementById('em7').innerHTML="must be 2 numbers";
					return false;
				}
				else if (m.value.length!=2) {
					document.getElementById('em7').innerHTML="must be 2 numbers";
					return false;
				}
				else if (y.value.length!=4) {
					document.getElementById('em7').innerHTML="must be 2 numbers";
					return false;
				}
				else if (d.value <= '0' || d.value >= '9'){
					document.getElementById('em7').innerHTML="must be numbers";
					return false;
				}
				else if (m.value <= '0' || m.value >= '9'){
					document.getElementById('em7').innerHTML="must be numbers";
					return false;
				}
				else if (y.value <= '0' || y.value >= '9'){
					document.getElementById('em7').innerHTML="must be numbers";
					return false;
				}
				return d;
				return m;
				return y;

		}