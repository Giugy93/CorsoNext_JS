"use server";

export async function submitContactForm(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message ) {
        return { 
            message: "Tutti i campi sono obbligatori.", 
            type: "error" as const,
         };
    }
    
    if(Math.random() < 0.1) {
        return {
            message: "Si è verificato un errore durante l'invio del modulo. Riprova più tardi.",
            type: "error" as const,
        };
    };

    return {
        message: "Il modulo è stato inviato con successo. Ti contatteremo al più presto.",
        type: "success" as const,
    };
}