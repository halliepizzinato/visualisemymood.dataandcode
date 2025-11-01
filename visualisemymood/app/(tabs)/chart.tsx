// app/tabs/chart.tsx

import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PieChart } from "react-native-chart-kit";
import { moodColors } from "../constants/colors";

type MoodEntry = {
  date: string;
  mood: string;
  color: string;
};

export default function ChartScreen() {
  const [data, setData] = useState<MoodEntry[]>([]);

  useEffect(() => {
    loadMoods();
  }, []);

  const loadMoods = async () => {
    const storedData = await AsyncStorage.getItem("moods");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  };

  // Count moods
  const moodCounts = data.reduce((acc: Record<string, number>, item) => {
    acc[item.mood] = (acc[item.mood] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(moodCounts).map((mood) => ({
    name: mood,
    population: moodCounts[mood],
    color: moodColors[mood.toLowerCase() as keyof typeof moodColors] || "#ccc",
    legendFontColor: "#333",
    legendFontSize: 14,
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mood Overview</Text>
      
{/*final chart display*/}
      {chartData.length > 0 ? (
        <PieChart
          data={chartData}
          width={Dimensions.get("window").width - 40}
          height={240}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          absolute
        />
      ) : (
        <Text style={styles.emptyText}>No mood data yet</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
});
