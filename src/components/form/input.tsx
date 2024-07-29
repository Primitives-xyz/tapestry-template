interface Props {
  name: string
}

export function Input({ name }: Props) {
  return (
    <input
      type="text"
      className="bg-transparent border border-foreground p-2"
      name={name}
    />
  )
}
