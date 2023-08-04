import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ReactMarkdown from "react-markdown";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Spinner } from "../../components/Spinner";


export function Post() {

    const navigate = useNavigate();

    const { id } = useParams();

    const { data: post, isLoading } = useQuery(['post'], () => api.getPostById(parseInt(id!)));

    return (
        <>

            <>
                <Header />
                <article className="mt-6 w-full flex flex-col gap-4 prose dark:prose-invert">
                    <div className="flex items-center gap-2 font-bold cursor-pointer" onClick={() => navigate(-1)}>
                        <BiArrowBack />
                        <span>Voltar</span>
                    </div>
                    {
                        isLoading ? <Spinner /> : <ReactMarkdown children={post.text.replace(/\\r\\n/g, '\n')} />
                    }
                </article>
            </>
        </>
    );
};
