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
                            auxiliar os servidores da Justiça Federal da Paraíba na elaboração de minutas jurídicas tornando o processo mais rápido, padronizado e com a possibilidade de persistência em uma base de dados permitindo a consulta e aproveitamento dos textos gerados sempre que necessário.
                        </p>
                    </div>
                </li>
                <li className="mt-4 p-4 border border-[#b2b2b2] dark:border-violet-500">
                    <h3 className="font-syne">Desenvolvedor Full-Stack</h3>
                    <h4 className="my-2">Freelancer - ago de 2023</h4>
                    <div>
                        <h4 className="font-syne">Site Artelier</h4>
                        <p className="text-justify">Página de vendas desenvolvido para uma loja de artigos personalizados cujo nome é Artelier. Nela é possível acessar alguns produtos presentes no catálogo, obter respostas relacionadas as dúvidas mais recorrentes dos clientes e realizar a compra do item desejado através do redirecionamento com uma mensagem personalizada encaminhada ao Whatsapp da loja. Também será possível realizar o cadastro de novos produtos sempre que o cliente desejar e automaticamente o produto ficará disponível na página de vendas.
                        </p>
                    </div>
                </li>
            </ul>
        </>
    );
};
