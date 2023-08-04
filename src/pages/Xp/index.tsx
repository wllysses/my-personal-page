import { Header } from "../../components/Header";

export function Xp() {
    return (
        <>
            <Header />
            <ul className="mt-6 w-full">
                <li className="p-4 border border-[#b2b2b2] dark:border-violet-500">
                    <h3 className="font-syne">Desenvolvedor Front-end</h3>
                    <h4 className="my-2">Fábrica de Software UBTech UNIPÊ - mar de 2023 / jul de 2023</h4>
                    <div>
                        <h4 className="font-syne">Projeto Minutas</h4>
                        <p className="text-justify">Sistema criado utilizando inteligência artificial para
                            auxiliar os servidores da Justiça Federal da Paraíba
                            na elaboração de minutas jurídicas tornando o
                            processo mais rápido, padronizado e com a
                            possibilidade de persistência em
                            uma base de dados permitindo a consulta e
                            aproveitamento dos textos gerados sempre que
                            necessário.
                        </p>
                    </div>
                </li>
            </ul>
        </>
    );
};
