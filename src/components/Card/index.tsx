import { ReactNode } from "react";

interface Props {
    children: ReactNode,
}

export const Card = ({ children }: Props) => <div className="border rounded">{children}</div>
