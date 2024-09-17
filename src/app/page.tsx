import { Header } from '@/components/common/header'
import { CreateProfile } from '@/components/create-profile'
import { GetSuggestedProfiles } from '@/components/get-suggested-profiles'
import { ProfilesList } from '@/components/profile-list'

export default async function Home() {
  return (
    <div className="p-12 max-w-3xl mx-auto">
      <Header />
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between space-x-4">
          <div className="w-1/2">
            <h2 className="text-xl mb-3">Create Profile</h2>
            <CreateProfile />
          </div>
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
    </div>
  )
}
