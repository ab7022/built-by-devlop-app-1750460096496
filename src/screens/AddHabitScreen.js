import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

export default function AddHabitScreen({ navigation }) {
  const [habitName, setHabitName] = useState('');

  const handleAddHabit = () => {
    if (habitName.trim()) {
      navigation.navigate('Home', { newHabit: habitName });
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-50 p-4`}>
      <View style={tw`flex-row items-center mb-6`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold ml-4`}>New Habit</Text>
      </View>

      <View style={tw`bg-white p-4 rounded-lg shadow mb-4`}>
        <Text style={tw`text-gray-700 mb-2`}>Habit Name</Text>
        <TextInput
          placeholder="e.g. Meditate"
          value={habitName}
          onChangeText={setHabitName}
          style={tw`border border-gray-200 rounded-lg p-3`}
        />
      </View>

      <TouchableOpacity
        onPress={handleAddHabit}
        style={tw`bg-blue-500 p-3 rounded-lg items-center`}
      >
        <Text style={tw`text-white font-bold`}>Add Habit</Text>
      </TouchableOpacity>
    </View>
  );
}