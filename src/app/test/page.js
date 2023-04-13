'use client'
import Card from '@/components/molecules/Card.jsx'
import React from 'react'
import useWeather from '@/hooks/useWeather'
import { convertDateTime } from '@/utils/convertDateTime'
import CardWrapper from '@/components/molecules/CardWrapper'

export default function Home() {
    const { data, error, isLoading } = useWeather()

    if (isLoading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div>Something Went Wrong</div>
    }

    if (data) {
        console.log(convertDateTime(data.daily.time[0]))
    }

    return (
        <div className='max-w-full'>

            <CardWrapper>
                {data && data.daily.time.map((time, index) => {
                    return (
                        <Card key={index}>
                            <p>{convertDateTime(time)}</p>
                        </Card>
                    )
                })}
            </CardWrapper>

        </div>
    )
}
