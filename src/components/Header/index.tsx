import { ReactNode } from "react"

interface Props {
    children: ReactNode,
}

export const Header = ({ children }: Props) => {
    return (
        <div className="flex w-full p-2 items-center justify-between border-b border-black dark:border-white">
            {children}
        </div>
    )
}
