import { Dimensions, StyleSheet, Text, View } from 'react-native';

// about screen component 
// displays information about the app 
export default function AboutScreen() {
  const screenWidth = Dimensions.get('window').width;
  const circleSize = Math.min(screenWidth * 0.8, 350); // max 350px, 80% of screen width
  return (
    <View style={styles.container}>
      <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize / 2 }] }>
        <Text style={[styles.text, { textAlign: 'center', maxWidth: circleSize * 0.7 }]}> 
          {/* about text here */}
          <Text style={{ fontWeight: 'bold' }}>Visualise my Mood!</Text>{"\n\n"}
          This app helps you track and visualize your mood over time. Log your daily moods and see patterns emerge through colorful charts and graphs. Take control of your emotional well-being, and visualise your daily mood.{"\n\n"}
          Head to the <Text style={{ fontWeight: 'bold' }}>log mood</Text> page to start logging your moods today!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 2,
    borderColor: '#ff66c4',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    color: '#ffbd59',
    fontSize: 13,
  },
});

