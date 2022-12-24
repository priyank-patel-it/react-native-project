import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = props =>{

    const orders = useSelector(state => state.orders.orders);

    return (
        <FlatList 
            data={orders}
            renderItem={itemData =>
                <OrderItem 
                amount={itemData.item.totalAmount}
                date={itemData.item.readableDate}
                items={itemData.item.items}
                />
            }
        />
    )

}

export default OrdersScreen;