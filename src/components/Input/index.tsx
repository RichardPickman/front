
interface Props {
    id: string,
    onChange: (value: string | number) => void,
}

export const InputText = ({ onChange, id }: Props) => (
    <input
        required
        autoComplete="off"
        onChange={(event) => onChange(event.target.value)}
        className="px-2 py-1 border rounded outline-none" id={id}
    />
)

export const InputNumber = ({ onChange, id }: Props) => (
    <input
        required
        autoComplete="off"
        onChange={(event) => onChange(event.target.value)}
        className="px-2 py-1 border rounded outline-none" id={id}
    />
)
