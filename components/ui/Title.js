import { Text, StyleSheet,Platform } from 'react-native';


function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ios: 0, android: 1.5}),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  },
});