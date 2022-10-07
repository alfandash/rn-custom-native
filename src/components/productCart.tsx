import { Text, Box, HStack, Stack, Heading, Button, Image } from 'native-base';
import { Product } from '@types';

const DEFAULT_IMAGE = require('../assets/default-image.png');

const ProductCart = ({
  item,
  onTouchAdd,
}: {
  item: Product;
  onTouchAdd: (item: Product) => void;
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
              <Button onTouchEnd={() => onTouchAdd(item)}>Beli</Button>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default ProductCart;
