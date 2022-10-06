import { useContext } from 'react';
import {
  Text,
  Box,
  FlatList,
  HStack,
  Stack,
  Heading,
  Image,
  Button,
} from 'native-base';

import { storeContext } from '../store';
import { ProductCart } from '@types';

const DEFAULT_IMAGE = require('../assets/default-image.png');

const CheckoutScreen = () => {
  const { dispatcher, cart } = useContext(storeContext);

  const renderProduct = ({ item }: { item: ProductCart }) => {
    return (
      <>
        <Box p="4">
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
                <Button
                  size="xs"
                  bgColor={'yellow.500'}
                  onTouchEnd={() => dispatcher.reduceQty(item)}
                  mr="3"
                >
                  <Text fontWeight="600" fontSize={'xl'}>
                    --
                  </Text>
                </Button>
                <Text mx="2" fontWeight="600">
                  {item.qty}
                </Text>
                <Button
                  size="xs"
                  bgColor={'yellow.500'}
                  onTouchEnd={() => dispatcher.addQty(item)}
                  ml="3"
                >
                  <Text fontWeight="600" fontSize={'xl'}>
                    +
                  </Text>
                </Button>
              </HStack>
              <Box>
                <Text>Subtotal: Rp {item.totalPrice}</Text>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box>
        <FlatList data={cart} renderItem={renderProduct} />
      </Box>
    </>
  );
};

export default CheckoutScreen;
