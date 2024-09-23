import { ProfileContent } from '@/components/profile/profile-content'

interface Props {
  params: {
    username: string
  }
}

export default async function ProfilePage({ params: { username } }: Props) {
  return <ProfileContent username={username} />
}
