"use client"
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Qui andrà la logica di invio
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulazione
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Qui puoi aggiungere il JSX del form
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 rounded mb-4">

                <input className="p-5 bg-zinc-900 rounded"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome"
                />
                
                <input className="p-5 bg-zinc-900 rounded"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                
            </div>
            
            <textarea className="p-5 bg-zinc-900 rounded w-full"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Messaggio"
            />

            <div className="p-1 bg-zinc-500 text-zinc-100 rounded w-full text-center mt-4 gap-2">
            <button type="submit" disabled={status === "sending"}>
                Invia
            </button>
            </div>

            {status === "success" && <p>Messaggio inviato!</p>}
            {status === "error" && <p>Errore nell'invio.</p>}
        </form>
    );
}