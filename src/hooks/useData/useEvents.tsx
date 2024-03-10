import { useQuery } from '@tanstack/react-query'

import { fetchEvents } from '../../../api/api'

export const useEvents = () => {
    return useQuery({ queryKey: ['events'], queryFn: fetchEvents })
}
