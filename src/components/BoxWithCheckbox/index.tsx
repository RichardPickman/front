import { ReactNode } from "react";
import { Card } from "../Card";

interface BoxProps {
    id: string,
    children: ReactNode,
    onChange: (id: string) => void,
    isActive: boolean,
}

export const BoxWithCheckbox = ({ id, onChange, children, isActive }: BoxProps) => (
    <Card>
        <div className="flex flex-col gap-2 py-4 px-2 m-w-max delete-checkbox">
            <input className="self-start" checked={isActive} type="checkbox" onChange={() => onChange(id)} />
            {children}
        </div>
    </Card>
)
