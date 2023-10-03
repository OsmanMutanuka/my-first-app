import { Button, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View><Button 
      title='click'/></View>
      <StatusBar style="auto" />
    </View>
  );
}
export default Home; 