import { Box, Center, Progress } from 'native-base';
import { useRef, useState, useEffect } from 'react';

function ProgressScreen() {
  const countInterval = useRef<number | undefined>(undefined);
  const [count, setCount] = useState(0);
  const [hold, setHold] = useState<boolean>(false);

  useEffect(() => {
    if (!hold) {
      countInterval.current = setInterval(
        () => setCount((latest) => latest + 1),
        100,
      );
    }

    return () => {
      clearInterval(countInterval.current);
    };
  }, [hold]);

  useEffect(() => {
    if (count >= 100) {
      setCount(0);
    }
  }, [count]);
  return (
    <Center
      flex={1}
      w="100%"
      onTouchStart={() => setHold(true)}
      onTouchEnd={() => setHold(false)}
    >
      <Box w="90%" maxW="400">
        <Progress value={count} mx="4" />
        <Box w="100%" alignItems={'center'}>
          {`${count} %`}
        </Box>
      </Box>
    </Center>
  );
}

export default ProgressScreen;
