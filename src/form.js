const Form = () => (
    <form>
        <label>Name:</label>
        <input type="text"/>
        <label>Age:</label>
        <input type="number"/>
        <button type="button" onClick={() => alert('yo!')}>Submit</button>
    </form>
);

export default Form;