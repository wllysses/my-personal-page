import { useQuery } from "react-query";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Spinner } from "../../components/Spinner";

interface RepoProps {
    id: number
    name: string
    html_url: string
    language: string
    homepage: string | null
};

export function Projects() {

    const { data: repos, isLoading } = useQuery<RepoProps[]>(['repos'], () => api.getUserRepos(import.meta.env.VITE_USER_NAME));
     
    return (
        <>
            <Header />
            <div className="mt-6 w-full flex justify-center flex-wrap gap-4">
                { isLoading && <Spinner /> }
                {
                    repos &&
                    repos.map((repo) => (
                        <div key={repo.id} className="max-w-[270px] w-full border border-[#b2b2b2] p-4 dark:border-violet-500 max-sm:max-w-full">
                            <div className="mb-4">
                                <h2 className="font-syne text-xl font-bold">{repo.name}</h2>
                                <span className="text-[#b2b2b2] font-manrope font-light">{repo.language}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    className="bg-violet-500 p-2 rounded text-white font-manrope font-bold"
                                >
                                    Repositório
                                </a>
                                { 
                                    repo.homepage &&  
                                    <a 
                                        href={`${!repo.homepage.includes('https://') ? 'https://' + repo.homepage : repo.homepage}`} 
                                        target="_blank" 
                                        className="bg-violet-500 p-2 rounded text-white font-manrope font-bold"
                                    >
                                        Deploy
                                    </a>
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
        </>
    );
};