import React from 'react';
import { StyleSheet, View, Text, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <Text>Hello, World!</Text>
//       {/* <WebView source={{ uri: 'http://dc1.progenerp.com:8008/erpsm/app_erpsmLogin/' }} style={{ flex: 1 }} /> */}
//     </View>
//   );
// }

const mywebview = () => {
  if (Platform.OS === 'web'){
    return <Text>Not supported on web</Text>
  // }else {    return <Text>  \t  Is supported on web</Text>
}
  return (
    <WebView
      source={{ uri: 'http://dc1.progenerp.com:8008/erpsm/app_erpsmLogin/' }} style={{marginTop:20}}

      />
  );
};

export default mywebview;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
