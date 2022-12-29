import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Box, NativeBaseProvider, Text } from 'native-base';
import { theme } from './src/styles/theme';
const App = () => {
  return (
    <SafeAreaProvider>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="always"
        alwaysBounceVertical={false}>
        <NativeBaseProvider theme={theme}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Box flex={1} justifyContent="center" alignItems="center">
            <Text>React Native Boilerplate with Native Base</Text>
          </Box>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default App;
