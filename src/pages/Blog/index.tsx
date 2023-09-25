import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Spinner } from "../../components/Spinner";
import { Container } from "../../components/Container";

interface PostProps {
    id: number
    title: string
    resume: string
    created_at: string
}

export function Blog() {

    const { data: posts, isLoading } = useQuery<PostProps[]>(['posts'], api.getPosts);

    return (
        <Container>
            <Header />
            <div className="mt-6 w-full flex flex-col gap-4">
                { isLoading && <Spinner /> }
                {
                    posts &&
                    posts.map((post) => (
                        <Link 
                            key={post.id} 
                            className="border border-[#b2b2b2] p-4 dark:border-violet-500"
                            to={`/blog/${post.id}`}
                        >
                            <span className="text-[#b2b2b2]">{new Date(post.created_at).toDateString()}</span>
                            <h2 className="text-xl font-bold my-2">{post.title}</h2>
                            <p>{!post.resume ? '' : post.resume}</p>
                        </Link>
                    ))

                }
            </div>
        </Container>
    );
}
