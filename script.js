const scriptURL = "PASTE_GOOGLE_SCRIPT_LINK";

const form = document.getElementById("admissionForm");

form.addEventListener("submit", e => {
 e.preventDefault();
 fetch(scriptURL, {method:"POST", body:new FormData(form)})
 .then(()=>alert("Admission Submitted Successfully!"))
 .catch(()=>alert("Error!"));
});
