import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function AddEvidenceScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [comment, setComment] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 h-16 bg-surface-dim border-b border-surface-container">
        <TouchableOpacity onPress={() => router.back()} className="mr-4 p-2 -ml-2">
          <MaterialIcons name="close" size={24} color="#dfe2eb" />
        </TouchableOpacity>
        <Text className="font-bold text-on-surface text-xl">Add Evidence</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6" showsVerticalScrollIndicator={false}>
        <Text className="text-on-surface-variant mb-6">
          Adding a photo or description helps the Civic Audit team verify Issue #{id} faster.
        </Text>

        {/* Photo Upload Area */}
        <TouchableOpacity className="w-full h-48 bg-surface-container-low border-2 border-dashed border-outline-variant/50 rounded-xl items-center justify-center mb-8 active:bg-surface-container/50">
          <MaterialIcons name="add-a-photo" size={48} color="#f5a623" className="mb-4" />
          <Text className="font-bold text-on-surface">Tap to Capture Photo</Text>
          <Text className="text-xs text-on-surface-variant mt-1">or select from gallery</Text>
        </TouchableOpacity>

        {/* Comment Input */}
        <Text className="font-bold text-on-surface mb-2">Additional Comments</Text>
        <View className="bg-surface-container-low rounded-xl border border-surface-container-highest mb-8">
          <TextInput
            multiline
            numberOfLines={4}
            className="p-4 text-white text-base text-left align-top min-h-[120px]"
            placeholder="Describe what you observed..."
            placeholderTextColor="#adb9d1"
            value={comment}
            onChangeText={setComment}
          />
        </View>

        {/* Location Verification Tag */}
        <View className="flex-row items-center bg-primary/10 p-4 rounded-lg mb-8">
          <MaterialIcons name="my-location" size={24} color="#f5a623" className="mr-3" />
          <View className="flex-1">
             <Text className="font-bold text-primary text-sm">Location Verified</Text>
             <Text className="text-xs text-primary/80">You are within 500m of the issue</Text>
          </View>
        </View>

        {/* Submit */}
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-full h-14 bg-primary-container rounded-lg items-center justify-center flex-row shadow-lg shadow-primary-container/20 mb-12 active:opacity-80"
        >
          <Text className="text-on-primary font-bold text-lg">Submit Validation</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
