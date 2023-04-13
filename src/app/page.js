'use client'
import Card from '@/components/molecules/Card.jsx'
import React from 'react'
import useWeather from '@/hooks/useWeather'
import CardWrapper from '@/components/molecules/CardWrapper'

export default function Home() {
    const { data, error, isLoading } = useWeather()
    let weather = [];

    if (isLoading) {
        return <div>loading...</div>
    }

    if (error) {
        console.log(error);
        return <div>Something Went Wrong. Check the log.</div>
    }

    if (data) {
        console.log(data)
        data.daily.time.map((time, index) => {
            weather.push({
                time: time,
                tempMax: data.daily.temperature_2m_max[index],
                tempMin: data.daily.temperature_2m_min[index],
                feelsLikeMax: data.daily.apparent_temperature_max[index],
                feelsLikeMin: data.daily.apparent_temperature_min[index],
                windDirection: data.daily.winddirection_10m_dominant[index],
                weatherCode: data.daily.weathercode[index],
                precipitation: data.daily.precipitation_sum[index],
                windSpeed: data.daily.windspeed_10m_max[index],
            })
        })
        console.log(weather);
    }




    // hvert card skal have et data-objekt (syv i alt)
    // temp high og low (+ feels like?)
    // vindhastighed
    // vindretning
    // Weather Code (beskrivelse)


    return (
        <div className='max-w-full'>

            <CardWrapper>
                {data && weather.map((weather, index) => {
                    return (
                        <Card key={index} data={weather} />
                    )
                })}
            </CardWrapper>

        </div>
    )
}
