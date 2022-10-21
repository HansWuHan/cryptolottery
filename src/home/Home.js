import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux'

import LoadingOverlay from './loading_overlay/LoadingOverlay';
import TopMenu from '../top_menu/TopMenu';
import LeftColumn from '../left_column/LeftColumn';
import BetPanel from '../bet_panel/BetPanel';
import Checkout from '../checkout/Checkout';
import { datesEqual } from '../util';

import { Product } from '../schema/Option';
import { fetchOptionInfoList } from '../api_fetcher/OptionInfoListFetcher';
import { setOptionInfoList, setLoading } from '../state/OptionInfoList';
import { setOptionDates, setActiveOptionDate } from '../state/OptionDate';

import './Home.css';

function Home() {
  const dispatch = useDispatch();


  // Data initialization
  // * fetch data from backend
  // * update optionInfoList
  // * update optionDates
  // * make activeOptionDate as the first date of optioonDates 
  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      const optionInfoList = await fetchOptionInfoList(Product.Bitcoin, 2);
      dispatch(setOptionInfoList(optionInfoList));
      const bitcoinOptionDates = optionInfoList.map(item => item.option.date)
        .filter((item, index, self) => self.findIndex(i => datesEqual(i, item)) === index /* only unique*/);
      bitcoinOptionDates.sort((a, b) => a - b);
      dispatch(setActiveOptionDate({ product: Product.Bitcoin, date: bitcoinOptionDates[0] }));
      dispatch(setOptionDates([{ product: Product.Bitcoin, dates: bitcoinOptionDates }]));
      dispatch(setLoading(false));
    }
    fetchData();
  }, [dispatch]);

  const loading = useSelector((state) => state.OptionInfoList.loading);
  if (loading) {
    return (<div className="App"><LoadingOverlay /></div>);
  } else {
    return (
      <div className="App">
        <Row className='h-100'>
          <Col className='left-column'>
            <LeftColumn />
          </Col>
          <Col className='col-9 mt-4'>
            <Row className='top-menu' >
              <TopMenu />
            </Row>
            <Row className='bet-panel'>
              <Col>
                <BetPanel />
              </Col>
              <Col className='checkout' md="auto">
                <Checkout />
              </Col>
            </Row>
          </Col>
        </Row>
      </div >
    );
  }
}

export default Home;
