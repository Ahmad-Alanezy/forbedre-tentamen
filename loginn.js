document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const epost = document.getElementById("epost").value;
    const passord = document.getElementById("passord").value;

    alert("You are logged in")
    // Gjør noe med dataene, for eksempel send til serveren for autentisering
    console.log("Innloggingsforsøk med følgende data:");
    console.log("Epost:", epost);
    console.log("Passord:", passord);

    // Omdiriger brukeren til hovedsiden eller en annen side etter pålogging
    window.location.replace("Service.html");
});
