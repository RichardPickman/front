interface Props {
    id: string,
    type: string,
    onChange: (value: string | number) => void,
}

export const InputWithLabel = ({ id, type, onChange }: Props) => (
    <input
        min={1}
        required
        type={type}
        autoComplete="off"
        placeholder="Provide a value"
        onChange={(event) => onChange(event.target.value)}
        className="px-2 py-1 border rounded outline-none" id={id}
    />
);
