'use client'
import React from 'react'
import Map from '@/components/organisms/Map'
import getCurrentLocation from '@/utils/getCurrentLocation';

async function getLoc() {
    let { lat, lng, address } = await getCurrentLocation();
    return { lat, lng, address }
}
export default function Test() {
    const [loc, setLoc] = React.useState({ lat: 0, lng: 0, address: '' })
    React.useEffect(() => {
        getLoc().then((res) => {
            setLoc(res)
        })
    }, [])
    console.log(loc)

    return <Map address={loc.address} />
}