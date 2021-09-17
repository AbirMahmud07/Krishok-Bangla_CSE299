var profileEmail = "abcs"
var profileName = "abcs"

window.addEventListener('load', () => {
    profileEmail= localStorage.getItem('profileEmailOut');
    profileName= localStorage.getItem('profileNameOut');
    var loginButton = document.getElementsByClassName('resetBtn')
    for (var i = 0; i < loginButton.length; i++) {
        var button = loginButton[i]
        button.addEventListener('click', loginButtonClicked)

    }
    
})





function loginButtonClicked(event) {

    console.log("profile btn working!!")


    document.getElementsByClassName('emailInput')[0].innerHTML = profileEmail;
    document.getElementsByClassName('profileName')[0].innerHTML = profileName;
    document.getElementsByClassName('profileFarmName')[0].innerHTML = profileName +" Agro";
   



}