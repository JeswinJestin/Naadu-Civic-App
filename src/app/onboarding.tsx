import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

const ONBOARDING_DATA = [
  {
    id: '1',
    title: 'Track Local Issues',
    description: 'Report infrastructure damage, water leaks, and road hazards instantly. Your constituency needs your eyes on the ground.',
    icon: 'report-problem' as const,
    color: '#ffc880'
  },
  {
    id: '2',
    title: 'Civic Leaderboards',
    description: 'See which MLAs are actively resolving community issues. Hold leaders accountable through sheer transparency.',
    icon: 'leaderboard' as const,
    color: '#3ac2ff'
  },
  {
    id: '3',
    title: 'Vote on Polls',
    description: 'Participate in sovereign monthly polls to prioritize the most pressing issues in your neighborhood.',
    icon: 'how-to-vote' as const,
    color: '#bbc7df'
  }
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View className="flex-1 bg-surface-dim relative">
      <StatusBar style="light" />
      
      {/* Decorative Glow */}
      <View className="absolute top-[-5%] left-[-20%] w-[80%] h-[50%] bg-primary-container/10 blur-[100px] rounded-full" />

      <FlatList
        data={ONBOARDING_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        className="flex-1"
        renderItem={({ item }) => (
          <View style={{ width }} className="flex-1 items-center justify-center px-8">
            <View className="w-48 h-48 rounded-full items-center justify-center mb-12 shadow-2xl relative">
              <View className="absolute inset-0 bg-surface-container-high rounded-full opacity-50" />
              <MaterialIcons name={item.icon} size={100} color={item.color} />
            </View>
            <Text className="text-4xl font-extrabold text-on-surface text-center mb-4 tracking-tighter">
              {item.title}
            </Text>
            <Text className="text-on-surface-variant text-lg text-center font-normal leading-relaxed max-w-sm">
              {item.description}
            </Text>
          </View>
        )}
      />

      {/* Bottom Controls */}
      <View className="absolute bottom-12 w-full px-8 space-y-8">
        {/* Paginator */}
        <View className="flex-row justify-center space-x-3 mb-8">
          {ONBOARDING_DATA.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 32, 8],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i.toString()}
                style={{ width: dotWidth, opacity }}
                className="h-2 rounded-full bg-primary"
              />
            );
          })}
        </View>

        {/* Buttons */}
        <TouchableOpacity
          onPress={() => {
            if (currentIndex < ONBOARDING_DATA.length - 1) {
              slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
            } else {
              router.push('/(auth)/login');
            }
          }}
          className="w-full h-16 bg-primary-container rounded-lg items-center justify-center active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(245,166,35,0.2)]"
        >
          <Text className="text-on-primary font-bold text-lg tracking-tight">
            {currentIndex === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>

        {currentIndex < ONBOARDING_DATA.length - 1 && (
          <TouchableOpacity 
            onPress={() => router.push('/(auth)/login')}
            className="w-full items-center justify-center mt-4"
          >
            <Text className="text-primary font-semibold text-lg hover:underline opacity-80">Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
