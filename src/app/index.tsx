import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-between px-8 py-16 bg-surface-dim overflow-hidden relative">
      <StatusBar style="light" />

      {/* Decorative Blur Backgrounds (Simplified for RN) */}
      <View className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-primary-container/20 rounded-full" />
      <View className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[30%] bg-primary/20 rounded-full" />

      {/* Top Section: App Logo & Branding */}
      <View className="flex-1 flex-col items-center justify-center space-y-8 z-10 pt-12 mt-10">
        <View className="w-32 h-32 items-center justify-center relative">
          <View className="absolute inset-0 bg-primary/30 rounded-full" />
          <View className="items-center justify-center text-primary-container">
            <MaterialIcons name="location-on" size={72} color="#f5a623" />
            {/* Kerala Lotus abstract overlay */}
            <View className="absolute bottom-2 flex-row space-x-1 items-end">
              <View className="w-1.5 h-6 bg-[#f5a623] rounded-full rotate-[-45deg]" />
              <View className="w-1.5 h-8 bg-[#ffc880] rounded-full" />
              <View className="w-1.5 h-6 bg-[#f5a623] rounded-full rotate-[45deg]" />
            </View>
          </View>
        </View>

        <View className="items-center space-y-3 mt-8">
          <Text className="text-5xl font-extrabold tracking-tighter text-on-surface">Naadu</Text>
          <Text className="text-secondary text-lg font-normal tracking-tight text-center max-w-[240px] opacity-80 mt-2">
            Your Constituency. Your Voice.
          </Text>
        </View>
      </View>

      {/* Bottom Section: CTAs & Context */}
      <View className="w-full max-w-sm space-y-6 z-10 mb-8">
        <View className="flex-col gap-4">
          <TouchableOpacity 
            onPress={() => router.push('/(tabs)/explore' as never)} 
            className="w-full h-16 bg-primary-container rounded-lg items-center justify-center active:bg-primary-fixed mb-4 shadow-lg shadow-primary/20"
          >
            <Text className="text-on-primary font-bold text-lg tracking-tight">Explore Issues</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(auth)/login')} 
            className="w-full h-16 bg-surface-container-high rounded-lg items-center justify-center active:bg-surface-container-highest"
          >
            <Text className="text-primary font-semibold text-lg tracking-tight">Login / Register</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center pt-8">
          <View className="flex-row items-center space-x-2 px-4 py-2 bg-surface-container-low rounded-full">
            <View className="w-1.5 h-1.5 rounded-full bg-primary-container mr-2" />
            <Text className="font-jetbrains text-[11px] uppercase tracking-widest text-on-surface-variant">
              Currently available in Kerala
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
