import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import './TopMenu.css';

function TopMenu() {
    return (
        <Row>
            <Col className='flex-grow-1'>
                <Tabs className='top-menu-tabs justify-content-end'>
                    <Tab className="menu-tab" eventKey="Program" title="Program"></Tab>
                    <Tab className="menu-tab" eventKey="News" title="News"></Tab>
                    <Tab className="menu-tab" eventKey="Results" title="Results"></Tab>

                </Tabs>
            </Col>
            <Col md="auto">
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt='' className='avatar' />
            </Col>

        </Row>
    );
}

export default TopMenu;