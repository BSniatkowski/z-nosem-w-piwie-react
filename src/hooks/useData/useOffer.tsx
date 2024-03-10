import { useQuery } from '@tanstack/react-query'

import { fetchOffer } from '../../../api/api'

export const useOffer = () => {
    return useQuery({ queryKey: ['offer'], queryFn: fetchOffer })
}
