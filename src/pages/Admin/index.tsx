import { useState } from "react";
import { useForm } from "react-hook-form";
import MDEditor from "@uiw/react-md-editor";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";

interface PostProps {
    title: string
    resume: string
    text: string
};


export function Admin() {

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
        const post: PostProps = { ...data, text };

        const fetchData = await api.createPost(post);

        if(!fetchData.sucess) {
            return alert(fetchData.message);
        };

        alert(fetchData.message);
    };

    return (
       <>
            <h2 className="font-syne text-2xl">Criar Post</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(registerNewPost)}>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <label className="font-manrope">
                            Título
                        </label>
                        <input type="text" className="p-2 rounded border text-black" { ...register('title') } />
                        { errors.title && <span>{errors.title.message}</span> }
                    </div>
                    <div className="flex flex-col">
                        <label className="font-manrope">
                            Descrição
                        </label>
                        <input type="text" className="p-2 rounded border text-black" { ...register('resume') } />
                        { errors.resume && <span>{errors.resume.message}</span> }
                    </div>
                </div>
                <MDEditor 
                    onChange={setText}
                    value={text}
                />
                <button type="submit" className="bg-violet-500 text-white h-10 rounded font-manrope font-bold">Criar</button>
            </form>
       </>
    );
};
