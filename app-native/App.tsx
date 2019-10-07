import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from '@shared/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>The app says: {Hello.sayHello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
