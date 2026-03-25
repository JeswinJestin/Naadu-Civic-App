import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConstituencyDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 h-16 bg-surface-dim border-b border-surface-container">
        <TouchableOpacity onPress={() => router.back()} className="mr-4 p-2 -ml-2">
          <MaterialIcons name="arrow-back" size={24} color="#f5a623" />
        </TouchableOpacity>
        <Text className="font-bold text-primary text-xl">Constituency {id}</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View className="bg-primary-container p-6 flex-row items-center justify-between">
           <View>
              <Text className="text-on-primary font-bold text-2xl mb-1">Thiruvananthapuram</Text>
              <Text className="text-on-primary-fixed-variant font-medium tracking-widest uppercase text-xs">TVM-01</Text>
           </View>
           <View className="bg-surface-container p-2 rounded-lg">
              <MaterialIcons name="leaderboard" size={32} color="#f5a623" />
           </View>
        </View>

        <View className="p-6 gap-6">
          {/* MLA Info */}
          <View className="bg-surface-container-low rounded-xl p-5 border border-surface-container-highest">
            <Text className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Current Representative</Text>
            <View className="flex-row items-center gap-4">
               <View className="w-16 h-16 bg-surface-container-highest rounded-full overflow-hidden border-2 border-primary/20">
                 <Image 
                   source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                   className="w-full h-full"
                 />
               </View>
               <View>
                  <Text className="text-xl font-bold text-white mb-1">Antony Raju</Text>
                  <Text className="text-primary text-sm font-medium">LDF / Janadhipathya Kerala Congress</Text>
               </View>
            </View>
          </View>

           {/* Stats Grid */}
           <View className="flex-row gap-4">
              <View className="flex-1 bg-surface-container-low p-4 rounded-xl border border-surface-container-highest">
                 <Text className="text-[10px] font-mono uppercase text-on-surface-variant mb-2">Resolution Rate</Text>
                 <Text className="text-3xl font-extrabold text-primary mb-1">68%</Text>
                 <Text className="text-secondary text-xs">Top 20% in State</Text>
              </View>
              <View className="flex-1 bg-surface-container-low p-4 rounded-xl border border-surface-container-highest">
                 <Text className="text-[10px] font-mono uppercase text-on-surface-variant mb-2">Active Issues</Text>
                 <Text className="text-3xl font-extrabold text-error mb-1">42</Text>
                 <Text className="text-error text-xs">+5 this week</Text>
              </View>
           </View>

           {/* Satisfaction Score */}
           <View className="bg-surface-container p-6 rounded-xl relative overflow-hidden">
               <View className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
               <Text className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Public Satisfaction</Text>
               <View className="flex-row items-end gap-2 mb-2">
                  <Text className="text-5xl font-extrabold text-primary">4.2</Text>
                  <Text className="text-xl text-on-surface-variant font-bold mb-1">/ 5</Text>
               </View>
               <View className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden mt-4">
                  <View className="h-full w-[84%] bg-primary rounded-full" />
               </View>
           </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
