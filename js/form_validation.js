function validate(myForm) {
    
    //alert("Validation in work");
    
    var errorNode = document.getElementById( "error" );
    
    var firstName = myForm.first_name.value;
    var lastName = myForm.last_name.value;
    var password = myForm.pass.value;
    var repassword = myForm.repass.value;
    var email = myForm.email.value;
    var gender = myForm.gender.value;
    var region = myForm.region.value;
    var langSelected = new Array();
    var langElem = myForm.lang;
    var message = myForm.message.value;
    
    
    // console.log( langElem );
    
    // console.log( message );
    
    //var phone = myForm.phone.value;
    
    //console.log( firstName, lastName, email, password, repassword );
    
    
    if( firstName.length == 0 ) {
        errorNode.innerHTML = "Please enter the first name";
        return false;
    }
    
    if( lastName.length == 0 ) {
        errorNode.innerHTML = "Please enter the last name";
        return false;
    }
    
    if( password.length == 0 ) {
        errorNode.innerHTML = "Please enter the password";
        return false;
    }
    
    if( password.length <= 6 ) {
        errorNode.innerHTML = "Password should be at least seven characters long";
        return false;
    }
    
    if( password != repassword ) {
        errorNode.innerHTML = "Both passwords should match each other";
        return false;
    }
    
    if( gender.length == 0 ) {
        errorNode.innerHTML = "Please select the gender";
        return false;
    }
    
    if( region.length == 0 ) {
        errorNode.innerHTML = "Please select your development region";
        return false;
    }
    if( ! isValidEmail(email)) {
        errorNode.innerHTML = "Please enter the email address correctly";
        return false;
    }
    
    
    for( var i=0; i<langElem.length; i++ ) {
        if( langElem[i].checked ) {
            langSelected.push( langElem[i].value );
        }
    }
    
    if( langSelected.length == 0 ) {
        errorNode.innerHTML = "Please select at least one language";
        return false;
    }
    
    if( message.length == 0 ) {
        errorNode.innerHTML = "Please enter the message";
        return false;
    }
    /*
    if( ! isValidPhoneNumber( phone ) ) {
        errorNode.innerHTML = "Please enterh the phone number correctly";
        return false;
    }
    */
    return false;
}

function isValidEmail(email) {
    
    var indexOfDot = email.lastIndexOf( "." );
    var indexOfAt = email.indexOf( "@" );
    
    if( indexOfDot > 0 
            && indexOfAt > 0 
            && indexOfAt < indexOfDot ) {
        return true;
    }
    
    return false;
}

/*
function isValidPhoneNumber( phoneNo ) {
    var phoneNoInt = parseInt( phoneNo );
    
    console.log( ! isNaN( phoneNoInt ), phoneNo.length, phoneNoInt.size );
    if( ! isNaN(phoneNoInt) 
            && phoneNo.length == (phoneNoInt+"").length 
            && phoneNo.length == 10 ) {
        return true;
    }
    
    return false;
}
*/