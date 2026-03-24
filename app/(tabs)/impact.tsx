import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ImpactScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface items-center justify-center">
      <MaterialIcons name="military-tech" size={64} color="#f5a623" />
      <Text className="text-2xl font-bold text-white mt-4">Community Impact</Text>
      <Text className="text-on-surface-variant text-center mt-2 px-8">Track the milestones and achievements of your constituency here.</Text>
    </SafeAreaView>
  );
}
