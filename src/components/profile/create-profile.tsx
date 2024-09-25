'use client'

import { createProfileAction } from '@/actions/create-profile-action'
import { useCurrentWallet } from '@/components/auth/hooks/useCurrentWallet'
import { Card } from '../common/card'
import { Input } from '../form/input'
import { SubmitButton } from '../form/submit-button'

export function CreateProfile() {
  const { walletAddress } = useCurrentWallet()

  return (
    <>
      {walletAddress && (
        <div className="w-1/2">
          <h2 className="text-xl mb-3">Create Profile</h2>
          <Card>
            <form action={createProfileAction} className="flex flex-col gap-3">
              <Input name="username" placeholder="Username" />
              <Input
                type="hidden"
                name="ownerWalletAddress"
                value={walletAddress}
              />
              <SubmitButton>Create Profile</SubmitButton>
            </form>
          </Card>
        </div>
      )}
    </>
  )
}
