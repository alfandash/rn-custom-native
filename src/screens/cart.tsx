import { useEffect, useState, useContext, FC } from 'react';
import { Box, FlatList, Button } from 'native-base';
import { Icon } from 'react-native-eva-icons';
import { storeContext } from '@Store';
import { getProductList } from '@Services';
import { Product, CartStackParamList } from '@types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductCart from '@Components/productCart';

type Props = NativeStackScreenProps<CartStackParamList, 'Cart'>;

const CartScreen: FC<Props> = ({ navigation }) => {
  const { dispatcher, cart } = useContext(storeContext);
  const [products, setProducts] = useState<Array<Product> | any[]>([]);

  useEffect(() => {
    // simulate product from api
    setProducts(getProductList());
  }, []);

  const handleAddItem = (item: Product) => {
    dispatcher.addItem(item);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCart item={item} onTouchAdd={handleAddItem} />
  );

  return (
    <>
      <Box>
        <FlatList data={products} renderItem={renderProduct} />
      </Box>
      {cart.length > 0 && (
        <Button
          width="10"
          bottom={'55px'}
          left={'280px'}
          position={'relative'}
          bgColor={'yellow.500'}
          onTouchEnd={() => navigation.navigate('Checkout')}
        >
          <Icon
            fill={'black'}
            name="shopping-cart-outline"
            width={22}
            height={22}
          />
        </Button>
      )}
    </>
  );
};

export default CartScreen;
