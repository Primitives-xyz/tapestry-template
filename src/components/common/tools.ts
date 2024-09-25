export const abbreviateWalletAddress = ({
  address,
  maxLength = 10,
}: {
  address: string
  maxLength?: number
}) => {
  if (address.length <= maxLength) return address

  const PRE_EMPTIVE_WALLET_ADDRESS_PREFIX = 'pre-emptive-'
  if (address.startsWith(PRE_EMPTIVE_WALLET_ADDRESS_PREFIX)) {
    return 'LOADING…'
  }

  const start = address.substring(0, 4)
  const end = address.substring(address.length - 4)

  return `${start}…${end}`
}
