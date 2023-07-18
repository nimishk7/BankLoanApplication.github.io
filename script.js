const form = document.getElementById("myForm");
function emicalcuator() {
  const ltennure = document.getElementById("ltennure").value.trim();
  const loanAmount = document.getElementById("loanAmount").value.trim();
  let ltennure1 = ltennure * 12;
  let interest = 8.5 / 12 / 100;
  let emi = loanAmount * interest * (Math.pow(1 + interest, ltennure1) /
    (Math.pow(1 + interest, ltennure1) - 1));
  var emiResult = document.getElementById("estimated");
  emiResult.textContent = "";

  emiResult.textContent="Monthly Rs"+(emi).toFixed(2)+"/-";
}



const getFromData = (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value.trim(5);
  var url = "confirm.html?fullName=" + encodeURIComponent(fullName);

  const email = document.getElementById("email").value.trim();
  var url = "confirm.html?email=" + encodeURIComponent(email);
  
  const pan = document.getElementById("pan").value.trim();
  const loanAmount = document.getElementById("loanAmount").value.trim();

  window.location.href = url;
  

  // Regular expressions for validation
  var nameRegex = /^[A-Za-z ]{4,}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  if (!nameRegex.test(fullName)) {
    alert(
      "Please enter a valid full name (at least two words with minimum four characters each)."
    );
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!panRegex.test(pan)) {
    alert("Please enter a valid PAN number (format: ABCDE1234F).");
    return false;
  }

  if (
    isNaN(loanAmount) ||
    loanAmount === "" ||
    parseInt(loanAmount) <= 0 ||
    parseInt(loanAmount) > 999999999
  ) {
    alert("Please enter a valid loan amount (numeric value up to 9 digits).");
    return false;
  }

  alert(`Your OTP is ${Math.round(Math.random() * 9999) + 1000}`);
  window.location.assign("confirm.html");

  return true; // Form is valid
};

form.addEventListener("submit", getFromData);
