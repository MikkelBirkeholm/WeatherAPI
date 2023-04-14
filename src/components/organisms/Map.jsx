'use client'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import React from 'react'
import getCurrentLocation from '@/utils/getCurrentLocation'
import Marker from '@/components/atoms/Marker'

export default function Map({ lat, lng, address }) {
  const [map, setMap] = React.useState() // map to render and render to
  const [loc, setLoc] = React.useState() // current user location
  const [mapOptions, setMapOptions] = React.useState({
    mapId: '1cdc7a504e15f689',
    center: { lat: 0, lng: 0 },
    zoom: 12,
    disableDefaultUI: true,
  }) // map options

  const ref = React.useRef()

  // get users current location
  React.useEffect(() => {
    const myLocation = async () => {
      let newLoc = await getCurrentLocation()
      setLoc(newLoc)
      setMapOptions({ ...mapOptions, center: newLoc })
    }
    myLocation()
  }, [])

  // If location is found, render map
  React.useEffect(() => {
    loc && setMap(new window.google.maps.Map(ref.current, mapOptions))
  }, [loc])

  // everything is rendered via the render function
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <p>Loading</p>
      case Status.FAILURE:
        return (
          <Layout>
            <h1>Something Went Wrong</h1>
          </Layout>
        )
      case Status.SUCCESS:
        return (
          <>
            <div
              ref={ref}
              className=" h-[15em] w-[25em] block rounded-md shadow-lg"
            />
            <h3>{address}</h3>
            {map && <Marker map={map} position={loc} />}
          </>
        )
    }
  }

  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_API_KEY}
      version="beta"
      libraries={['marker']}
      render={(status) => render(status)}
    />
  )
}
