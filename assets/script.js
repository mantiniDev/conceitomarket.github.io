document.addEventListener("DOMContentLoaded", function () {
    // Verificar se o usuário já aceitou os cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookieConsent").style.display = "block";
    }

    // Ação ao clicar no botão "Aceitar"
    document.getElementById("acceptCookies").addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        document.getElementById("cookieConsent").style.display = "none";
    });
});
