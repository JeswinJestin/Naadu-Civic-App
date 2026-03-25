import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReportDetailsScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(report)/review' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 h-16 bg-surface/60 border-b border-surface-container-highest">
        <View className="flex-row items-center gap-2">
            <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
                <MaterialIcons name="close" size={24} color="#f5a623" />
            </TouchableOpacity>
            <Text className="font-bold text-primary text-lg tracking-tighter">Sovereign Civic</Text>
        </View>
        <Text className="font-bold text-primary text-lg">Tell us more</Text>
        <TouchableOpacity className="p-2 -mr-2">
            <MaterialIcons name="help-outline" size={24} color="#f5a623" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6 pt-8 pb-32">
        {/* Progress Indicator */}
        <View className="mb-12">
            <View className="flex-row justify-between items-end mb-4">
                <Text className="font-mono text-[10px] uppercase tracking-widest text-primary">Civic Record: Phase 03</Text>
                <Text className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Step 3 of 5</Text>
            </View>
            <View className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                <View className="h-full w-[60%] bg-primary-container" />
            </View>
        </View>

        <View className="space-y-10">
            <View className="space-y-2 mb-10">
                <Text className="text-4xl font-bold tracking-tight text-on-surface">Detail the <Text className="text-primary-container">Incident</Text></Text>
                <Text className="text-on-surface-variant leading-relaxed text-base pt-2">Provide precise information to ensure rapid civic response. Your contribution is cryptographically anchored to your district profile.</Text>
            </View>

            <View className="space-y-8 mb-10">
                <View className="mb-8">
                    <View className="flex-row justify-between items-center mb-2">
                        <Text className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Issue Title</Text>
                        <Text className="font-mono text-[10px] text-outline">0 / 80</Text>
                    </View>
                    <TextInput 
                        className="w-full border-b-2 border-surface-container-highest focus:border-primary-container py-3 text-lg font-medium text-white px-0"
                        placeholder="Summary of the issue..."
                        placeholderTextColor="#9f8e7a"
                        maxLength={80}
                    />
                </View>

                <View>
                    <View className="flex-row justify-between items-center mb-2">
                        <Text className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Detailed Description</Text>
                        <Text className="font-mono text-[10px] text-outline">0 / 30 min chars</Text>
                    </View>
                    <TextInput 
                        className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary-container p-4 text-white text-base rounded-t-lg"
                        placeholder="Describe the problem, its impact, and exact location markers..."
                        placeholderTextColor="#9f8e7a"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>
            </View>

            <View className="space-y-4 pt-4 mb-8">
                <View className="flex-row items-center justify-between mb-4">
                    <Text className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Visual Evidence</Text>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="flex-row items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high">
                            <MaterialIcons name="photo-camera" size={14} color="#dfe2eb" />
                            <Text className="font-mono text-[10px] uppercase text-white">Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high">
                            <MaterialIcons name="photo-library" size={14} color="#dfe2eb" />
                            <Text className="font-mono text-[10px] uppercase text-white">Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <TouchableOpacity className="w-[30%] aspect-square rounded-xl border-2 border-dashed border-primary-container pb-2 bg-primary-container/10 items-center justify-center">
                        <MaterialIcons name="add-a-photo" size={24} color="#f5a623" />
                        <Text className="font-mono text-[8px] uppercase tracking-tighter text-primary-container text-center mt-2 px-1">Add Photo (Required)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-[30%] aspect-square rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low items-center justify-center">
                        <MaterialIcons name="add" size={24} color="#9f8e7a" />
                        <Text className="font-mono text-[8px] uppercase tracking-tighter text-outline text-center mt-2 px-1">Optional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-[30%] aspect-square rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low items-center justify-center">
                        <MaterialIcons name="add" size={24} color="#9f8e7a" />
                        <Text className="font-mono text-[8px] uppercase tracking-tighter text-outline text-center mt-2 px-1">Optional</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="mt-8 flex-row items-center justify-between gap-4">
                <Text className="flex-1 text-[10px] text-outline italic leading-tight">Submission data will be verified via public ledger for transparency and accountability.</Text>
                <TouchableOpacity onPress={handleNext} className="bg-primary-container py-4 px-6 rounded-xl shadow-lg shadow-primary-container/20">
                    <Text className="text-[#452b00] font-bold">Continue to Review</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
