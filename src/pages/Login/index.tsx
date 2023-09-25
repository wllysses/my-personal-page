import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";


export function Login() {

    const navigate = useNavigate();

    const validationSchema = z.object({
        email: z.string().nonempty('Preenchimento obrigatório.').email('Formato de e-mail inválido.'),
        password: z.string().nonempty('Preenchimento obrigatório.')
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const { register, handleSubmit,formState: { errors } } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema)
    });

    function handleUserLogin(data: ValidationSchema) {
        mutate(data);
    }

    const { mutate, isLoading } = useMutation({
        mutationFn: api.authUser,
        onError: (err) => {
            console.log(err);
            alert('E-mail ou senha incorretos.');
        },
        onSuccess: (data) => {
            localStorage.setItem('USER', JSON.stringify(data.userData));
            alert(data.message);
            navigate('/dashboard')
        }
    })

    return (
       <div className="h-screen w-full flex items-center justify-center">
            <main className="max-w-lg w-full p-4">
                <header>
                    <h2 className="font-bold text-2xl">Faça login com a sua conta</h2>
                </header>
                <form className="mt-5 w-full flex flex-col gap-4" onSubmit={handleSubmit(handleUserLogin)}>
                    <div className="flex flex-col">
                        <label className="font-bold">E-mail</label>
                        <input 
                            type="email"  
                            className="w-full p-2 rounded bg-zinc-700" 
                            placeholder="E-mail" 
                            { ...register('email') } 
                        />
                        { errors.email && <span className="text-red-500 font-bold">{errors.email.message}</span> }
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Senha</label>
                        <input 
                            type="password" 
                            className="w-full p-2 rounded bg-zinc-700" 
                            placeholder="Senha" 
                            { ...register('password') }
                        />
                        { errors.password && <span className="text-red-500 font-bold">{errors.password.message}</span> }
                    </div>
                    <button 
                        type="submit" 
                        className="rounded p-2 w-full font-bold text-zinc-50 bg-violet-500 hover:bg-violet-400"
                        disabled={isLoading}
                    >
                        { isLoading ? 'Carregando...' : 'Entrar' }
                    </button>
                </form>
            </main>
       </div>
    );
}
