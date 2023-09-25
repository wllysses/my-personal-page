import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { api } from "../../services/api";


export function Dashboard() {

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [text, setText] = useState<any>('');

    const createPostSchema = z.object({
        title: z.string().nonempty('Preenchimento obrigatório.'),
        resume: z.string().nonempty('Preenchimento obrigatório.'),
    });

    type CreatePostSchema = z.infer<typeof createPostSchema>;

    const { register, handleSubmit,formState: { errors } } = useForm<CreatePostSchema>({
        resolver: zodResolver(createPostSchema)
    });

    async function registerNewPost(data: CreatePostSchema) {
        const fetchData = await api.createPost(data.title, data.resume, text);

        if(!fetchData.sucess) {
            return alert(fetchData.message);
        }

        alert(fetchData.message);
    }

    function handleUserLogOut() {
        localStorage.removeItem('USER');
        navigate('/');
    }

    useEffect(() => {
        if(localStorage.getItem('USER') === null) {
            navigate('/login');
        }
    }, []);

    return (
       <div className="container mx-auto mt-10 flex flex-col gap-2 px-4">
            <header className="w-full flex items-center justify-between">
                <h2 className="font-syne text-3xl">Criar novo post</h2>
                <button className="bg-red-500 rounded px-4 py-1" onClick={handleUserLogOut}>Sair</button>
            </header>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(registerNewPost)}>
                <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                    <div className="flex flex-col">
                        <label className="font-manrope">
                            Título
                        </label>
                        <input type="text" className="p-2 rounded border text-black" { ...register('title') } />
                        { errors.title && <span className="text-red-500 font-bold">{errors.title.message}</span> }
                    </div>
                    <div className="flex flex-col">
                        <label className="font-manrope">
                            Descrição
                        </label>
                        <input type="text" className="p-2 rounded border text-black" { ...register('resume') } />
                        { errors.resume && <span className="text-red-500 font-bold">{errors.resume.message}</span> }
                    </div>
                </div>
                <MDEditor 
                    onChange={setText}
                    value={text}
                />
                <button 
                    type="submit" 
                    className="bg-violet-500 text-white h-10 rounded font-manrope font-bold hover:bg-violet-400"
                    disabled={!text}
                >
                    Criar post
                </button>
            </form>
       </div>
    );
}
