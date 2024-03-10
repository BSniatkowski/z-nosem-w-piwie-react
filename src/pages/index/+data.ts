import { dehydrate, QueryClient } from '@tanstack/react-query'

import { fetchEvents, fetchMerch, fetchOffer } from '../../../api/api'

const data = async () => {
    const queryClient = new QueryClient()

    await Promise.all([
        queryClient.prefetchQuery({ queryKey: ['offer'], queryFn: fetchOffer }),
        queryClient.prefetchQuery({ queryKey: ['events'], queryFn: fetchEvents }),
        queryClient.prefetchQuery({ queryKey: ['merch'], queryFn: fetchMerch }),
    ])

    return {
        dehydratedState: dehydrate(queryClient),
    }
}

export default data
