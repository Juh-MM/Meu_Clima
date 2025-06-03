import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Input from './components/Input';
import MainCard from './components/MainCard';
import MiniCard from './components/MiniCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Input/>
      <ScrollView style={styles.scroll}>
        <View style={styles.meulocal}>
          <Text style={styles.label}>Meu local</Text>
          <MainCard />
        </View>
        <View style={styles.salvos}>
          <Text style={styles.label}>Salvos</Text>
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
          <MiniCard/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002736',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  meulocal: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    color: '#D9CCC1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  salvos: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    paddingTop: 20,
  },
  scroll: {
    width: '100%',
    paddingTop: 120,
    marginBottom: 50,
  },
});
