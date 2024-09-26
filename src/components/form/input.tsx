interface Props {
  name: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
}: Props) {
  return (
    <input
      type={type}
      value={value}
      className="bg-transparent border border-foreground p-2"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  )
}
