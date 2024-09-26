'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { Card } from '@/components/common/card'
import { Input } from '@/components/form/input'
import { SubmitButton } from '@/components/form/submit-button'
import { useSuggestedProfiles } from '@/components/get-suggested-profiles/hooks/use-suggested-profiles'
import { useState } from 'react'

export function GetSuggestedProfiles() {
  const { walletAddress, mainUsername, loadingMainUsername } =
    useCurrentWallet()

  const [ownerWalletAddress, setOwnerWalletAddress] = useState(
    walletAddress || '',
  )

  const { profiles, loading, error, getSuggestedProfiles } =
    useSuggestedProfiles()

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(e)
    e.preventDefault()
    await getSuggestedProfiles(ownerWalletAddress)
  }

  // if (loadingMainUsername || !mainUsername) {
  //   return null
  // }

  return (
    <div className="w-1/2">
      <h2 className="text-xl mb-3">Get Suggested Profiles</h2>
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            value={ownerWalletAddress}
            onChange={(e) => setOwnerWalletAddress(e.target.value)}
            name="ownerWalletAddress"
            placeholder="Owner wallet address"
          />
          <SubmitButton>
            {loading ? 'Loading...' : 'Get Suggested Profiles'}
          </SubmitButton>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {profiles && (
          <div>
            {/* Render the suggested profiles */}
            {profiles.map((profile: any) => (
              <div key={profile.id}>{profile.name}</div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
