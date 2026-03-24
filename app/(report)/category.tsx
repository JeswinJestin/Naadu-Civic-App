import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const categories = [
    { id: 'roads', title: 'Roads & Infrastructure', icon: 'construction' },
    { id: 'water', title: 'Water & Drainage', icon: 'water-drop' },
    { id: 'health', title: 'Health & Sanitation', icon: 'sanitizer' },
    { id: 'education', title: 'Education', icon: 'school' },
    { id: 'hazards', title: 'Hazards & Safety', icon: 'warning' },
    { id: 'community', title: 'Community Issues', icon: 'groups' },
    { id: 'environment', title: 'Environment', icon: 'eco' },
    { id: 'other', title: 'Other', icon: 'pending' },
];

export default function ReportCategoryScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState('water');

  const handleNext = () => {
    router.push('/(report)/details' as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 h-16 bg-surface/60 border-b border-outline-variant/10">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
            <MaterialIcons name="arrow-back" size={24} color="#adb9d1" />
        </TouchableOpacity>
        <Text className="font-bold text-primary text-lg uppercase tracking-tighter">Sovereign Civic</Text>
        <View className="w-8" />
      </View>

      <ScrollView className="flex-1 px-6 pt-8 pb-32">
        <View className="mb-8">
            <View className="flex-row items-center gap-3 mb-4">
                <View className="bg-primary-container/10 px-2 py-1 rounded">
                    <Text className="font-mono text-[10px] text-primary-container tracking-widest uppercase">Step 02 / 05</Text>
                </View>
                <View className="flex-1 h-[1px] bg-outline-variant/30" />
            </View>
            <Text className="text-3xl font-bold text-white mb-2 leading-tight">What type of issue is this?</Text>
            <Text className="text-on-surface-variant text-base">Select the category that best describes the civic matter.</Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
            {categories.map((cat) => {
                const isActive = selected === cat.id;
                return (
                    <TouchableOpacity 
                        key={cat.id} 
                        onPress={() => setSelected(cat.id)}
                        className={`w-[48%] h-36 p-4 rounded-xl mb-4 flex-col justify-between ${isActive ? 'bg-surface-container-high border-2 border-primary-container' : 'bg-surface-container-low border-2 border-transparent'}`}
                    >
                        <MaterialIcons name={cat.icon as any} size={32} color={isActive ? '#f5a623' : '#ffc880'} />
                        <Text className={`font-bold ${isActive ? 'text-primary-container' : 'text-on-surface'}`}>{cat.title}</Text>
                        {isActive && (
                            <View className="absolute top-2 right-2">
                                <MaterialIcons name="check-circle" size={20} color="#f5a623" />
                            </View>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
      </ScrollView>

      {/* Floating Bottom Nav */}
      <View className="absolute bottom-0 w-full bg-surface-dim/90 px-6 py-6 border-t border-outline-variant/10 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => router.back()} className="px-6 py-4 bg-surface-container-high rounded-xl">
            <Text className="text-on-surface font-bold uppercase tracking-widest text-xs font-mono">Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} className="flex-1 ml-4 py-4 bg-primary-container rounded-xl items-center shadow-lg shadow-primary-container/20">
            <Text className="text-[#452b00] font-bold uppercase tracking-widest text-xs font-mono">Next Step</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
