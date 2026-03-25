import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SetupScreen() {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to tabs immediately
    router.replace('/(tabs)' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      <View className="flex-row items-center px-6 h-16 bg-surface/60 border-b border-surface-container-highest">
         <TouchableOpacity onPress={() => router.back()} className="mr-4">
           <MaterialIcons name="arrow-back" size={24} color="#f5a623" />
         </TouchableOpacity>
         <Text className="font-bold text-primary text-xl">Sovereign Identity</Text>
         <View className="ml-auto">
            <Text className="font-mono text-[10px] text-primary-container tracking-widest uppercase">Step 01 / 03</Text>
         </View>
      </View>

      <ScrollView className="flex-1 px-8 pt-12 pb-24">
        <View className="mb-12">
            <View className="flex-row justify-between mb-2">
                <Text className="font-mono text-[10px] text-primary-container tracking-widest uppercase">Verification Progress</Text>
                <Text className="font-mono text-[10px] text-on-surface-variant tracking-widest uppercase">33% Complete</Text>
            </View>
            <View className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <View className="h-full w-1/3 bg-primary" />
            </View>
        </View>

        <View className="mb-12">
            <Text className="text-4xl font-bold text-on-surface mb-4 leading-tight">
                Where is your{'\n'}<Text className="text-primary-container">vote registered?</Text>
            </Text>
            <Text className="text-on-surface-variant text-lg">
                This determines which MLA you can rate in satisfaction polls.
            </Text>
        </View>

        <View className="gap-8 mb-12">
            <View>
                <Text className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Select District</Text>
                <View className="bg-surface-container-low rounded-lg p-4 border-b-2 border-surface-container-highest flex-row justify-between items-center">
                    <Text className="text-on-surface text-lg">Choose Region</Text>
                    <MaterialIcons name="expand-more" size={24} color="#adb9d1" />
                </View>
            </View>

            <View>
                <Text className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Select Constituency</Text>
                <View className="bg-surface-container-low rounded-lg p-4 border-b-2 border-surface-container-highest flex-row justify-between items-center">
                    <Text className="text-on-surface text-lg">Choose Area</Text>
                    <MaterialIcons name="expand-more" size={24} color="#adb9d1" />
                </View>
            </View>
        </View>

        <View className="bg-surface-container-low p-6 rounded-xl flex-row items-start gap-4 mb-12 border-l-2 border-primary-container">
            <MaterialIcons name="verified-user" size={28} color="#f5a623" />
            <View className="flex-1">
                <Text className="font-bold text-on-surface mb-2">Why this matters?</Text>
                <Text className="text-on-surface-variant text-sm leading-snug">
                    Your voting data ensures you have a direct say in your local representative's performance score.
                </Text>
            </View>
        </View>

        <TouchableOpacity 
            onPress={handleContinue}
            className="w-full py-5 bg-primary-container rounded-lg items-center justify-center flex-row shadow-lg shadow-primary-container/20 active:opacity-80"
        >
            <Text className="text-on-primary font-bold text-lg mr-2">Continue</Text>
            <MaterialIcons name="arrow-forward" size={20} color="#452b00" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
