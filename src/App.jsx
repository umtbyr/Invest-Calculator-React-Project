import Header from './components/Header';
import InputFields from './components/InputFields';
import Result from './components/Result';
import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment';
function App() {
    //I use the state in App component because inputFields and Result components needs it.
    const [inputs, setInputs] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    
    //This function set the inputs object using the previous state.
    //Overrides 1  property
    const inputHandler = (fieldName, value) => {
        setInputs((prevInputs) => {
            return { ...prevInputs, [fieldName]: +value };
        });
        

    };
    
    
    let result = calculateInvestmentResults(inputs);

    return (
        <div>
            <Header />
            <InputFields inputHandler={inputHandler}>INPUTS</InputFields>
            <Result data={result}/>
        </div>
    );
}

export default App;
