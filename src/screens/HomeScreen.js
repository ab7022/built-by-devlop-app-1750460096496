import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [habits, setHabits] = useState([
    { id: '1', name: 'Drink Water', streak: 3 },
    { id: '2', name: 'Exercise', streak: 5 },
    { id: '3', name: 'Read', streak: 2 }
  ]);

  const incrementStreak = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, streak: habit.streak + 1 } : habit
    ));
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-4`}>
      <View style={tw`flex-row justify-between items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-900`}>My Habits</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddHabit')}
          style={tw`bg-blue-500 p-2 rounded-full`}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`bg-white p-4 mb-3 rounded-lg shadow`}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-lg font-medium`}>{item.name}</Text>
              <Text style={tw`text-blue-500 font-bold`}>{item.streak} days</Text>
            </View>
            <TouchableOpacity
              onPress={() => incrementStreak(item.id)}
              style={tw`mt-2 bg-blue-100 py-2 rounded-lg items-center`}
            >
              <Text style={tw`text-blue-600 font-medium`}>Mark Complete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}