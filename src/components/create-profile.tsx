import { createProfileAction } from '@/actions/create-profile-action'
import { Card } from './card'
import { Input } from './form/input'
import { SubmitButton } from './form/submit-button'

interface Props {}

export async function CreateProfile({}: Props) {
  return (
    <Card>
      <form action={createProfileAction} className="flex flex-col gap-3">
        <Input name="username" placeholder="Username" />
        <Input name="ownerWalletAddress" placeholder="Owner wallet address" />
        <SubmitButton>Create Profile</SubmitButton>
      </form>
    </Card>
  )
}
