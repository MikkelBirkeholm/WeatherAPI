import { NextResponse } from 'next/server'
import getCurrentLocation from '@/utils/getCurrentLocation'
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key={process.env.NEXT_PUBLIC_API_KEY}

export async function GET(request) {
    let { lat, lng } = getCurrentLocation()


    return NextResponse.json('test')
}


// let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_API_KEY}`

// let res = await fetch(url)
// let data = await res.json()