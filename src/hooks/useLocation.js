import getCurrentLocation from '@/utils/getCurrentLocation'


export default async function useLocation() {
    const { lat, lng } = await getCurrentLocation()


    // let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_API_KEY}`
    // let res = await fetch(url)
    // let dataRes = await res.json()
    if (lat) {
        return { lat, lng }
    }
}