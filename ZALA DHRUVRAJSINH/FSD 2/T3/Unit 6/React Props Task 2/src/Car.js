function Car(props){
    return(<>
        <table border={'2px'}>
            <tr>
                <td>Name</td>
                <td>Roll Number</td>
                <td>T1 Marks</td>
                <td>T2 Marks</td>
            </tr>
            <tr>
                <td>{props.brand.name}</td>
                <td>{props.brand.roll}</td>
                <td>{props.brand.t1}</td>
                <td>{props.brand.t2}</td>
            </tr>
        </table>
    </>);
    
}
export default Car
