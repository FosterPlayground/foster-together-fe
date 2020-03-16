import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import { locations } from './Locations'
import { Map } from 'google-maps-react'

const SimpleMap = props => {
  const [center, setCenter] = useState({ lat: 39.99, lng: -104.707 })
  const [zoom, setZoom] = useState(11)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '90vh',
        width: '100%',
      }}
    >
      <div       style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '90%',
      }}>
      <GoogleMapReact
        bootstrapURLKeys={
          {
            //key: process.env.GOOGLE_MAPS_API_KEY
          }
        }
        defaultCenter={center}
        defaultZoom={zoom}
        {...console.log(Map)}
      >
        {locations.map(location => {
          return (
            <Marker
              lat={location.coords.lat}
              lng={location.coords.lng}
              name={location.title}
              zoom={''}
              color='blue'
            />
          )
        })}
      </GoogleMapReact>
      </div>
    </div>
  )
}

export default SimpleMap
