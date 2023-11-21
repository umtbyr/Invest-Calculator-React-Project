import { formatter } from "../util/investment";
export default function Result({ data }) {
    let initialInvestment;
    if(data.length > 0) {

        initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
    } 

    // since data is an array I can use .map method to render a list of data dynamically.
    let result = data.map( (row) => {

        const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
        const totalAmountInvested = row.valueEndOfYear - totalInterest;

        let tableValues = (
            <tr key={row.year} className='center'>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
        );
         return tableValues;
    }

    )

    return (
        <>
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {...result}
                </tbody>
            </table>
        </>
    );
}
