import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import MainCard from './components/MainCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Input/>
      <View style={styles.meulocal}>
        <Text style={styles.meulocal_text}>Meu local</Text>
        <MainCard />
      </View>
      <View></View>
      <MainCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002736',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  meulocal: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  meulocal_text: {
    color: '#D9CCC1',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
