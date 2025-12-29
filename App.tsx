import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Text, TextInput, Button} from 'react-native';


function App() {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <TextInput style={styles.input} placeholder="Type here..." />
      <Button title="Press me" onPress={() => {}} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: '#66ffa6ff',
  },
  text:{
    fontSize: 24,
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '40%',
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button:{
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
  }
});

export default App;
