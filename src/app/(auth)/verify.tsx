import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useRef } from 'react';

export default function VerifyScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleVerify = () => {
    // Mock login success - moving to Profile Setup
    router.replace('/(auth)/setup' as never);
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text.length === 1 && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <View className="flex-1 bg-surface-dim">
      <View className="flex-row items-center px-6 h-16 bg-surface-dim">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <MaterialIcons name="arrow-back" size={24} color="#f5a623" />
        </TouchableOpacity>
        <Text className="font-bold text-white text-lg ml-2">Verification</Text>
      </View>

      <View className="flex-1 px-6 justify-center pb-20">
        <View className="mb-16">
          <Text className="text-4xl font-bold text-white mb-4">Verify your number</Text>
          <Text className="text-on-surface-variant text-lg">
            6-digit code sent to <Text className="text-primary font-bold">+91 XXXXX XXXXX</Text>
          </Text>
        </View>

        <View className="flex-row justify-between mb-12">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => { inputs.current[index] = ref; }}
              className="w-12 h-14 bg-surface-container-low text-white text-2xl text-center rounded-xl border-b-2 outline-none"
              style={{ borderColor: digit ? '#f5a623' : 'transparent' }}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>

        <View className="items-center mb-8 gap-2">
          <View className="flex-row items-center gap-2">
            <Text className="text-on-surface-variant">Didn't receive the code?</Text>
            <TouchableOpacity>
                <Text className="text-primary-container font-bold">Resend OTP</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mt-2">
            <MaterialIcons name="timer" size={14} color="#f5a623" />
            <Text className="text-[11px] uppercase tracking-widest text-primary-container font-mono">00:30s</Text>
          </View>
        </View>

        <TouchableOpacity 
          onPress={handleVerify}
          className="w-full h-14 bg-primary rounded-xl items-center justify-center flex-row shadow-lg shadow-primary-container/20"
        >
          <Text className="text-on-primary font-bold text-lg mr-2">Verify</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#452b00" />
        </TouchableOpacity>
      </View>
      <View className="mt-20 items-center justify-end absolute bottom-10 w-full opacity-40">
        <Text className="text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface-variant">Sovereign Civic Verification System v2.4</Text>
      </View>
    </View>
  );
}
