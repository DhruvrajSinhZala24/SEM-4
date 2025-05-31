//Create a React function component named File1 that receives two props,
// productName and price. The component should display the product name and
// price. Additionally, add a button labeled "Add to cart" to the component. When
// the button is clicked onClick event triggered and an alert should be displayed
// with the message "Your Product is Added to cart!". 
const Products = (Props) => {
    const product = () =>{
        alert(`Your Product ${Props.pdct.pname} Is Added to cart!`)
    }
    return(
        <>
            <h1>Product Name: {Props.pdct.pname}</h1>
            <h1>Price: {Props.pdct.price}</h1>
            <button onClick={product}>Add To Cart</button>
        </>
    );
}
export default Products;