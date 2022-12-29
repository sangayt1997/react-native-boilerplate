import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { theme } from './src/styles/theme';
import Landing from './src/components/landing/landing';
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
          <Landing />
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default App;
