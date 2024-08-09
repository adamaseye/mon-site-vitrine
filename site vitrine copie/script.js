

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nom Prenom: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "petit9411@gmail.com",
        Password : "A8EB86BD50686A2907DCFE80AFF59AC06C5A",
        To : 'petit9411@gmail.com',
        From : "petit9411@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Réussi!",
                text: "Message envoyer!",
                icon: "success"
              });
        }
      }

    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

});
