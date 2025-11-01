import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moodColors } from "../constants/colors";

// mood buttons 
// text colour adjusted for aesthetics
const moods = [
  { mood: "happy", color: moodColors.happy, textColor: "#C9B030" },      // darker yellow
  { mood: "sad", color: moodColors.sad, textColor: "#4B50A7" },         // darker indigo
  { mood: "angry", color: moodColors.angry, textColor: "#B22222" },    // darker red
  { mood: "calm", color: moodColors.calm, textColor: "#3CA88E" },      // darker mint
  { mood: "anxious", color: moodColors.anxious, textColor: "#B86B00" },// darker orange
  { mood: "tired", color: moodColors.tired, textColor: "#808080" },    // darker gray
  { mood: "excited", color: moodColors.excited, textColor: "#B97CB0" },// darker pink
];

// daily moods entry reads
type MoodEntry = { date: string; mood: string; color: string };

export default function Log() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  useEffect(() => {
    loadMoods();
  }, []);

  const saveMood = async (mood: string, color: string) => {
    const today = new Date().toISOString().split("T")[0];
    const newEntry = { date: today, mood, color };
    const newEntries = [...entries, newEntry];
    setEntries(newEntries);
    await AsyncStorage.setItem("moods", JSON.stringify(newEntries));
  };

  const loadMoods = async () => {
    const saved = await AsyncStorage.getItem("moods");
    if (saved) setEntries(JSON.parse(saved));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How do you feel today?</Text>

      {moods.map((m, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => saveMood(m.mood, m.color)}
          style={[styles.moodButton, { backgroundColor: m.color }]}
        >
          <Text style={[styles.moodText, { color: m.textColor }]}>{m.mood}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.historyTitle}>Recent Moods:</Text>
      <FlatList
        data={entries.slice(-7)}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text style={[styles.entry, { color: item.color }]}> 
            {item.date}: {item.mood}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 20, textAlign: "center" },
  moodButton: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
  },
  moodText: { textAlign: "center", fontWeight: "bold" },
  historyTitle: { fontSize: 20, marginTop: 20 },
  entry: { fontSize: 16, marginTop: 5 },
  
});
