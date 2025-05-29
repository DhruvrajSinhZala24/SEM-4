function Map_prop(props) {
    return (
        <>
            {props.brand.map((value) => {
                return <p>
                    {value.Title}<br/>
                    {value.Price}<br/>
                    {value.Rating}<br/>
                    <img src ={value.Image} height='300px' width='300px'></img><br/>
                    
                </p>
            }

            )
            }

        </>
    )
}

export default Map_prop