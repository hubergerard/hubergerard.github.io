function onResponse(ok, setStatus, response) {
    if (ok) {
        setStatus("Merci ! Nous reviendrons vers vous au plus vite.");
    } else {
        try {
            setStatus(response.data.error);
        } catch {
            setStatus("Oups ! Une erreur est apparue lors de la soumission de votre message.");
        }
    }
};


window.formbutton = window.formbutton || function () {
    (formbutton.q = formbutton.q || []).push(arguments)
};
formbutton("create", {
    theme: "classic",
    styles: {
        fontFamily: "Open Sans",
        button: {
            background: "#1f7ed8"
        },
        title: {
            background: "#1f7ed8",
            fontFamily: "Poppins",
        },
        resetLabel: {
            label: "Recommencer"
        }
    },
    action: "https://formspree.io/f/xaylqpdg",
    buttonImg: "<i class='fas fa-comment-alt codewise-bg' style='font-size:24px'/>",
    title: "&#x1F44B; Une question sur une formation ?",
    description: "Réponse dans les 24h.",
    fields: [
        {
            name: "email",
            type: "email",
            label: "Votre email*",
            required: true
        },
        {
            name: "Message",
            type: "textarea"
        },
        {
            name: "Envoyer",
            type: "submit"
        }],
    onResponse: onResponse
})