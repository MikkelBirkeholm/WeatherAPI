import { getUrlDates } from '@/utils/getUrlDates.js'
import { NextResponse } from 'next/server'


export async function GET(request) {
    let [urlNow, urlWeek] = getUrlDates();
    let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=57.05&longitude=9.92&hourly=temperature_2m,precipitation,weathercode,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,winddirection_10m_dominant&current_weather=true&windspeed_unit=ms&timeformat=unixtime&timezone=Europe%2FBerlin&start_date=${urlNow}&end_date=${urlWeek}`)
    let data = await res.json()

    return NextResponse.json(data)

}
