function btnreset(){
    alert("Form Resetted");
    reset();
}

function reset(){
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    
    document.getElementById("tikettype").selected=0;
    document.getElementById("quantity").value = '';
    document.getElementById("terms").checked = false;
}

function submit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var tikettype = document.getElementById("tikettype").value;
    var qty = document.getElementById("quantity").value;
    var user = document.getElementById("terms");
    var angka = "[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]";
    
    if(name.length<5){
        errors.innerHTML = '<label>'+'Name Must Be Minimal 5 Character length'+'</label>';
    
    }
    else if((email.indexOf('@',0)==-1) || (email.indexOf('.',0)==-1))
    {
        errors.innerHTML = '<label>'+'Email format is invalid'+'</label>';
    }
    else if(phone.length!=12 && phone != angka ){
        errors.innerHTML = '<label>'+'Phone format is invalid'+'</label>';
    }
    else if(tikettype == ""){
        errors.innerHTML = '<label>'+'Tiket Type must be chosen'+'</label>';
    }
    else if(qty< 1 || qty > 12){
        errors.innerHTML =  '<label>'+'Quantity must be between 1 and 12'+'</label>';
    }
    else if(!user.checked){
        errors.innerHTML = '<label>'+'User Agreement must be checked'+'</label>';
    }
    
    else{
        errors.innerHTML = " ";
        alert("Name : "+name+"\n"+ "Email : "+email+"\n"+ "Phone : "+phone+"\n"+ "Tiket Type : "+tikettype+"\n" +"quantity : "+qty+"\n")
        
        alert("thankyou for your purchase :D");
        reset();
    }
    

}
