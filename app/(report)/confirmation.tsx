import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReportConfirmationScreen() {
  const router = useRouter();

  const handleFinish = () => {
    // Return to explore feed or map
    router.replace('/(tabs)/explore' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 h-16 bg-surface/60 border-b border-surface-container-highest">
        <TouchableOpacity onPress={handleFinish} className="p-2 -ml-2">
            <MaterialIcons name="close" size={24} color="#adb9d1" />
        </TouchableOpacity>
        <Text className="font-bold text-primary text-lg tracking-tighter">Sovereign Civic</Text>
        <TouchableOpacity className="p-2 -mr-2">
            <MaterialIcons name="help-outline" size={24} color="#adb9d1" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-6 justify-center items-center pb-20">
        <View className="w-full max-w-sm items-center">
            {/* Hero Icon */}
            <View className="relative mb-10 w-32 h-32 rounded-full bg-surface-container-low border-2 border-primary-container/30 items-center justify-center">
                <View className="absolute inset-0 bg-primary-container/10 rounded-full" />
                <MaterialIcons name="check-circle" size={80} color="#f5a623" />
            </View>

            {/* Typography */}
            <Text className="text-4xl font-extrabold tracking-tight text-white mb-4 text-center">Report Submitted!</Text>
            <Text className="text-on-surface-variant text-base text-center mb-10 px-4">
                Your contribution to the community archive has been securely logged.
            </Text>

            {/* Metadata Cards */}
            <View className="w-full space-y-4 mb-10">
                <View className="bg-surface-container-low p-6 rounded-xl">
                    <View className="flex-row justify-between items-center mb-2">
                        <Text className="font-mono text-[10px] uppercase tracking-widest text-primary-container">Reference ID</Text>
                        <View className="bg-surface-container-high px-2 py-1 rounded">
                            <Text className="font-mono text-xs text-on-surface-variant">SECURED</Text>
                        </View>
                    </View>
                    <Text className="font-mono text-3xl font-bold tracking-tighter text-white">ND-7721</Text>
                </View>

                <View className="bg-surface-container-low p-6 rounded-xl flex-row items-center border-l-2 border-primary-container">
                    <View className="flex-1">
                        <Text className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-1">Current Status</Text>
                        <Text className="text-white font-bold text-lg">Unverified — Awaiting Community</Text>
                    </View>
                    <MaterialIcons name="hourglass-empty" size={28} color="#f5a623" style={{ opacity: 0.5 }} />
                </View>
            </View>

            {/* Actions */}
            <View className="w-full pt-4 space-y-6 items-center">
                <TouchableOpacity onPress={handleFinish} className="w-full py-5 bg-primary-container rounded-xl shadow-xl items-center justify-center active:bg-primary-fixed">
                    <Text className="text-[#452b00] font-bold text-lg">View Your Report</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.replace('/(report)/location' as never)} className="mt-6">
                    <Text className="text-primary font-bold tracking-wide">Report Another Issue</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
