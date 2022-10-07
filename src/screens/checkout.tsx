import { useContext } from 'react';
import { Box, FlatList } from 'native-base';

import { storeContext } from '../store';
import { ProductCart } from '@types';
import ProductCheckout from '../components/productCheckout';

const CheckoutScreen = () => {
  const { dispatcher, cart } = useContext(storeContext);

  const handleReduce = (item: ProductCart) => dispatcher.reduceQty(item);
  const handleAdd = (item: ProductCart) => dispatcher.addQty(item);

  const renderProduct = ({ item }: { item: ProductCart }) => (
    <ProductCheckout
      item={item}
      onTouchAdd={handleAdd}
      onTouchReduce={handleReduce}
    />
  );

  return (
    <>
      <Box>
        <FlatList data={cart} renderItem={renderProduct} />
      </Box>
    </>
  );
};

export default CheckoutScreen;
