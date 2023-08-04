import { Header } from "../../components/Header";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNodedotjs, SiStyledcomponents, SiTailwindcss, SiBootstrap, SiSass, SiRedux, SiNextdotjs, SiAxios, SiFigma, SiExpress, SiPostgresql, SiPrisma , SiGit } from "react-icons/si";

export function Techs() {
    return (
        <>
            <Header />
            <ul className="w-full flex items-center justify-center flex-wrap gap-4">
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiHtml5 size={50} color="#8b5cf6" />
                    <h4 className="font-syne">HTML</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiCss3 size={50} color="#8b5cf6" />
                    <h4 className="font-syne">CSS</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiJavascript size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Javascript</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiReact size={50} color="#8b5cf6" />
                    <h4 className="font-syne">React</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiTypescript size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Typescript</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiStyledcomponents size={50} color="#8b5cf6" />
                    <h4 className="font-syne text-center">Styled Components</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiTailwindcss size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Tailwind</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiSass size={50} color="#8b5cf6" />
                    <h4 className="font-syne">SASS</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiBootstrap size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Bootstrap</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiAxios size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Axios</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiRedux size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Redux</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiNextdotjs size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Next</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiFigma size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Figma</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiNodedotjs size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Node</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiExpress size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Express</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiPrisma size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Prisma</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiPostgresql size={50} color="#8b5cf6" />
                    <h4 className="font-syne">PostgreSQL</h4>
                </li>
                <li className="mt-6 w-32 h-32 border flex items-center justify-center flex-col gap-2 dark:border-violet-500">
                    <SiGit size={50} color="#8b5cf6" />
                    <h4 className="font-syne">Git</h4>
                </li>
            </ul>
        </>
    );
};
