
import UserInput from './UserInput';

export default function InputFields({inputHandler}) {

    return (
        <div id='user-input'>
            <ul>
                <li className='input-group'>
                    <div>
                        <UserInput
                            inputHandler={inputHandler}
                            fieldName='initialInvestment'
                        >
                            INITIAL INVESTMENT
                        </UserInput>
                    </div>
                    <div>
                        <UserInput
                            inputHandler={inputHandler}
                            fieldName='annualInvestment'
                        >
                            ANNUAL INVESTMENT
                        </UserInput>
                    </div>
                </li>

                <li className='input-group'>
                    <div>
                        <UserInput
                            inputHandler={inputHandler}
                            fieldName='expectedReturn'
                        >
                            EXPECTED RETURN
                        </UserInput>
                    </div>
                    <div>
                        <UserInput
                            inputHandler={inputHandler}
                            fieldName='duration'
                        >
                            DURATION
                        </UserInput>
                    </div>
                </li>
            </ul>
        </div>
    );
}
