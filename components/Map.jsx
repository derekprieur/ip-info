import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = () => {

    const coordinates = {
        lat: 59.95,
        lng: 30.33
    }

    return (
        <div>
            <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={coordinates} center={coordinates} defaultZoom={14} margin={[50, 50, 50, 50]} options={''} onChange={''} >

            </GoogleMapReact>
        </div>
    )
}

export default Map