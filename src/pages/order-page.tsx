import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '../hooks/hooks';
import MainLayout from '../components/main-layout/main-layout';
import OrderInfo from '../components/order-info/order-info';
import { getOrder } from '../utils/api';

type TOrderPage = {
    page: boolean;
}

function OrderPage({page}: TOrderPage) {
    const dispatch = useDispatch();
    let { id } = useParams<string>();
    const order = useSelector(state => state.order.order)[0];

    useEffect(() => {
        if (id != null) {
            dispatch(getOrder(id));
          } else {
          console.log('Ошибка order.id')
          }
    }, [])

    if (!order) return null;
    
    return ( page ?
        
        <MainLayout>
                <OrderInfo order={order}/>
        </MainLayout> :
        <OrderInfo order={order} />
    )
}

export default OrderPage;