"use client";

import { useFormStatus } from "react-dom";
import { submitContactForm } from "./actions";
import { useState } from "react";


function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="p-2 bg-zinc-500 text-zinc-100 rounded w-full text-center gap-2"
        >
            {pending ? "Inviando in corso..." : "Invia il messaggio"}
        </button>
    );
}

export default function ContactPage() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"success" | "error" | null>(null);
    const [show, setShow] = useState(false);

    async function handleSubmit(formData: FormData) {
        const result = await submitContactForm(formData);
        setMessage(result.message);
        setStatus(result.type);
        setShow(true);
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            
            <h1 className="text-2xl font-bold mb-6">
                Contattaci
            </h1>

            <form action={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 rounded mb-4 ">
                    <div>
                        <input
                            type="text"
                            placeholder="Nome"
                            name="name"
                            className="w-full p-5 rounded bg-zinc-700"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-5 rounded bg-zinc-700"
                        />
                    </div>
                </div>
                
                <textarea
                    name="message"
                    placeholder="Messaggio"
                    className="w-full p-5 rounded bg-zinc-700 mb-2">
                </textarea>

                <SubmitButton />

                {/* Messaggio con dissolvenza */}
                <div
                        className={`
                            transition-all 
                            ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
                            ${status === "error" ? "p-2 bg-red-900/50 border-red-900 rounded text-red-300" : ""}
                            ${status === "success" ? "p-2 bg-green-900/50 border-green-900 rounded text-green-300" : ""}
                        `}
                    >
                        {message}
                </div>
            </form>
        </div>
    );
}

/*import ContactForm from "../../components/ContactForm";

export default function Contact(){
    return (
        <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Contattaci</h1>

            <div className="text-lg text-gray-600 mb-8">
                <p>Compila il forum sottostante per metterti in contatto con noi</p>
            </div>

            <ContactForm/>
        </main>
    );
}*/
