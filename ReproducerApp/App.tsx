/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';

function App(): JSX.Element {
  const [source, setSource] = useState();

  useEffect(() => {
    setTimeout(() => {
      setSource('https://reactnative.dev/img/homepage/phones.png');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        defaultSource={require('./test.png')}
        source={{
          uri: source,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {height: 200, width: 200},
});

export default App;
