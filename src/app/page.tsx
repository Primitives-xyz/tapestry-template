import { CreateProfile } from '@/components/create-profile'
import { ProfilesList } from '@/components/profile-list'

export default async function Home() {
  return (
    <div className="p-12 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">Tapestry Boilerplate</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl mb-3">Create Profile</h2>
          <CreateProfile />
        </div>
        <div>
          <h2 className="text-xl mb-3">Profiles</h2>
          <div className="space-y-4">
            <ProfilesList />
          </div>
        </div>
      </div>
    </div>
  )
}
