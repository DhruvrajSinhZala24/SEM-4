import Map_prop from './Map_task4.js'

function Map_prop_p() {
    const product = [{ Title: 'Iphone 16 Pro Max', Price: '25', Rating: '4.7 Star', Image: 'iphone.jpg' },
    { Title: 'Samsung AU7700', Price: '50000', Rating: '5 Star', Image: 'samsung.jpg' },
    { Title: 'BMW M5', Price: '20000000', Rating: '5 Star', Image: 'm5.jpg' }
    ]

    return (
        <>
            <Map_prop brand={product} />
        </>
    )
}
export default Map_prop_p