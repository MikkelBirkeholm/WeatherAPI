const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function error(err) {
    // console.warn(`ERROR(${err.code}): ${err.message}`);
    console.log(err)
    if (err.code === 1) {
        alert("Please allow location services to use this app")
    } else if (err.code === 2) {
        alert("Please enable location services to use this app")
    } else if (err.code === 3) {
        console.log('Reloading in 2 sec')
        setTimeout(() => {
            location.reload();
        }, 2000)
    }
}

async function getAddress(lat, lng) {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_API_KEY}`
    let res = await fetch(url)
    let dataRes = await res.json()
    let address = dataRes.results[0].formatted_address
    return address
}


export default async function getCurrentLocation() {
    let locPromise = new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((pos) => resolve(pos), error, options);
    });
    const { longitude, latitude } = (await locPromise).coords
    const address = await getAddress(latitude, longitude);

    return { lat: latitude, lng: longitude, address: address }
}