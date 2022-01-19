console.log("JS is alive"); //to check if my js is connected to the html

//defining a fucntion to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//Defining a function to validate form
function validateForm() {
    //Retrieving the calues of form elements
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            //Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    //Define error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    //validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/; //comparable to a pattern in html5
        if (regex.test(name) == false) {
            printError("nameErr", "please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    //validate email
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/; //comparable to a pattern in html5
        if (regex.test(email) == false) {
            printError("emailErr", "please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    //validate mobile
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;; //comparable to a pattern in html5
        if (regex.test(mobile) == false) {
            printError("mobileErr", "please enter a valid 10 digits");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    //validate country
    if (country == "Select") {
        printError("countryErr", "Please select a country from the list");
    } else {
        printError("countryErr", " ");
        countryErr = false;
    }
     // Validate gender
     if (gender == " ") {
        printError("genderErr", "Please Make a Selection");
    } else {
        printError("genderErr", " ");
        genderErr = false;
    }
    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};

//     //validate gender
//     if (gender == " ") {
//         printError("genderErr", "Please select your gender");
//     } else {
//         printError("genderErr", " ");
//         countryErr = false;
//     }
//     //Prevent the form from being submitted if there are any errors
//     if ((nameErr || emailErr ||mobileErr || countryErr || genderErr) == true) { //las barras se ignica "or"
//         return false;
//     } else {
//        // Creating a string from input data for preview
//        var dataPreview = "You've entered the following details: \n" +
//        "Full Name: " + name + "\n" +
//        "Email Address: " + email + "\n" +
//        "Mobile Number: " + mobile + "\n" +
//        "Country: " + country + "\n" +
//        "Gender: " + gender + "\n";
//    if (hobbies.length) {
//        dataPreview += "Hobbies: " + hobbies.join(", ");
//    }
//    // Display input data in a dialog box before submitting the form
//   alert(dataPreview);
//     }

// };

