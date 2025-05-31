const Form = () => {
    function handleSubmit(e) {
        e.preventDefault();
        alert(' You clicked submit.');
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;