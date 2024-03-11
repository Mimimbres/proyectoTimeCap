import {useQuery} from '@tanstack/react-query'

export const useCapsules = () => {
  const getAllCapsules = () => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/capsule/')
      const data = await response.json()
      return data
    }
    const {data, isLoading} = useQuery({
      queryKey: ['userCapsules'],
      queryFn: async() => await getData(),
    })

    return {data, isLoading}
  }
  const getCapsule =(id) => {
  }

  return {getAllCapsules, getCapsule}
}