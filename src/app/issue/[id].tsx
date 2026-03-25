import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IssueDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 h-16 bg-surface-dim border-b border-surface-container">
        <TouchableOpacity onPress={() => router.back()} className="mr-4 p-2 -ml-2">
          <MaterialIcons name="arrow-back" size={24} color="#f5a623" />
        </TouchableOpacity>
        <Text className="font-bold text-primary text-xl">Issue #{id}</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Mock Image */}
        <View className="w-full h-64 bg-surface-container-low relative">
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80' }}
            className="w-full h-full"
          />
          <View className="absolute bottom-4 left-4 bg-error px-3 py-1 rounded-full">
            <Text className="text-on-error font-bold text-xs uppercase tracking-widest">Active Issue</Text>
          </View>
        </View>

        <View className="p-6">
          <Text className="text-2xl font-bold text-white mb-2">Pothole near Secretariat</Text>
          <View className="flex-row items-center gap-4 mb-6">
            <View className="flex-row items-center gap-1">
              <MaterialIcons name="location-on" size={16} color="#adb9d1" />
              <Text className="text-on-surface-variant font-medium">Thiruvananthapuram</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <MaterialIcons name="access-time" size={16} color="#adb9d1" />
              <Text className="text-on-surface-variant font-medium">Reported 2h ago</Text>
            </View>
          </View>

          <Text className="text-on-surface leading-loose text-base mb-8">
            Large pothole detected near the main entrance of the Secretariat. It forces vehicles to continuously swerve into the opposite lane, creating a major hazard during rush hour traffic.
          </Text>

          {/* Action Area */}
          <View className="bg-surface-container-low rounded-xl p-5 mb-8 border border-surface-container-highest">
            <Text className="font-bold text-white mb-4">Validate this Issue</Text>
            <Text className="text-on-surface-variant text-sm mb-4">Are you near this location? Adding photo evidence helps fast-track validation.</Text>
            <TouchableOpacity 
              onPress={() => router.push(`/issue/${id}/evidence` as never)}
              className="w-full py-4 bg-primary-container rounded-lg items-center justify-center flex-row shadow-lg shadow-primary-container/20 active:opacity-80"
            >
              <MaterialIcons name="add-a-photo" size={20} color="#452b00" className="mr-2" />
              <Text className="text-on-primary font-bold text-lg">Add Evidence</Text>
            </TouchableOpacity>
          </View>

          {/* Comments Section */}
          <Text className="font-bold text-lg text-primary mb-4">Community Discussion</Text>
          <View className="gap-4">
            <View className="bg-surface-container p-4 rounded-xl">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="font-bold text-on-surface">Rahul V.</Text>
                <Text className="text-xs text-on-surface-variant">45m ago</Text>
              </View>
              <Text className="text-on-surface-variant leading-snug">It's getting worse since the rain. 3 bikes skid yesterday alone.</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
