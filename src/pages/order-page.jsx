import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainLayout from '../components/main-layout/main-layout';
import { useEffect } from 'react';
import OrderInfo from '../components/order-info/order-info';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../utils/api';

function OrderPage({page}) {
    const dispatch = useDispatch();
    let { id } = useParams();
    const order = useSelector(state => state.order.order)[0];

    useEffect(() => {
        dispatch(getOrder(id));
    }, [])

    if (!order) return null;
    
    return ( page ?
        
        <MainLayout>
                <OrderInfo order={order}/>
        </MainLayout> :
        <OrderInfo order={order} />
    )
}

OrderPage.propTypes = {
    page: PropTypes.bool,
}

export default OrderPage;