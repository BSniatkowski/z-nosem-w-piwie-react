import { useQuery } from '@tanstack/react-query'

import { fetchMerch } from '../../../api/api'

export const useMerch = () => {
    return useQuery({ queryKey: ['merch'], queryFn: fetchMerch })
}
