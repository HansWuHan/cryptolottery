import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux'

import { Option } from '../../schema/Option'
import { addItemToCart } from '../../state/Cart'
import { getOptionName } from '../../util'

import './OptionList.css';

const heading = ['Options', 'Odds', 'Refill Purchase'];


function OptionList(props) {
    const dispatch = useDispatch()
    const typeName = props.type !== undefined ? props.type : 'positive';
    const optionList = useSelector((state) => state.OptionList.values)
        .find((item) => item.type.description === typeName);
    if (optionList === undefined) {
        return (<div></div>);
    }

    const type = optionList.type;
    const addItems = (price, odd, count) => dispatch(addItemToCart(
        { option: new Option(props.product, props.date, type, price), odd: odd, count: count }));

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
                {Array.from(optionList.value).map((value, index) => (
                    <tr key={index}>
                        <td className='option-name'>{getOptionName(optionList.type, value.price)}</td>
                        <td className='odd' md="auto">{value.odd.toFixed(2)}</td>
                        <td className='bet-button-set' md="auto">
                            <Button className="bet-button"
                                onClick={() => addItems(value.price, value.odd, 1)}>x1</Button>
                            <Button className="bet-button" onClick={() => addItems(value.price, value.odd, 10)}>x10</Button>
                            <Button className="bet-button" onClick={() => addItems(value.price, value.odd, 50)}>x50</Button>
                            <Button className="bet-button" onClick={() => addItems(value.price, value.odd, 100)}>x100</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table >
    );
}

export default OptionList;
