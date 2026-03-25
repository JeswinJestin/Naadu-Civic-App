import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function MapScreen() {
  const router = useRouter();

  const handleReport = () => {
    // Navigate to report flow
    router.push('/(report)/location' as never);
  };

  return (
    <View className="flex-1 bg-[#0d1117] relative">
      <SafeAreaView edges={['top']} className="absolute top-0 w-full z-50">
        <View className="flex-row items-center justify-between px-6 py-2">
            <View className="bg-surface-dim/80 px-4 py-2 rounded-full flex-row items-center">
                <Text className="text-primary font-bold text-xl tracking-tighter">Naadu</Text>
            </View>
            <View className="flex-row items-center gap-2">
                <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-dim/80 items-center justify-center">
                    <MaterialIcons name="search" size={20} color="#dfe2eb" />
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-dim/80 items-center justify-center">
                    <MaterialIcons name="notifications" size={20} color="#dfe2eb" />
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>

      {/* Mock Map Background */}
      <View className="flex-1 opacity-60">
        <Image 
           source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnpH_zh1uXJUjmCqiRbvILj0cdAWiDO119acfGh3Msf_B8s5wKG_q7G95fW35DvNUv9hg9ejUKQ_SDG3uC79kgh83z4brMkYcDdN04A8zU1ONRa1fKOp8kWJq67MHI7bjP_0_GOiMOwm7_EACfLbA83cb1MtPzVWdSb9lOqBXia_tafmxcrrw55KSs4GF6zHFGkkU4AwC-fUzTHxoRawEg1ubhrV36zKMlxN4gBHKSKP240w0QVUrBXkHBYqFIgkn36Jin1z5S3IQ' }}
           className="w-full h-full"
           resizeMode="cover"
        />
      </View>

      {/* Mock Map Marker Info */}
      <View className="absolute top-1/2 left-4 right-4 z-30 bg-surface-container-high/90 p-4 rounded-xl shadow-2xl border-l-4 border-primary-container">
        <View className="flex-row justify-between mb-2">
            <Text className="font-bold text-lg text-on-surface">Thiruvananthapuram Central</Text>
            <Text className="text-[10px] font-mono px-2 py-1 bg-surface-container-highest text-primary rounded">TVM-01</Text>
        </View>
        <View className="flex-row justify-between mt-4 pr-10">
            <View>
                <Text className="text-[10px] font-mono uppercase text-on-surface-variant">Active Issues</Text>
                <Text className="text-xl font-bold text-error">42</Text>
            </View>
            <View>
                <Text className="text-[10px] font-mono uppercase text-on-surface-variant">Satisfaction</Text>
                <Text className="text-xl font-bold text-primary">4.2<Text className="text-xs text-on-surface-variant">/5</Text></Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => router.push('/constituency/TVM-01' as never)} className="mt-4 pt-3 border-t border-outline-variant/20 flex-row items-center gap-2">
            <Text className="text-primary text-sm font-bold">View Constituency Details</Text>
            <MaterialIcons name="arrow-forward" size={16} color="#f5a623" />
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity 
          onPress={handleReport}
          className="absolute bottom-6 right-6 z-40 w-14 h-14 bg-primary-container rounded-full items-center justify-center shadow-lg shadow-primary-container/30"
      >
        <MaterialIcons name="add" size={32} color="#452b00" />
      </TouchableOpacity>
    </View>
  );
}
