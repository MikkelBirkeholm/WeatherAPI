import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useWeather() {
    const { data, error, isLoading } = useSWR(`/api/vejrapi`, fetcher)

    return {
        data: data,
        isLoading,
        isError: error
    }
}