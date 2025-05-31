function Event3() {
    const mystyle = {
        color: "white",
        backgroundColor: "#000000",
        padding: "10px 20px",
        margin: "30px"
    };
    const doubleClickHandler = (event) => {
        alert("Welcome to LJU");
    }
    return (
        <>
            <button style={mystyle} onDoubleClick={doubleClickHandler}>Double Click
                here</button>
        </>
    );
}
export default Event3;