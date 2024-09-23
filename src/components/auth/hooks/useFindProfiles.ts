import { findAllProfiles } from '@/lib/tapestry'
import { useEffect, useState } from 'react'

export const useFindAllProfiles = ({
  walletAddress,
  shouldIncludeExternalProfiles = false,
}: {
  walletAddress: string
  shouldIncludeExternalProfiles?: boolean
}) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await findAllProfiles({
          walletAddress,
        })

        console.log(result)
        setData(result) // On stocke les données reçues
      } catch (err) {
        setError('Erreur lors de la récupération des profils')
      } finally {
        setLoading(false) // Arrêter le chargement après la requête
      }
    }

    if (walletAddress) {
      fetchData() // Appelle l'API si `walletAddress` est fourni
    } else {
      setError('Adresse de portefeuille manquante')
      setLoading(false)
    }
  }, [walletAddress, shouldIncludeExternalProfiles])

  return { data, loading, error }
}
