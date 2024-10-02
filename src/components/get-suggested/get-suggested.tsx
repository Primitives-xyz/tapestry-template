'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { Alert } from '@/components/common/alert'
import { Card } from '@/components/common/card'
import { Input } from '@/components/form/input'
import { SubmitButton } from '@/components/form/submit-button'
import { useSuggested } from '@/components/get-suggested/hooks/use-suggested'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function GetSuggested() {
  const { walletAddress, mainUsername, loadingMainUsername } =
    useCurrentWallet()
  const [ownerWalletAddress, setOwnerWalletAddress] = useState(
    walletAddress || '',
  )
  const [showAlert, setShowAlert] = useState(false)

  const { profiles, loading, error, getSuggested } = useSuggested()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setShowAlert(false) // Reset the alert state on submit
    await getSuggested(ownerWalletAddress)
  }

  // Watch for changes in profiles to trigger the alert if profiles are empty
  useEffect(() => {
    if (profiles && Object.keys(profiles).length === 0) {
      setShowAlert(true)
    } else {
      setShowAlert(false)
    }
  }, [profiles])

  if (loadingMainUsername || !mainUsername) {
    return null
  }

  function handleClear() {
    setOwnerWalletAddress('')
  }

  return (
    <div className="w-1/2">
      <h2 className="text-xl mb-3">Get Suggested Profiles</h2>
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="w-full flex">
            <Input
              value={ownerWalletAddress}
              onChange={(e) => setOwnerWalletAddress(e.target.value)}
              name="ownerWalletAddress"
              placeholder="Owner wallet address"
            />
            {ownerWalletAddress && (
              <button
                type="button"
                onClick={handleClear}
                className="ml-2 p-2 bg-red-500 text-white rounded"
              >
                <X />
              </button>
            )}
          </div>
          <SubmitButton>
            {loading ? 'Loading...' : 'Get Suggested Profiles'}
          </SubmitButton>
        </form>

        <div className="mt-4">
          {!!profiles &&
            Object.entries(profiles).map(([key, item]: [string, any]) => {
              const username = item.profile.username
              return (
                <Link href={`/${username}`} key={key}>
                  <Card>
                    <h2 className="text-xl mb-2">{username}</h2>
                    {item.namespaces.map((val: any, idx: any) => {
                      return <div key={idx}>{val.readableName}</div>
                    })}
                  </Card>
                </Link>
              )
            })}
        </div>
      </Card>
      {showAlert && <Alert type="info" message="No profiles found" />}
      {error && <Alert type="error" message="Error occurred" />}
    </div>
  )
}
