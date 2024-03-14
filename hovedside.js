function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Konstruer e-postinnholdet
    var emailContent = "Navn: " + name + "\n" +
                       "E-post: " + email + "\n" +
                       "Melding: " + message;

    // Her kan du legge til logikk for å sende e-posten, f.eks. ved hjelp av en backend-server eller et tredjeparts-API.

    // Her vises en enkel bekreftelsesmelding til brukeren
    alert("Takk for din melding! Vi vil svare så snart som mulig.");
    
    // Valgfritt: Tilbakestille skjemaet etter at meldingen er sendt
    document.getElementById("contactForm").reset();
}
