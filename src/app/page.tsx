import { GetSuggestedProfiles } from '@/components/get-suggested-profiles'
import { CreateProfile } from '@/components/profile/create-profile'
import { ProfilesList } from '@/components/profile/profile-list'

export default async function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between space-x-4">
        <CreateProfile />
        <div className="w-1/2">
          <h2 className="text-xl mb-3">Get Suggested Profiles</h2>
          <GetSuggestedProfiles />
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-xl mb-3">Profiles</h2>
        <ProfilesList />
      </div>
    </div>
  )
}
