import { ReactNode } from "react";
import { Card } from "../Card";

interface BoxProps {
    id: string,
    children: ReactNode,
}

export const BoxWithCheckbox = ({ id, children }: BoxProps) => (
    <Card>
        <div className="flex flex-col gap-2 py-4 px-2 m-w-max">
            <input id={id} className="self-start delete-checkbox" type="checkbox" />
            {children}
        </div>
    </Card>
)
