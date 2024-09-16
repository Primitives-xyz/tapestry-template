import { getProfilesList } from '@/lib/tapestry'
import { Profile } from './profile'

interface Props {}

export async function ProfilesList({}: Props) {
  const data = await getProfilesList({})

  const profiles = data.nodes.filter((node: any) => {
    return node.labels.includes('profile')
  })

  return (
    <div>
      {profiles.map((profile: any) => {
        return (
          <Profile
            key={profile.properties.username}
            username={profile.properties.username}
          />
        )
      })}
    </div>
  )
}
