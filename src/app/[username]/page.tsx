import { Profile } from '@/components/profile'

interface Props {
  params: {
    username: string
  }
}

export default async function ProfilePage({ params: { username } }: Props) {
  return (
    <div className="p-12 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">Tapestry Boilerplate</h1>
      <Profile username={username} />
    </div>
  )
}
