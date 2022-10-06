import { useEffect, useState, useContext, FC } from 'react';
import {
  Text,
  Box,
  FlatList,
  HStack,
  Stack,
  Heading,
  Button,
  Image,
} from 'native-base';
import { Icon } from 'react-native-eva-icons';
import { storeContext } from '../store';
import { getProductList } from '../services';
import { Product, CartStackParamList } from '@types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const DEFAULT_IMAGE = require('../assets/default-image.png');

type Props = NativeStackScreenProps<CartStackParamList, 'Cart'>;

const CartScreen: FC<Props> = ({ navigation }) => {
  const { dispatcher, cart } = useContext(storeContext);
  const [products, setProducts] = useState<Array<Product> | any[]>([]);

  useEffect(() => {
    // simulate product from api
    setProducts(getProductList());
  }, []);

  const renderProduct = ({ item }: { item: Product }) => {
    return (
      <>
        <Box p="4" key={item.id}>
          <Stack p="4" space={3} bgColor={'green.100'} rounded="md">
            <HStack justifyContent="space-between" space={5}>
              <Stack space={2} maxW={'70%'}>
                <Heading size="md" ml="-1">
                  {item.name}
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  Harga: Rp {item.price}
                </Text>
                <Box>
                  <Text fontWeight="400">{item.description}</Text>
                </Box>
              </Stack>
              <Stack>
                <Image
                  source={item.image_url ? item.image_url : DEFAULT_IMAGE}
                  alt="Alternate Text"
                  size="sm"
                />
              </Stack>
            </HStack>

            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Button onTouchEnd={() => dispatcher.addItem(item)}>
                  Beli
                </Button>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </>
    );
  };

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
