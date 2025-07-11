document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector(".awilo_fn_contact_sendbtn");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get input values
        const name = document.querySelector(".your-name .name").value;
        const email = document.querySelector(".your-email .email").value;
        const message = document.querySelector(".your-messagse .message").value;

        if (name && email && message) {
            Email.send({
                Host: "smtp.mailendo.com", // Replace with your SMTP host
                Username: "rajroman139@gmail.com", // Replace with your SMTP username
                Password: "zanz yfya bvkb lnvh", // Replace with your SMTP password
                To: "rajroman139@gmail.com", // Recipient email
                From: email, // Sender's email
                Subject: "Message from Contact Form",
                Body: `
                    <strong>Name:</strong> ${name} <br>
                    <strong>Email:</strong> ${email} <br>
                    <strong>Message:</strong> ${message}
                `
            }).then((response) => {
                const returnMessage = document.querySelector(".returnmessage");
                if (response === "OK") {
                    returnMessage.innerHTML = "Your message has been sent successfully!";
                    returnMessage.style.color = "green";
                    document.getElementById("contact_form").reset(); // Reset form
                } else {
                    returnMessage.innerHTML = "Failed to send message. Please try again.";
                    returnMessage.style.color = "red";
                    console.error(response);
                }
            });
        } else {
            document.querySelector(".empty_notice").style.display = "block";
        }
    });
});
