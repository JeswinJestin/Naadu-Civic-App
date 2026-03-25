import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Alert, ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Colors, Typography, Spacing } from '../../themes/theme';
import { Ionicons } from '@expo/vector-icons';

export default function PollScreen() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert('Incomplete', 'Please select a star rating.');
      return;
    }
    if (feedback.length < 20) {
      Alert.alert('Incomplete', 'Please provide at least 20 characters of feedback.');
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Thank You', 'Your satisfaction poll has been recorded securely and anonymously.');
      setRating(0);
      setFeedback('');
    }, 1500);
  };

  const handleDownloadReport = () => {
    Alert.alert('Download Started', 'Generating PDF report for Ernakulam constituency...');
    // Implemented client-side with jsPDF in full web/native build
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <Text style={[Typography.title1, styles.headerText]}>Constituency Poll</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={[Typography.title2, styles.cardTitle]}>Monthly Satisfaction</Text>
          <Text style={[Typography.bodyRegular, styles.cardSubtitle]}>
            How satisfied are you with your MLA's governance this month?
          </Text>

          <View style={styles.starRow}>
            {[1, 2, 3, 4, 5].map(star => (
              <Ionicons 
                key={star} 
                name={star <= rating ? "star" : "star-outline"} 
                size={40} 
                color={star <= rating ? Colors.light.action : Colors.light.divider} 
                onPress={() => setRating(star)}
              />
            ))}
          </View>

          <Input 
            label="Feedback (What's going well? What needs improvement?)"
            placeholder="Type your feedback here... (min. 20 chars)"
            value={feedback}
            onChangeText={setFeedback}
            multiline
            numberOfLines={4}
            style={{ marginBottom: Spacing.xl, height: 100 }}
          />

          <Button 
            title={loading ? "Submitting..." : "Submit Poll"} 
            variant="accent" 
            onPress={handleSubmit} 
            disabled={loading} 
          />
        </View>

        <View style={styles.card}>
          <Text style={[Typography.title2, styles.cardTitle]}>Leaderboard & Analytics</Text>
          <View style={styles.statRow}>
            <View style={styles.statBox}>
              <Text style={Typography.labelLarge}>Approval</Text>
              <Text style={[Typography.display2, { color: Colors.light.success }]}>68%</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={Typography.labelLarge}>Resolved Issues</Text>
              <Text style={[Typography.display2, { color: Colors.light.action }]}>412</Text>
            </View>
          </View>

          <Button 
            title="Download PDF Report" 
            variant="secondary" 
            onPress={handleDownloadReport} 
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: {
    padding: Spacing.m,
    paddingTop: Spacing.xxl,
    backgroundColor: Colors.light.surfaceSecondary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.divider,
  },
  headerText: { color: Colors.light.textPrimary },
  content: { padding: Spacing.m },
  card: {
    backgroundColor: Colors.light.surfaceSecondary,
    borderRadius: 12,
    padding: Spacing.l,
    marginBottom: Spacing.m,
    borderWidth: 1,
    borderColor: Colors.light.divider,
  },
  cardTitle: { color: Colors.light.textPrimary, marginBottom: Spacing.xs },
  cardSubtitle: { color: Colors.light.textSecondary, marginBottom: Spacing.l },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.m,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.l,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    padding: Spacing.m,
    borderRadius: 8,
    marginHorizontal: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.light.divider,
  }
});
