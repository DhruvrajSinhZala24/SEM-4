import img1 from './images/iphone.jpg'
import img2 from './images/samsung.jpg'
import img3 from './images/m5.jpg'
import img4 from './images/img.png'

function map2(){
    const images = [img1,img2,img3,img4]

    return(
        <>
            {
                images.map((value)=>{
                    return <img src={value} height='300px' width='500px' padding/>
                })
            }
        </>
    )
}
export default map2