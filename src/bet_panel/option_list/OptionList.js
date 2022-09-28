import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'

import { OptionType } from '../../enums'
import './OptionList.css';

const heading = ['Options', 'Odds', 'Refill Purchase'];
const getOptionName = (activeOptionType, price) => {
    switch (activeOptionType) {
        case OptionType.Positive:
            return 'Over $' + price;
        case OptionType.Negative:
            return 'Below $' + price;
        default:
    }
};

function OptionList(props) {
    const activeOptionType = props.activeOptionType !== undefined ? props.activeOptionType : OptionType.Positive;
    const optionLists = useSelector((state) => state.OptionList.values)
        .filter((item) => item.type.description === activeOptionType);
    if (optionLists.length === 0) {
        return (<div></div>);
    }
    const optionList = optionLists[0];
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
                        <td className='option-name col-7'>{getOptionName(optionList.type, value.price)}</td>
                        <td className='odd col-1'>{value.odd.toFixed(2)}</td>
                        <td className='bet-button-set col-4'>
                            <Button className="bet-button">x1</Button>
                            <Button className="bet-button">x10</Button>
                            <Button className="bet-button">x50</Button>
                            <Button className="bet-button">x100</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default OptionList;
