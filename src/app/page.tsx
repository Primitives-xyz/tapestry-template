import { createProfileAction } from '@/actions/create-profile-action'
import { Card } from '@/components/card'
import { Input } from '@/components/form/input'
import { SubmitButton } from '@/components/form/submit-button'
import { Profile } from '@/components/profile'

export default async function Home() {
  return (
    <div className="p-12 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">Tapestry boilerplate</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl mb-3">Create profile</h2>
          <Card>
            <form action={createProfileAction} className="flex flex-col gap-3">
              <Input name="username" />
              <Input name="ownerWalletAddress" />
              <SubmitButton>Create profile</SubmitButton>
            </form>
          </Card>
        </div>
        <div>
          <h2 className="text-xl mb-3">Profiles</h2>
          <div className="space-y-4">
            <Profile username="marcus" />
            <Profile username="poloo" />
            <Profile username="nick" />
            <Profile username="deej" />
            <Profile username="dj" />
          </div>
        </div>
      </div>
    </div>
  )
}
