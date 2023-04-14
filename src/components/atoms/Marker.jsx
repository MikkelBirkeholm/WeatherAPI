import React from 'react'
import { createRoot } from 'react-dom/client'

export default function Marker({ map, position, id }) {
  const markerRef = React.useRef()
  const rootRef = React.useRef()

  React.useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement('div')
      rootRef.current = createRoot(container) // this is maybe redundant without advanced markers
      markerRef.current = new window.google.maps.Marker({
        position,
        map,
        id,
      })
    }
  }, [])

  React.useEffect(() => {
    rootRef.current.render()

    markerRef.current.position = position
    markerRef.current.map = map
    markerRef.current.id = id
  }, [map, position])
}
