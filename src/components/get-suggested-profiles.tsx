import { getSuggestedProfilesAction } from '@/actions/get-suggested-profiles-actions'
import { Card } from './common/card'
import { Input } from './form/input'
import { SubmitButton } from './form/submit-button'

interface Props {}

export async function GetSuggestedProfiles({}: Props) {
  return (
    <Card>
      <form action={getSuggestedProfilesAction} className="flex flex-col gap-3">
        <Input name="ownerWalletAddress" placeholder="Owner wallet address" />
        <SubmitButton>Get Suggested Profiles</SubmitButton>
      </form>
    </Card>
  )
}
