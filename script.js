function validatePassword() {
    let passwordMain = document.querySelector("#pass-main").value;
    let passwordConfirm = document.querySelector("#pass-confirm").value;
    if (passwordMain != passwordConfirm) {
        document.querySelector(".password-error").textContent = '*Passwords do not match';
        document.querySelector(".submit-btn").disabled = true;
        document.querySelector("#pass-main").setCustomValidity("Invalid");
        document.querySelector("#pass-confirm").setCustomValidity("Invalid");
        return
    }
    document.querySelector(".password-error").textContent = '';
    document.querySelector(".submit-btn").disabled = false;
    document.querySelector("#pass-main").setCustomValidity("");
    document.querySelector("#pass-confirm").setCustomValidity("");
    return;
}