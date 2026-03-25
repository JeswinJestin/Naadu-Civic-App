import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Colors, Typography, Spacing } from '../../themes/theme';

const CATEGORIES = ['Roads', 'Water', 'Sanitation', 'Health', 'Education', 'Hazards', 'Community', 'Other'];

export default function ReportScreen() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState(''); // mock geo data
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const pickImage = async () => {
    // Mock image selection
    if (photos.length >= 3) {
      Alert.alert('Limit Reached', 'You can only upload up to 3 photos.');
      return;
    }
    setPhotos([...photos, 'file://mock-path-to-image.jpg']);
  };

  const handleSubmit = () => {
    if (!title || !description || !category) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }
    setLoading(true);
    // Mock submit via Firebase Cloud Function
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Report submitted successfully. Reference: #ND7823');
      // Reset form
      setStep(1);
      setTitle('');
      setDescription('');
      setCategory('');
      setPhotos([]);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[Typography.title1, styles.headerText]}>Report an Issue</Text>
        <Text style={[Typography.bodySmall, { color: Colors.light.textSecondary }]}>
          Step {step} of 4
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {step === 1 && (
          <View style={styles.stepContainer}>
            <Text style={[Typography.title2, styles.stepTitle]}>1. Location & Category</Text>
            
            <Input 
              label="Location (GPS / Address)"
              placeholder="Detecting location..."
              value={location}
              onChangeText={setLocation}
              style={{ marginBottom: Spacing.xl }}
            />

            <Text style={[Typography.title2, styles.label]}>Select Category</Text>
            <View style={styles.chipContainer}>
              {CATEGORIES.map(cat => (
                <TouchableOpacity 
                  key={cat} 
                  style={[
                    styles.chip,
                    category === cat && styles.chipSelected
                  ]}
                  onPress={() => setCategory(cat)}
                >
                  <Text style={[
                    Typography.bodyRegular,
                    category === cat ? { color: Colors.light.background } : { color: Colors.light.textPrimary }
                  ]}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Button title="Next" variant="accent" onPress={handleNext} disabled={!category} style={styles.nextButton} />
          </View>
        )}

        {step === 2 && (
          <View style={styles.stepContainer}>
            <Text style={[Typography.title2, styles.stepTitle]}>2. Details</Text>
            
            <Input 
              label="Issue Title"
              placeholder="e.g. Broken water pipe leaking"
              value={title}
              onChangeText={setTitle}
              style={{ marginBottom: Spacing.m }}
            />

            <Input 
              label="Description"
              placeholder="Provide more context..."
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              style={{ marginBottom: Spacing.xl, height: 100 }}
            />

            <View style={styles.buttonRow}>
              <Button title="Back" variant="secondary" onPress={handleBack} style={styles.halfBtn} />
              <Button title="Next" variant="accent" onPress={handleNext} disabled={!title || !description} style={styles.halfBtn} />
            </View>
          </View>
        )}

        {step === 3 && (
          <View style={styles.stepContainer}>
            <Text style={[Typography.title2, styles.stepTitle]}>3. Evidence (Photos)</Text>
            <Text style={[Typography.bodySmall, { color: Colors.light.textSecondary, marginBottom: Spacing.m }]}>
              Attach up to 3 photos.
            </Text>

            <Button title="Add Photo" variant="secondary" onPress={pickImage} style={{ marginBottom: Spacing.l }} />

            <View style={styles.photoGrid}>
              {photos.map((uri, idx) => (
                <View key={idx} style={styles.photoPlaceholder}>
                  <Text style={Typography.bodySmall}>Photo {idx + 1}</Text>
                </View>
              ))}
            </View>

            <View style={styles.buttonRow}>
              <Button title="Back" variant="secondary" onPress={handleBack} style={styles.halfBtn} />
              <Button title="Next" variant="accent" onPress={handleNext} style={styles.halfBtn} />
            </View>
          </View>
        )}

        {step === 4 && (
          <View style={styles.stepContainer}>
            <Text style={[Typography.title2, styles.stepTitle]}>4. Review & Submit</Text>
            
            <View style={styles.reviewBox}>
              <Text style={Typography.labelLarge}>Category</Text>
              <Text style={[Typography.bodyRegular, { marginBottom: Spacing.s }]}>{category}</Text>
              
              <Text style={Typography.labelLarge}>Title</Text>
              <Text style={[Typography.bodyRegular, { marginBottom: Spacing.s }]}>{title}</Text>
              
              <Text style={Typography.labelLarge}>Photos</Text>
              <Text style={[Typography.bodyRegular, { marginBottom: Spacing.s }]}>{photos.length} attached</Text>
            </View>

            <View style={styles.buttonRow}>
              <Button title="Back" variant="secondary" onPress={handleBack} style={styles.halfBtn} />
              <Button title={loading ? "Submitting..." : "Submit Report"} variant="accent" onPress={handleSubmit} disabled={loading} style={styles.halfBtn} />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    padding: Spacing.l,
    paddingTop: Spacing.xxl, 
    backgroundColor: Colors.light.surfaceSecondary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.divider,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.light.textPrimary,
  },
  content: {
    padding: Spacing.m,
  },
  stepContainer: {
    flex: 1,
    paddingBottom: Spacing.xxl,
  },
  stepTitle: {
    marginBottom: Spacing.l,
    color: Colors.light.textPrimary,
  },
  label: {
    marginBottom: Spacing.s,
    color: Colors.light.textPrimary,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Spacing.xl,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.light.surfaceSecondary,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.light.divider,
  },
  chipSelected: {
    backgroundColor: Colors.light.action,
    borderColor: Colors.light.action,
  },
  nextButton: {
    marginTop: Spacing.m,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.xl,
  },
  halfBtn: {
    width: '48%',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: Colors.light.surfaceTertiary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.light.divider,
  },
  reviewBox: {
    backgroundColor: Colors.light.surfaceSecondary,
    padding: Spacing.m,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.divider,
  }
});
