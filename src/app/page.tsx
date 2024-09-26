import { GetSuggestedProfiles } from '@/components/get-suggested-profiles/get-suggested-profiles'
import { CreateProfile } from '@/components/profile/create-profile'
import { ProfilesList } from '@/components/profile/profile-list'

export default async function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between space-x-4">
        <CreateProfile />
        <GetSuggestedProfiles />
      </div>
      <div className="w-full">
        <h2 className="text-xl mb-3">Profiles</h2>
        <ProfilesList />
      </div>
    </div>
  )
}
