import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReportLocationScreen() {
  const router = useRouter();

  const handleConfirm = () => {
    router.push('/(report)/category' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface-dim relative" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 h-16 bg-surface-dim/60 border-b border-outline-variant/10 z-50">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <MaterialIcons name="close" size={24} color="#adb9d1" />
        </TouchableOpacity>
        <Text className="font-bold text-primary text-lg">Sovereign Civic</Text>
        <TouchableOpacity className="p-2 -mr-2">
            <MaterialIcons name="help-outline" size={24} color="#adb9d1" />
        </TouchableOpacity>
      </View>

      {/* Map Mock Background */}
      <View className="flex-1 overflow-hidden">
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbKNMDbSldYz0H3WNwE7aMjhNXqFYNmgjplIF0-Yk8ctqzu2CymozqgX5O6us-r9f88_OawsWUpXtrO0Q-lVymPAen2eeUighd5hWK-hPtA4s_ozkun0ogjh5JcY7K5gr1ugHMToJ8CyfwmiLXLgvPQ76vtczmFyP9AeQPbrmRpt66g_dXp4fNkSDTMu7aMWeBy6BSIqWUc_yEgMOowSXzCqu0mkrMWvmiv09gmqgc7gIeqZpO07-F3XHecinRdOgBk_f-fSw1U54' }} 
          className="w-full h-full opacity-50"
        />
        
        {/* Crosshair */}
        <View className="absolute inset-0 items-center justify-center pointer-events-none">
            <View className="w-24 h-24 border border-primary-container/30 rounded-full items-center justify-center">
                <MaterialIcons name="location-searching" size={32} color="#f5a623" />
            </View>
        </View>
      </View>

      {/* Search Bar */}
      <View className="absolute top-24 w-full px-4 z-40">
        <View className="flex-row items-center bg-surface-container-high/90 rounded-xl px-4 py-2 border border-outline-variant/20 shadow-xl">
            <MaterialIcons name="search" size={24} color="#adb9d1" />
            <TextInput 
                placeholder="Search location..." 
                placeholderTextColor="#524534" 
                className="flex-1 text-white ml-2 text-base h-12"
            />
            <MaterialIcons name="my-location" size={24} color="#f5a623" />
        </View>
      </View>

      {/* Bottom Sheet */}
      <View className="absolute bottom-0 w-full bg-surface-container-low rounded-t-[2rem] pt-6 pb-8 px-6 shadow-2xl border-t border-outline-variant/20">
        <View className="w-12 h-1 bg-outline-variant/40 rounded-full self-center mb-6" />
        
        <View className="flex-row justify-between items-end mb-6">
            <View>
                <Text className="text-xl font-bold text-white leading-tight">Nearby Issues Found</Text>
                <Text className="text-on-surface-variant text-sm mt-1">2 reports in this immediate area</Text>
            </View>
            <View className="bg-primary-container/10 px-2 py-1 rounded">
                <Text className="text-[10px] font-mono text-primary-container uppercase">Radius: 50m</Text>
            </View>
        </View>

        <View className="flex-row gap-4 mb-4">
            <TouchableOpacity 
                className="flex-1 py-4 bg-primary-container rounded-xl flex-row items-center justify-center shadow-lg shadow-primary-container/20"
                onPress={handleConfirm}
            >
                <Text className="text-[#452b00] font-bold mr-2 text-lg">Confirm Location</Text>
                <MaterialIcons name="arrow-forward" size={18} color="#452b00" />
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
