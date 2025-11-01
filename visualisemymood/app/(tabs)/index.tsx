import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
// ...existing code...

//background colour and design: dots
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  dot: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    opacity: 0.7,
  },
  text: {
    color: '#38b6ff',
    fontSize: 30,
    zIndex: 1,
  },
  button: {
    fontSize: 10,
    textDecorationLine: 'underline',
    color: '#7ed957',
    zIndex: 1,
  },
});
  return (
    <View style={styles.container}>
      {/* Multi-coloured dots background */}
      <View style={styles.dotsContainer} pointerEvents="none">
        <View style={[styles.dot, { backgroundColor: '#ffbd59', top: '10%', left: '10%' }]} />
        <View style={[styles.dot, { backgroundColor: '#38b6ff', top: '10%', left: '70%' }]} />
        <View style={[styles.dot, { backgroundColor: '#7ed957', top: '30%', left: '30%' }]} />
        <View style={[styles.dot, { backgroundColor: '#ff6f61', top: '37%', left: '80%' }]} />
        <View style={[styles.dot, { backgroundColor: '#a259ff', top: '50%', left: '15%' }]} />
        <View style={[styles.dot, { backgroundColor: '#ffbd59', top: '50%', left: '60%' }]} />
        <View style={[styles.dot, { backgroundColor: '#f1aee9ff', top: '70%', left: '40%' }]} />
        <View style={[styles.dot, { backgroundColor: '#7FE7CC', top: '70%', left: '80%' }]} />
        <View style={[styles.dot, { backgroundColor: '#C0C0C0', top: '85%', left: '20%' }]} />
        <View style={[styles.dot, { backgroundColor: '#ffbd59', top: '85%', left: '70%' }]} />
        <View style={[styles.dot, { backgroundColor: '#f1aee9ff', top: '30%', left: '70%' }]} />
        <View style={[styles.dot, { backgroundColor: '#7FE7CC', top:  '20%', left: '45%' }]} />
        <View style={[styles.dot, { backgroundColor: '#a259ff', top: '17%', left: '87%' }]} />
        <View style={[styles.dot, { backgroundColor: '#38b6ff', top: '55%', left: '30%' }]} />
        <View style={[styles.dot, { backgroundColor: '#7ed957', top: '86%', left: '50%' }]} />
        <View style={[styles.dot, { backgroundColor: '#f1aee9ff', top: '35%', left: '7%' }]} />
        <View style={[styles.dot, { backgroundColor: '#ff6f61', top: '76%', left: '8%' }]} />
        <View style={[styles.dot, { backgroundColor: '#C0C0C0', top: '55%', left: '90%' }]} />
      </View>
      {/* Main content */}
      <Text style={styles.text}>VisualiseMyMood</Text>
      <Link href="/about" style={styles.button}>
        Go to About page
      </Link>
    </View>
  );
}