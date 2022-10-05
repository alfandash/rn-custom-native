import { Text, Box, Center } from 'native-base';

function CartScreen() {
  return (
    <Center flex={1}>
      <Box
        p="4"
        bg={'black'}
        maxW="300"
        w="100%"
        mt={10}
        safeArea
        color={'white'}
      >
        <Text fontSize="sm" display="flex" color={'white'}>
          cart!
        </Text>
      </Box>
    </Center>
  );
}

export default CartScreen;
