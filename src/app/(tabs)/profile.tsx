import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-surface/90 border-b border-surface-container">
        <Text className="text-xl font-bold text-primary tracking-tight">Your Profile</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* User Card */}
        <View className="p-6 items-center border-b border-surface-container-highest">
           <View className="w-24 h-24 bg-surface-container-highest rounded-full overflow-hidden border-2 border-primary/20 mb-4">
             <Image 
               source={{ uri: 'https://i.pravatar.cc/150?img=68' }}
               className="w-full h-full"
             />
           </View>
           <Text className="text-2xl font-bold text-white mb-1">SilverLotus</Text>
           <View className="bg-primary/10 px-3 py-1 rounded-full">
             <Text className="text-primary text-xs font-bold tracking-widest uppercase">Verified Citizen</Text>
           </View>
        </View>

        <View className="p-6 gap-6">
           <View>
              <Text className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Registered Constituency</Text>
              <TouchableOpacity 
                 onPress={() => router.push('/constituency/TVM-01')}
                 className="bg-surface-container p-4 rounded-lg flex-row items-center justify-between border border-surface-container-highest active:bg-surface-container-highest transition-colors"
              >
                 <View className="flex-row items-center gap-3">
                    <MaterialIcons name="how-to-vote" size={24} color="#f5a623" />
                    <View>
                       <Text className="text-on-surface font-bold">Thiruvananthapuram</Text>
                       <Text className="text-on-surface-variant text-xs">TVM-01</Text>
                    </View>
                 </View>
                 <MaterialIcons name="chevron-right" size={24} color="#adb9d1" />
              </TouchableOpacity>
           </View>

           {/* Settings Toggles */}
           <View>
              <Text className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">App Settings</Text>
              <View className="bg-surface-container rounded-lg border border-surface-container-highest overflow-hidden">
                 <TouchableOpacity className="p-4 border-b border-surface-container-highest flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                       <MaterialIcons name="notifications" size={20} color="#dfe2eb" />
                       <Text className="text-on-surface">Push Notifications</Text>
                    </View>
                    <View className="w-10 h-6 bg-primary rounded-full items-end justify-center px-1">
                       <View className="w-4 h-4 bg-[#452b00] rounded-full" />
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity className="p-4 border-b border-surface-container-highest flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                       <MaterialIcons name="language" size={20} color="#dfe2eb" />
                       <Text className="text-on-surface">Language</Text>
                    </View>
                    <Text className="text-on-surface-variant text-sm">English</Text>
                 </TouchableOpacity>
                 <TouchableOpacity 
                    onPress={() => router.push('/mla-dashboard')}
                    className="p-4 flex-row items-center justify-between bg-error/5"
                 >
                    <View className="flex-row items-center gap-3">
                       <MaterialIcons name="admin-panel-settings" size={20} color="#ffb4ab" />
                       <Text className="text-error font-bold">Switch to MLA View (Mock)</Text>
                    </View>
                    <MaterialIcons name="chevron-right" size={24} color="#ffb4ab" />
                 </TouchableOpacity>
              </View>
           </View>

           {/* Logout Button */}
           <TouchableOpacity 
              onPress={() => router.replace('/onboarding')}
              className="mt-6 p-4 rounded-lg items-center justify-center border border-error/30 active:bg-error/10 transition-colors"
           >
              <Text className="text-error font-bold tracking-tight">Sign Out</Text>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
