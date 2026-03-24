import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface items-center justify-center">
      <MaterialIcons name="person" size={64} color="#f5a623" />
      <Text className="text-2xl font-bold text-white mt-4">Your Profile</Text>
      <Text className="text-on-surface-variant text-center mt-2 px-8">Manage your civic identity and settings.</Text>
    </SafeAreaView>
  );
}
