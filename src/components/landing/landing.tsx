import React, { useState } from 'react';
import { Box, Button, Heading, Text, VStack } from 'native-base';
import { Animated, Linking, TouchableOpacity } from 'react-native';

function Landing() {
  const [showText, setShowText] = useState(false);
  const textSize = new Animated.Value(16);

  const animateText = () => {
    textSize.setValue(16);
    Animated.timing(textSize, {
      useNativeDriver: false,
      toValue: 32,
      duration: 500,
    }).start();
    setShowText(true);
  };

  return (
    <Box flex={1} pt="48px" pb="30px" px="16px" bg="secondary.50">
      <VStack flex={1} justifyContent="space-between">
        <VStack space="16px">
          <Heading color="primary.500" textAlign="center">
            React Native Boilerplate with Native Base
          </Heading>
          <Text fontSize="16px" color="black60">
            Please check out the link below for more detail:
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://reactnative.dev')}>
            <Text fontSize="16px" bold color="secondary.500">
              React Native
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://nativebase.io/')}>
            <Text fontSize="16px" bold color="secondary.500">
              Native Base
            </Text>
          </TouchableOpacity>
          <Animated.Text
            style={[
              { fontSize: textSize, textAlign: 'center' },
              !showText ? { display: 'none' } : {},
            ]}>
            Hooray!
          </Animated.Text>
        </VStack>
        <Button onPress={animateText}>Long Press to Celebrated</Button>
      </VStack>
    </Box>
  );
}

export default Landing;
