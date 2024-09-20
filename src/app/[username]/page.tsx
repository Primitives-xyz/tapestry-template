import { Profile } from '@/components/profile/profile'

interface Props {
  params: {
    username: string
  }
}

export default async function ProfilePage({ params: { username } }: Props) {
  return <Profile username={username} />
}
