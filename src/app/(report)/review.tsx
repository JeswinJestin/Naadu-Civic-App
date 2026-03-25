import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReportReviewScreen() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/(report)/confirmation' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 h-16 bg-surface/60 border-b border-surface-container-highest">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <MaterialIcons name="close" size={24} color="#adb9d1" />
        </TouchableOpacity>
        <Text className="font-bold text-primary text-lg tracking-tighter">Sovereign Civic</Text>
        <TouchableOpacity className="p-2 -mr-2">
            <MaterialIcons name="help-outline" size={24} color="#adb9d1" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6 pt-8 pb-32">
        <View className="mb-8">
            <Text className="font-mono text-[10px] uppercase tracking-widest text-primary-container mb-2">Step 4 of 5</Text>
            <Text className="text-4xl font-bold tracking-tight mb-4 text-white">Review Report</Text>
            <View className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <View className="h-full w-[80%] bg-primary-container" />
            </View>
        </View>

        <View className="space-y-6">
            {/* Map Preview */}
            <View className="bg-surface-container-low rounded-xl overflow-hidden mb-6 border border-surface-container-highest">
                <View className="h-48 w-full relative">
                    <Image 
                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAUoGwbSVYwPj3lUpMOp7MS48XanjykIrhnTFh_e0LK8CtyhNQpc_4i8Zb7jG1jy8zUyq9UCO3YbJZJbw82FUDUbs19C_Yq9COLMN0znmsy6LPRjTWNnO4QonnE7XOYdpNg0xAv5W4D9zcGjFw9AcxzAAmU4kuZKD6OevDFqO0tqjyKaR4mWObbHPLzJNynEzXLnLalVu4s5YaAvZ6CPH9z1I6roDSbwP0nQhvadNq630Nn8eUn4nXfb3C6cpIVMh43ITh1v1fslI' }} 
                        className="w-full h-full opacity-60"
                        resizeMode="cover"
                    />
                    <View className="absolute inset-0 items-center justify-center">
                        <View className="w-12 h-12 rounded-full bg-primary-container/30 border border-primary-container/60 items-center justify-center">
                            <MaterialIcons name="location-on" size={24} color="#f5a623" />
                        </View>
                    </View>
                    <View className="absolute bottom-4 left-4 right-4 flex-row justify-between items-end">
                        <View className="bg-surface-container-highest/90 px-3 py-2 rounded-lg">
                            <Text className="font-mono text-[10px] text-primary">LOCATION</Text>
                            <Text className="text-sm font-bold text-white">Fort Kochi, Marine Drive Area</Text>
                        </View>
                        <TouchableOpacity className="bg-surface-container-highest px-3 py-2 rounded-lg">
                            <Text className="text-primary text-xs font-bold uppercase tracking-widest">Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Content Preview */}
            <View className="bg-surface-container-low p-6 rounded-xl border-l-2 border-primary-container mb-6">
                <View className="flex-row justify-between items-start mb-4">
                    <View className="bg-primary-container/10 px-2 py-1 rounded">
                        <Text className="font-mono text-[10px] text-primary-container uppercase tracking-widest">Infrastructure</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="edit" size={16} color="#f5a623" />
                    </TouchableOpacity>
                </View>
                <Text className="text-2xl font-bold text-white mb-2">Damaged Waterfront Pavement</Text>
                <Text className="text-on-surface-variant leading-relaxed text-sm mb-6">
                    The main walkway near the heritage anchors has significant structural cracks. Large tiles have become loose, posing a trip hazard to evening visitors and elderly citizens. Needs urgent structural reinforcement.
                </Text>

                <Text className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">Evidence Photos (3)</Text>
                <View className="flex-row gap-3">
                    <View className="flex-1 aspect-square rounded-lg overflow-hidden border border-outline-variant/30">
                        <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrgeqBF2sXHZqK1lTpzbUzkJdujWKHv_hKtCTsT_SY45--0MPhaVICou1uLJU9aWh2nlgnKI4PJr3Taz7TH5CafUsy2X9aG9Kbqfcp2tXb0DSDFWkdHlA9pbutF7i3yn6w3Q5IHMgc-oNueJXTZSx-xUMMldw9MgLbqAJ1XMOr7RCq5krhUsEuYefZxdDG_bKMsMkPGCqIBcCeIegN3k-R33fWrMzQbaGOiKM9LvCAJJMbpKnTlwUUQppFyHr1awPYhxqOVNpcSMw' }} className="w-full h-full opacity-80" />
                    </View>
                    <View className="flex-1 aspect-square rounded-lg overflow-hidden border border-outline-variant/30">
                        <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlNf46pgVRMmRsrgLBn9cfDqFk-r54n0Zv0pno7kxIJkIM3kYwIcol-lyzxmVox54t0LVyTlxifN6l2f1neUIxz6PpmOs4fodtG6bGIBPT_f3GYLYLb3SecnYFXZgENa1ii5Gh9-9QwDg_HUNc9gtliASkiR_w3Zx3mrabIBpCxqI8Mzgsm0fD-U5-CuD0TXoJyE1-V8Q5xjcaidCq7TmbuOQ2mwl96cBm8S2HbKP8KxCDjqvoHKSL2GcJ2DXrquDLJV8s1aj15o4' }} className="w-full h-full opacity-80" />
                    </View>
                    <View className="flex-1 aspect-square rounded-lg overflow-hidden border border-outline-variant/30">
                        <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLpb2G5KTiq9G3JPFdfxIoj6spBNoOS-I2k8CRtMyVk8qnzdnJ_ZrK_z8e9q6oLg6Zq5gNVtUQ5hApYOGnoDLf42tdb3nOZ3XmXWBlBLMrB_AJGrEb54JqqN9EzrxOR4Qfw5ZrD9FGxlsOXQeaLo25V8hIQIsTamb8M_BnIxlIN91C8cjy0rCk3QGcSimwZIetbXiKCeToYEPEV-_YVmBrgR73ETkE1ev17ShiWLpNC7cv_4FEUGL46T7zyC2SmxwBDANUjaifUzM' }} className="w-full h-full opacity-80" />
                    </View>
                </View>
            </View>

            {/* Privacy Note */}
            <View className="bg-surface-container-lowest/50 p-6 rounded-xl border border-outline-variant/10 flex-row items-start gap-4 mb-8">
                <MaterialIcons name="shield" size={24} color="#f5a623" />
                <View className="flex-1">
                    <Text className="text-primary-container font-bold mb-1 border-b border-transparent">Privacy Guarantee</Text>
                    <Text className="text-xs text-on-surface-variant leading-relaxed">Your identity stays anonymous. Only your report is made public. Your contact data is only visible to the municipal verified inspectors.</Text>
                </View>
            </View>

            {/* Submit CTA */}
            <View className="mt-4 mb-8">
                <TouchableOpacity onPress={handleSubmit} className="w-full h-16 bg-primary-container rounded-xl flex-row items-center justify-center shadow-lg shadow-primary-container/20">
                    <Text className="text-[#452b00] font-black text-lg uppercase tracking-widest mr-3">Submit Report</Text>
                    <MaterialIcons name="arrow-forward" size={24} color="#452b00" />
                </TouchableOpacity>
                <Text className="text-center text-slate-500 text-[10px] font-mono mt-4 px-4 leading-tight">By submitting, you certify that the information provided is accurate and captured at the reported location.</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
