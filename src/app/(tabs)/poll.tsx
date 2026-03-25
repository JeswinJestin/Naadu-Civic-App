import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function PollScreen() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (rating === 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRating(0);
      setFeedback('');
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      <View className="flex-row items-center px-6 py-4 bg-surface/90 border-b border-surface-container">
        <Text className="text-xl font-bold text-primary tracking-tight">Constituency Poll</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Rating Card */}
        <View className="bg-surface-container-low p-6 rounded-xl border border-surface-container-highest mb-6 shadow-xl">
          <View className="flex-row items-center gap-3 mb-2">
            <MaterialIcons name="how-to-vote" size={24} color="#f5a623" />
            <Text className="text-xl font-bold text-white">Monthly Satisfaction</Text>
          </View>
          <Text className="text-on-surface-variant text-sm mb-6 leading-relaxed">
            How satisfied are you with your MLA's governance this month? Your rating directly affects their public approval score.
          </Text>

          <View className="flex-row justify-between px-2 mb-8">
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity key={star} onPress={() => setRating(star)} className="active:scale-90 transition-transform">
                <Ionicons 
                  name={star <= rating ? "star" : "star-outline"} 
                  size={42} 
                  color={star <= rating ? "#f5a623" : "#31353c"} 
                />
              </TouchableOpacity>
            ))}
          </View>

          <View className="bg-surface-container p-4 rounded-lg mb-6 border border-surface-variant">
            <TextInput 
              placeholder="What specifically needs improvement? (Optional)"
              placeholderTextColor="#adb9d1"
              multiline
              numberOfLines={3}
              className="text-white text-base text-left align-top min-h-[80px]"
              value={feedback}
              onChangeText={setFeedback}
            />
          </View>

          <TouchableOpacity 
            onPress={handleSubmit} 
            disabled={loading || rating === 0}
            className={`w-full py-4 rounded-lg items-center justify-center flex-row ${
              rating === 0 ? 'bg-surface-container-highest' : 'bg-primary-container shadow-lg shadow-primary-container/20'
            }`}
          >
            <Text className={`font-bold text-lg ${rating === 0 ? 'text-on-surface-variant' : 'text-on-primary'}`}>
              {loading ? "Submitting..." : "Submit Secure Poll"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Info Card */}
        <View className="bg-surface-container p-6 rounded-xl border border-surface-variant flex-row items-start gap-4">
          <MaterialIcons name="security" size={28} color="#bbc7df" />
          <View className="flex-1">
            <Text className="text-white font-bold mb-1">Zero-Knowledge Proof</Text>
            <Text className="text-on-surface-variant text-xs leading-snug">
              Your vote is cryptographically hashed. We only store that a verified voter from this constituency cast a vote, ensuring absolute anonymity.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
