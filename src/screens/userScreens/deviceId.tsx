import { NativeModules, Platform } from 'react-native';
const { CustomModule } = NativeModules;
import { Text, Box, Center } from 'native-base';
import { authContext } from '@Store';
import { useContext } from 'react';

function DeviceIdScreen() {
  const { userInfo } = useContext(authContext);
  console.log(userInfo);
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
          Device id{' '}
          {(Platform.OS === 'android' && CustomModule.getDeviceIdSync()) ||
            CustomModule.getName()}
        </Text>
      </Box>
    </Center>
  );
}

export default DeviceIdScreen;
