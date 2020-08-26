window.onload = iniciar;

function iniciar(){
	document.getElementById('send').addEventListener('click', validar, false);
}


function validationName(){
	var name = document.getElementById('name');
	var errorName = document.getElementById('errorMessageName');
	if (!name.checkValidity()){
		errorName.innerHTML = name.validationMessage;
		errorName.className = 'errorMessage';
		name.focus();
		return false;
	} else{
		errorName.style.display = 'none';
	}
	return true;
}


function validationLastName(){
	var lastName = document.getElementById('lastName');
	var errorLastName = document.getElementById('errorMessageLastName');
	if (!lastName.checkValidity()){
		errorLastName.innerHTML = lastName.validationMessage;
		errorLastName.className = 'errorMessage';
		lastName.focus();
		return false;
	} else{
		errorLastName.style.display = 'none';
	}
	return true;
}


function validationEmail(){
	var email = document.getElementById('email');
	var errorEmail = document.getElementById('errorMessageEmail');
	if (!email.checkValidity()){
		errorEmail.innerHTML = email.validationMessage;
		errorEmail.className = 'errorMessage';
		email.focus();
		return false;
	} else{
		errorEmail.style.display = 'none';
	}
	return true;
}


function validationTextareaMessage(){
	var textareaMessage = document.getElementById('textareaMessage');
	var errorTextarea = document.getElementById('errorMessageTextarea');
	if (!textareaMessage.checkValidity()){
		errorTextarea.innerHTML = textareaMessage.validationMessage;
		errorTextarea.className = 'errorMessage';
		textareaMessage.focus();
		return false;
	} else{
		errorTextarea.style.display = 'none';
	}
	return true;
}



function validationTermsPrivacy(){
	var termsPrivacy = document.getElementById('termsPrivacy');
	var errorTermsPrivacy = document.getElementById('errorMessageTermsPrivacy');
	var checkboxMark = document.getElementById('checkboxMark');

	if (!termsPrivacy.checkValidity()){
		errorTermsPrivacy.innerHTML = termsPrivacy.validationMessage;
		//errorTermsPrivacy.innerHTML = 'Please indicate that you accept the Terms and Conditions';
		errorTermsPrivacy.className = 'errorMessage';
		checkboxMark.className = 'checkbox-mark checkbox-mark-error'
		termsPrivacy.focus();
		return false;
	} else{
		errorTermsPrivacy.style.display = 'none';
		checkboxMark.className = 'checkbox-mark';
	}
	return true;
}


function buttonSent(){
	var buttonSend = document.getElementById('send');
	buttonSend.className = 'button--green';
	alert('The message has been sent successfully ^^!');
}


function validar(e){
	if (validationName() && validationLastName() && validationEmail() && validationTextareaMessage() && validationTermsPrivacy() && buttonSent()){
		return true;
	} else {
		e.preventDefault();
		return false;
	}
}

function resultsForm(){
	//NOTE: Done with Json
	var name = document.getElementById('name').value;
	var lastName = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var textareaMessage = document.getElementById('textareaMessage').value;

	var listJson = {
		name: name,
		lastName: lastName,
		email: email,
		phone: phone,
		message: textareaMessage
	}
	console.log(listJson);


	//NOTE: Done with JS
	/*var inputsValues = document.getElementsByClassName('value-form');
	var listValues = {
		name: inputsValues[0].value,
		lastName: inputsValues[1].value,
		email: inputsValues[2].value,
		phone: inputsValues[3].value,
		message: inputsValues[4].value
	}
	console.log(listValues);*/

}















