import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-surface/90">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="p-2 -ml-2 rounded-full overflow-hidden active:bg-surface-container-high transition-colors">
            <MaterialIcons name="menu" size={24} color="#f5a623" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-primary tracking-tight">Activity Feed</Text>
        </View>
        <View className="h-9 w-9 rounded-full overflow-hidden border-2 border-primary/20 bg-surface-container-high">
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?img=68' }}
              className="w-full h-full"
            />
        </View>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Filter Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-2 mb-6">
          <TouchableOpacity className="px-6 py-2 rounded-full bg-primary-container mr-2">
            <Text className="text-on-primary-container font-bold text-sm">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-6 py-2 rounded-full bg-surface-container-high mr-2">
            <Text className="text-on-surface-variant font-bold text-sm">My Issues</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-6 py-2 rounded-full bg-surface-container-high mr-2">
            <Text className="text-on-surface-variant font-bold text-sm">Nearby</Text>
          </TouchableOpacity>
        </ScrollView>

        <View className="gap-6 mt-2">
          {/* Milestone Card */}
          <View className="overflow-hidden p-6 rounded-xl bg-surface-container-low border-l-4 border-primary shadow-lg">
            <View className="flex-row items-center gap-2 mb-2">
              <MaterialIcons name="military-tech" size={28} color="#ffc880" />
              <Text className="text-[10px] uppercase tracking-widest text-[#ffc880] font-bold">Community Victory</Text>
            </View>
            <Text className="text-lg font-bold text-white leading-tight mb-2">Constituency Milestone: 50 issues resolved this month in Kochi!</Text>
            <Text className="text-on-surface-variant text-sm">Together, we are building a more responsive governance model.</Text>
          </View>

          {/* New Issue Reported */}
          <View className="p-5 rounded-xl bg-surface-container-low">
            <View className="flex-row items-start gap-4">
              <View className="bg-surface-container-high p-3 rounded-lg">
                <MaterialIcons name="traffic" size={24} color="#ffc880" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-sm text-on-surface flex-[0.8] leading-snug">
                    <Text className="text-primary font-bold">SilverLotus</Text> reported a new <Text className="font-bold">Road</Text> issue
                  </Text>
                  <Text className="text-[10px] text-on-surface-variant/60 mt-1">2h ago</Text>
                </View>
                <Text className="text-sm text-[#adb9d1] mb-4 mt-1 leading-snug">Pothole detected near Secretariat entrance, Thiruvananthapuram. Impeding traffic flow.</Text>
                <View className="flex-row items-center gap-3">
                  <TouchableOpacity className="px-4 py-2 bg-primary-container rounded-lg">
                    <Text className="text-[#644000] text-xs font-bold">View Details</Text>
                  </TouchableOpacity>
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="location-on" size={14} color="#d7c3ae" />
                    <Text className="text-[11px] text-on-surface-variant">Thiruvananthapuram</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Issue Resolved Card */}
          <View className="p-5 rounded-xl bg-surface-container-low border-l-4 border-primary">
            <View className="flex-row items-start gap-4">
              <View className="bg-primary/20 p-3 rounded-full">
                <MaterialIcons name="check-circle" size={24} color="#ffc880" />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-sm font-bold text-primary">ISSUE RESOLVED</Text>
                  <Text className="text-[10px] text-on-surface-variant/60 mt-1">5h ago</Text>
                </View>
                <Text className="text-on-surface leading-snug mt-1">The <Text className="font-bold text-primary">'Water Leak'</Text> issue on MG Road has been marked as RESOLVED by the MLA.</Text>
                <View className="mt-4 flex-row items-center gap-2">
                  <View className="h-5 w-5 rounded-full bg-surface-container-high border border-primary/30 items-center justify-center">
                    <MaterialIcons name="verified" size={12} color="#ffc880" />
                  </View>
                  <Text className="text-[10px] font-bold tracking-wide text-on-surface-variant uppercase">Verified by Civic Audit Team</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
