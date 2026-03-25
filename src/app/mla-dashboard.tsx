import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function MLADashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#0a0e14]" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-surface-dim border-b border-surface-container-highest">
         <TouchableOpacity onPress={() => router.back()} className="mr-4 p-2 -ml-2">
           <MaterialIcons name="arrow-back" size={24} color="#f5a623" />
         </TouchableOpacity>
         <View>
             <Text className="text-xl font-bold text-primary tracking-tight">MLA Dashboard</Text>
             <Text className="text-[10px] font-mono text-on-surface-variant tracking-widest uppercase">Verified Seat: TVM-01</Text>
         </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Top Stats Banner */}
          <View className="px-6 py-6 bg-surface-container-low border-b border-surface-container-highest flex-row justify-between">
              <View>
                 <Text className="text-[10px] font-mono uppercase text-on-surface-variant mb-1">Approval Rating</Text>
                 <Text className="text-4xl font-extrabold text-[#9bd9ff]">4.2<Text className="text-lg text-on-surface-variant">/5</Text></Text>
                 <Text className="text-[#3ac2ff] text-xs font-bold mt-1">▲ +0.4 this month</Text>
              </View>
              <View className="items-end">
                 <Text className="text-[10px] font-mono uppercase text-on-surface-variant mb-1">Pending Issues</Text>
                 <Text className="text-4xl font-extrabold text-error">42</Text>
                 <Text className="text-error text-xs font-bold mt-1">Requires Attention</Text>
              </View>
          </View>

          <View className="p-6">
              <Text className="text-lg font-bold text-white mb-4">High Priority Issues</Text>

              {/* Actionable Issue Card */}
              <View className="bg-surface-container p-5 rounded-xl border-l-4 border-error mb-4 shadow-xl">
                 <View className="flex-row justify-between items-start mb-2">
                    <Text className="text-on-surface font-bold flex-1 text-base leading-snug">Pothole near Secretariat</Text>
                    <View className="bg-error/10 px-2 py-1 rounded ml-2">
                        <Text className="text-error text-[10px] font-bold uppercase tracking-wider">Critical</Text>
                    </View>
                 </View>
                 <Text className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                    Reported by 14 verified citizens in the last 48 hours. Validated with 5 photos.
                 </Text>
                 
                 <View className="flex-row gap-3">
                    <TouchableOpacity className="flex-1 py-3 bg-surface-container-highest rounded-lg items-center border border-outline-variant/30">
                        <Text className="text-on-surface font-bold text-sm">View Evidence</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 py-3 bg-primary-container rounded-lg items-center shadow-lg shadow-primary-container/20">
                        <Text className="text-on-primary font-bold text-sm">Mark Resolved</Text>
                    </TouchableOpacity>
                 </View>
              </View>

               {/* Actionable Issue Card */}
               <View className="bg-surface-container p-5 rounded-xl border-l-4 border-primary mb-4 shadow-xl">
                 <View className="flex-row justify-between items-start mb-2">
                    <Text className="text-on-surface font-bold flex-1 text-base leading-snug">Broken Streetlight (MG Road)</Text>
                    <View className="bg-primary/10 px-2 py-1 rounded ml-2">
                        <Text className="text-primary text-[10px] font-bold uppercase tracking-wider">Standard</Text>
                    </View>
                 </View>
                 <Text className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                    Reported 3 days ago. Causes safety concerns for pedestrians at night.
                 </Text>
                 
                 <View className="flex-row gap-3">
                    <TouchableOpacity className="flex-1 py-3 bg-surface-container-highest rounded-lg items-center border border-outline-variant/30">
                        <Text className="text-on-surface font-bold text-sm">View Evidence</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 py-3 bg-primary-container rounded-lg items-center shadow-lg shadow-primary-container/20">
                        <Text className="text-on-primary font-bold text-sm">Mark Resolved</Text>
                    </TouchableOpacity>
                 </View>
              </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
