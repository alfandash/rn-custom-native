import { Text, Box, HStack, Stack, Heading, Button, Image } from 'native-base';
import { ProductCart } from '@types';
import { Icon } from 'react-native-eva-icons';

const DEFAULT_IMAGE = require('@Assets/default-image.png');

const ProductCheckout = ({
  item,
  onTouchAdd,
  onTouchReduce,
}: {
  item: ProductCart;
  onTouchAdd: (item: ProductCart) => void;
  onTouchReduce: (item: ProductCart) => void;
}) => {
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

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Button
                size="xs"
                bgColor={'yellow.500'}
                onTouchEnd={() => onTouchReduce(item)}
                mr="3"
              >
                <Icon
                  fill={'black'}
                  name="minus-outline"
                  width={22}
                  height={22}
                />
              </Button>
              <Text mx="2" fontWeight="600">
                {item.qty}
              </Text>
              <Button
                size="xs"
                bgColor={'yellow.500'}
                onTouchEnd={() => onTouchAdd(item)}
                ml="3"
              >
                <Icon
                  fill={'black'}
                  name="plus-outline"
                  width={22}
                  height={22}
                />
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

export default ProductCheckout;
