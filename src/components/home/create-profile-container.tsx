'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import Dialog from '@/components/common/dialog'
import { CreateProfile } from '@/components/profile/create-profile'
import { useEffect, useState } from 'react'

export function CreateProfileContainer() {
  const [createProfileDialog, setCreateProfileDialog] = useState(false)

  const { walletAddress, mainUsername, loadingMainUsername } =
    useCurrentWallet()

  useEffect(() => {
    if (walletAddress && !mainUsername && !loadingMainUsername) {
      setCreateProfileDialog(true)
    }
  }, [walletAddress, mainUsername, loadingMainUsername])

  return (
    <Dialog isOpen={createProfileDialog} setIsOpen={setCreateProfileDialog}>
      <CreateProfile setCreateProfileDialog={setCreateProfileDialog} />
    </Dialog>
  )
}
