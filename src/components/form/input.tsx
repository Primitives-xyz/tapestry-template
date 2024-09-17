interface Props {
  name: string
  placeholder?: string
}

export function Input({ name, placeholder }: Props) {
  return (
    <input
      type="text"
      className="bg-transparent border border-foreground p-2"
      placeholder={placeholder}
      name={name}
    />
  )
}
