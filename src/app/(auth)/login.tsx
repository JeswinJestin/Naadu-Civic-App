import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  return (
    <View className="flex-1 bg-surface-dim">
      <View className="flex-row items-center px-6 h-16 bg-surface-dim">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <MaterialIcons name="arrow-back" size={24} color="#f5a623" />
        </TouchableOpacity>
        <Text className="font-bold text-white text-lg ml-2">Verification</Text>
      </View>
      <View className="flex-1 px-8 pt-12">
        <View className="mb-12">
          <Text className="text-4xl font-bold text-on-surface mb-4">Enter your{'\n'}mobile number</Text>
          <Text className="text-on-surface-variant text-lg opacity-80">
            We'll send a 6-digit code to verify your identity.
          </Text>
        </View>
        <View className="flex-row items-end border-b border-outline-variant pb-2 mb-8">
          <View className="flex-row items-center px-3 py-2 bg-surface-container-low rounded-lg mr-4">
            <Text className="text-primary font-bold">+91</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} color="#adb9d1" />
          </View>
          <View className="flex-1 relative">
            <Text className="absolute -top-6 left-0 text-[10px] uppercase text-primary tracking-widest">Phone Number</Text>
            <TextInput 
              className="text-white text-2xl tracking-widest p-0 m-0"
              placeholder="99999 99999"
              placeholderTextColor="#31353c"
              keyboardType="phone-pad"
              maxLength={10}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </View>
        
        <View className="flex-1 items-center justify-center mb-8">
            <View className="w-full aspect-[21/9] rounded-xl overflow-hidden bg-surface-container-low items-center justify-center relative">
                <MaterialIcons name="security" size={48} color="#f5a623" style={{opacity: 0.3}} />
                <View className="absolute bottom-4 left-6 flex-row items-center">
                    <View className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    <Text className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Secure Transmission</Text>
                </View>
            </View>
        </View>

        <View className="mt-auto pb-8">
          <TouchableOpacity 
            onPress={() => router.push('/(auth)/verify' as never)}
            className="w-full h-14 bg-primary-container rounded-xl items-center justify-center flex-row shadow-lg shadow-primary-container/20"
          >
            <Text className="text-on-primary font-bold text-lg mr-2">Send OTP</Text>
            <MaterialIcons name="arrow-forward" size={20} color="#452b00" />
          </TouchableOpacity>

          <View className="flex-row items-center justify-center w-full my-6">
            <View className="flex-1 h-[1px] bg-outline-variant/30" />
            <Text className="mx-4 text-on-surface-variant text-sm font-semibold">Or continue with</Text>
            <View className="flex-1 h-[1px] bg-outline-variant/30" />
          </View>

          <TouchableOpacity 
            onPress={() => router.push('/(tabs)/explore' as never)}
            className="w-full h-14 bg-surface-container-highest border border-outline-variant/50 rounded-xl items-center justify-center flex-row active:bg-surface-bright transition-colors"
          >
            <MaterialIcons name="account-circle" size={24} color="#f5a623" />
            <Text className="text-on-surface font-semibold text-lg ml-3">Continue with Google</Text>
          </TouchableOpacity>

          <Text className="text-[10px] text-on-surface-variant/60 tracking-tighter uppercase text-center mt-6">
            By continuing, you agree to the Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
}
