import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";

export function Contact() {

    const contactFormSchema = z.object({
        name: z.string().nonempty('Preenchimento obrigatório.'),
        email: z.string().nonempty('Preenchimento obrigatório.').email('Formato de e-mail inválido.'),
        message: z.string().nonempty('Preenchimento obrigatório.'),
    });

    type ContactFormSchema = z.infer<typeof contactFormSchema>;

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormSchema)
    });

    function handleSendMessage(data: ContactFormSchema) {

        const templateParams = {
            from_name: data.name,
            message: data.message,
            email: data.email
        };
        
        emailjs
        .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
        .then((resp) => {
            if(resp.status == 200) {
                alert('E-mail enviado com sucesso!');
                reset();
                return;
            }
        })
        .catch((err: Error) => {
            console.log('Error: ' + err.message);
        });
    }
    
    return (
        <Container>
            <Header />
            <form className="mt-6 w-full flex flex-col gap-4" onSubmit={handleSubmit(handleSendMessage)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Nome completo</label>
                    <input type="text" className="p-2 border-2 text-zinc-900 outline-none focus:outline-violet-500" { ...register('name') } />
                    { errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span> }
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">E-mail</label>
                    <input type="email" className="p-2 border-2 text-zinc-900 outline-none focus:outline-violet-500" { ...register('email') } />
                    { errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span> }
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Nome completo</label>
                    <textarea className="p-2 border-2 text-zinc-900 resize-none outline-none focus:outline-violet-500" rows={5} { ...register('message') } />
                    { errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span> }
                </div>
                <button type="submit" className="bg-violet-500 hover:bg-violet-400 w-full p-2 text-white font-manrope">Enviar</button>
            </form>
        </Container>
    );
}
