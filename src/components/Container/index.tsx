import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
};

export function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-[600px] w-full mx-auto my-16 p-2">
            {children}
        </div>
    );
};
