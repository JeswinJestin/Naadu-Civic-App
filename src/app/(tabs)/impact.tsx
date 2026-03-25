import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ImpactScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-surface/90 border-b border-surface-container">
        <Text className="text-xl font-bold text-primary tracking-tight">Community Impact</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View className="bg-surface-container-low p-6 border-b border-surface-container-highest">
           <Text className="text-on-surface-variant mb-4 leading-relaxed">
             Track the collective power of civic participation in your area. Your actions map directly to governance outcomes.
           </Text>
           <View className="flex-row gap-4">
              <View className="flex-1 bg-surface-container p-4 rounded-lg border border-primary/20 items-center">
                 <Text className="text-3xl font-extrabold text-primary mb-1">14</Text>
                 <Text className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">Issues Resolved</Text>
              </View>
              <View className="flex-1 bg-surface-container p-4 rounded-lg border border-surface-container-highest items-center">
                 <Text className="text-3xl font-extrabold text-white mb-1">Top 5%</Text>
                 <Text className="text-[10px] text-on-surface-variant uppercase tracking-widest text-center">Active Voter Rank</Text>
              </View>
           </View>
        </View>

        <View className="p-6 gap-6">
           {/* Active Poll Alert */}
           <View className="bg-primary-container p-5 rounded-xl shadow-lg shadow-primary-container/20 border border-primary">
              <View className="flex-row items-center gap-2 mb-2">
                 <MaterialIcons name="star" size={24} color="#452b00" />
                 <Text className="text-on-primary font-bold text-lg">Monthly Satisfaction Poll</Text>
              </View>
              <Text className="text-on-primary-fixed-variant text-sm mb-4">
                 It's time to rate your MLA's performance for this month. Your sovereign vote shapes the constituency leaderboard.
              </Text>
              <TouchableOpacity 
                 onPress={() => router.push('/poll' as never)}
                 className="bg-surface border border-primary/30 py-3 rounded-lg items-center active:bg-surface-container"
              >
                 <Text className="text-primary font-bold">Take The Poll</Text>
              </TouchableOpacity>
           </View>

           {/* Leaderboard Teaser */}
           <View className="bg-surface-container p-5 rounded-xl border border-surface-container-highest">
              <View className="flex-row items-center justify-between mb-4">
                 <Text className="text-on-surface font-bold text-lg">State Leaderboards</Text>
                 <View className="bg-surface-container-high px-2 py-1 rounded">
                    <Text className="text-xs text-on-surface-variant font-mono">LIVE</Text>
                 </View>
              </View>
              <View className="gap-3">
                 <View className="flex-row items-center justify-between p-3 bg-surface-dim rounded-lg">
                    <Text className="text-white font-bold"><Text className="text-primary">#1</Text>  Ernakulam</Text>
                    <Text className="text-error font-medium">4.8<Text className="text-xs">/5</Text></Text>
                 </View>
                 <View className="flex-row items-center justify-between p-3 bg-surface-container-low border border-primary/40 rounded-lg">
                    <Text className="text-white font-bold"><Text className="text-primary">#7</Text>  Thiruvananthapuram</Text>
                    <Text className="text-primary font-medium">4.2<Text className="text-xs">/5</Text></Text>
                 </View>
                 <View className="flex-row items-center justify-between p-3 bg-surface-dim rounded-lg opacity-60">
                    <Text className="text-white font-bold"><Text className="text-on-surface-variant">#14</Text> Alappuzha</Text>
                    <Text className="text-on-surface-variant font-medium">3.9<Text className="text-xs">/5</Text></Text>
                 </View>
              </View>

              <TouchableOpacity 
                 onPress={() => router.push('/constituency/TVM-01' as never)}
                 className="mt-6 flex-row items-center justify-center gap-2"
              >
                 <Text className="text-primary font-bold text-sm">View Full Rankings</Text>
                 <MaterialIcons name="arrow-forward" size={16} color="#f5a623" />
              </TouchableOpacity>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
