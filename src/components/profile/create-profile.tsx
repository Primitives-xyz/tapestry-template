'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { Alert } from '@/components/common/alert'
import { Card } from '@/components/common/card'
import { Input } from '@/components/form/input'
import { SubmitButton } from '@/components/form/submit-button'
import { useCreateProfile } from '@/components/profile/hooks/use-create-profile'
import { useState } from 'react'

export function CreateProfile() {
  const { walletAddress, mainUsername, loadingMainUsername } =
    useCurrentWallet()
  const [username, setUsername] = useState('')
  const { createProfile, loading, error, response } = useCreateProfile()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (walletAddress && username) {
      await createProfile(username, walletAddress)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const validValue = value.toLowerCase().replace(/[^a-z0-9]/g, '')
    setUsername(validValue)
  }

  if (loadingMainUsername) {
    return null
  }

  return (
    <>
      {walletAddress && !mainUsername && (
        <div className="w-1/2">
          <h2 className="text-xl mb-3">Create Profile</h2>
          <Card>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex items-center">
                <Input
                  value={username}
                  onChange={handleInputChange}
                  name="username"
                  placeholder="Username"
                />
              </div>
              <SubmitButton>
                {loading ? 'Creating...' : 'Create Profile'}
              </SubmitButton>
            </form>
          </Card>
          {error && <Alert type="error" message={error} />}
          {response && (
            <Alert type="success" message="Profile created successfully!" />
          )}
        </div>
      )}
    </>
  )
}
