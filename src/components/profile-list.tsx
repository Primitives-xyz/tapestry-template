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
      {profiles.map((profile: any, index: number) => {
        return (
          <div className="mb-4" key={index}>
            <Profile username={profile.properties.username} />
          </div>
        )
      })}
    </div>
  )
}
