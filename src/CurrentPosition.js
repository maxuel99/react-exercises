import { useEffect } from "react"
import { useState } from "react"

function useCurrentPosition() {
    const [location, setLocation] = useState({ 
        loaded: false,
        coordinates: { lat:'', lng:'' }
    })

    const success = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    }

    const error = () => {
        setLocation({
            loaded: true,
            error: 'Unable to retrieve your location'
        })
    }

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            error({
                code: 0,
                message: "Geolocation is not available",
            });
        }
    }, [])
    
    return { location };
}

export function CurrentPosition() {
    const { location } = useCurrentPosition()
    
    return (
        <div className="my-3">
            <h2 className="text-2xl font-bold underline mx-3 mb-2">My Location</h2>
            <p className="ml-4 italic">{location.loaded ? JSON.stringify(location) : ''}</p>
        </div>
    )
}