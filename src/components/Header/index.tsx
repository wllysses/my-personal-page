import { SiGithub, SiLinkedin, SiWhatsapp, SiInstagram } from "react-icons/si";
import { Nav } from "../Nav";
import avatar from "../../assets/images/avatar.webp";

export function Header() {

    return (
        <>
            <header className="w-full flex flex-col gap-2 border-b border-b-[#B7B7B7] pb-6">
                <div className="w-16 h-16 bg-violet-500 rounded-full">
                    <img src={avatar} alt="Meu Avatar" />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-syne text-2xl">Wllysses Tavares</h2>
                    <h4 className="text-[#B7B7B7] font-syne">Full-Stack Developer</h4>
                    <div className="mt-2 flex items-center gap-2">
                        <a href="https://github.com/wllysses" target="_blank" className="hover:text-violet-500">
                            <SiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/wllysses" target="_blank" className="hover:text-violet-500">
                            <SiLinkedin />
                        </a>
                        <a href="https://wa.me/5583988745654" target="_blank" className="hover:text-violet-500">
                            <SiWhatsapp />
                        </a>
                        <a href="https://instagram.com/wllyssesjr" target="_blank" className="hover:text-violet-500">
                            <SiInstagram />
                        </a>
                    </div>
                </div>
                <Nav />
            </header>
        </>
    );
};
