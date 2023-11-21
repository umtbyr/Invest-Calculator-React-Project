

export default function UserInput({ children, inputHandler, fieldName }) {

    //this function gets the input value and calls inputhandler inside of the App component
    const inputValue = (event) => {
        inputHandler(fieldName, event.target.value);
    };
    

    return (
        <>
            <label htmlFor='input'>{children}</label>
            <input
                onChange={inputValue}
                id='input'
                type='number'
            />
        </>
    );
}
