import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux'
import ReactGA from "react-ga4";

import { addItemToCart } from '../../state/Cart'
import { getOptionName } from '../../util'

import './OptionList.css';

const heading = ['Options', 'Odds', 'Refill Purchase'];

const sortFunctionMap = {
    'positive': (a, b) => a.option.strike - b.option.strike,
    'negative': (a, b) => b.option.strike - a.option.strike
}

// Input:
// values: a list of OptionInfo to display
// optionType: String. The active option type.
function OptionList(props) {
    const dispatch = useDispatch()
    let optionInfoList = props.values;
    if (optionInfoList === undefined || optionInfoList.length === 0) {
        return (<div></div>);
    }

    if (sortFunctionMap[props.optionType] === undefined) {
        throw Error('No sort function found for current option type ' + props.optionType)
    }

    optionInfoList.sort(sortFunctionMap[props.optionType]);


    const addItems = (option, odd, count) => {
        ReactGA.event({
            category: "bet",
            action: "add",
            label: option.product.description,
            value: count,
        });
        dispatch(addItemToCart(
            { option: option, odd: odd, count: count }))
    };

    return (
        <Table responsive>
            <thead>
                <tr>
                    {heading.map((value, index) => (
                        <th className='table-title' key={index}>{value}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='option-list-items'>
                {Array.from(optionInfoList).map((value, index) => (
                    <tr key={index}>
                        <td className='option-name'>{getOptionName(value.option.type, value.option.strike)}</td>
                        <td className='odd' md="auto">{value.odd.toFixed(2)}</td>
                        <td className='bet-button-set' md="auto">
                            <Button className="bet-button"
                                onClick={() => addItems(value.option, value.odd, 1)}>x1</Button>
                            <Button className="bet-button" onClick={() => addItems(value.option, value.odd, 10)}>x10</Button>
                            <Button className="bet-button" onClick={() => addItems(value.option, value.odd, 50)}>x50</Button>
                            <Button className="bet-button" onClick={() => addItems(value.option, value.odd, 100)}>x100</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table >
    );
}

export default OptionList;
