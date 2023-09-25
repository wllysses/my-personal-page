import illustration from "../../assets/images/dev-illustration.svg";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";

export function Home() {
    return (
        <Container>
            <Header />
            <main className="w-full mt-6 flex flex-col gap-8 items-center">
                <p className="text-justify">
                    Desenvolvedor Front-end e Estudante de Sistemas para Internet. Apaixonado e entusiasta da tecnologia desde sempre, vi no desenvolvimento web e nos seus ecossistemas uma forma de demonstrar e aplicar o meu conhecimento sobre as tecnologias que estudo. Busco sempre manter-me atualizado com os avanços da tecnologia e de suas vertentes.
                </p>
                <p className="text-justify">Meu principal objetivo é atuar como desenvolvedor e programar interfaces e sistemas para a web. Implementar  designs através de códigos, como HTML, CSS, JavaScript, React como também criar sistemas através de tecnologias como: NodeJS, Typescript, Express e até mesmo lidar com banco de dados utilizando PostgreSQL. Busco colocar em prática os conhecimentos que tenho até aqui e colaborar da melhor maneira com a empresa que estiver trabalhando.</p>
                <img src={illustration} alt="Developer Illustration" className="w-60" />
            </main>
        </Container>
    );
}
