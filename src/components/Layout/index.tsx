import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
    <main className="flex justify-center m-2">
        <div className="flex flex-col w-full h-full gap-4 items-center justify-center max-w-3xl">
            {children}
        </div>
    </main>
)

interface DirectionProps {
    className?: string,
    children: ReactNode,
}

export const Row = ({ children, className }: DirectionProps) => <div className={`flex flex-row ${className}`}>{children}</div>;

export const Col = ({ children, className }: DirectionProps) => <div className={`flex flex-col ${className}`}>{children}</div>;
