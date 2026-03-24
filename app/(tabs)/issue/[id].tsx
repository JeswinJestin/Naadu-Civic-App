import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Typography, Spacing } from '../../../constants/theme';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Ionicons } from '@expo/vector-icons';

// Mock data
const MOCK_ISSUE = {
  id: 'ND7823',
  title: 'Road Pothole Near Lake',
  category: 'Roads & Infrastructure',
  location: 'Palace Junction, Ernakulam',
  status: 'Unverified',
  time: '2 days ago',
  description: 'This pothole has been worsening over the past few weeks. It is causing major traffic blockages and is dangerous for two-wheelers at night.',
  upvotes: 42,
  comments: [
    { id: '1', author: 'BlueLotus42', time: '12 hours ago', text: 'I saw this too, very bad condition.', upvotes: 24 },
  ]
};

export default function IssueDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [issue] = useState(MOCK_ISSUE);
  const [newComment, setNewComment] = useState('');
  
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'unverified': return Colors.light.error;
      case 'verified': return Colors.light.success;
      case 'in progress': return Colors.light.action;
      case 'resolved': return Colors.light.success;
      case 'disputed': return Colors.light.warning;
      default: return Colors.light.textTertiary;
    }
  };

  const StatusBadge = ({ status }: { status: string }) => (
    <View style={[styles.badge, { backgroundColor: getStatusColor(status) }]}>
      <Text style={[Typography.labelSmall, { color: Colors.light.background }]}>{status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.light.textPrimary} />
        </TouchableOpacity>
        <Text style={[Typography.title2, styles.headerTitle]}>Issue #{id}</Text>
        <TouchableOpacity onPress={() => Alert.alert('Flagged', 'Report flagged for review.')}>
          <Ionicons name="flag-outline" size={20} color={Colors.light.error} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleRow}>
          <Text style={[Typography.headline, styles.issueTitle]}>{issue.title}</Text>
          <StatusBadge status={issue.status} />
        </View>
        <Text style={[Typography.bodySmall, styles.locationText]}>{issue.location}</Text>

        <View style={styles.metaBox}>
          <Text style={Typography.labelLarge}>Category: <Text style={Typography.bodyRegular}>{issue.category}</Text></Text>
          <Text style={Typography.labelLarge}>Reported: <Text style={Typography.bodyRegular}>{issue.time}</Text></Text>
        </View>

        <Text style={[Typography.bodyLarge, styles.description]}>{issue.description}</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Upvoted!')}>
            <Ionicons name="thumbs-up-outline" size={20} color={Colors.light.textPrimary} />
            <Text style={[Typography.labelLarge, styles.actionText]}>{issue.upvotes} Upvotes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Shared!')}>
            <Ionicons name="share-outline" size={20} color={Colors.light.textPrimary} />
            <Text style={[Typography.labelLarge, styles.actionText]}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <Text style={[Typography.title2, styles.sectionTitle]}>Evidence & Discussion</Text>
        
        {/* Comment List */}
        {issue.comments.map(comment => (
          <View key={comment.id} style={styles.commentCard}>
            <View style={styles.commentHeader}>
              <Text style={Typography.labelLarge}>{comment.author}</Text>
              <Text style={[Typography.bodySmall, { color: Colors.light.textSecondary }]}>{comment.time}</Text>
            </View>
            <Text style={[Typography.bodyRegular, { marginVertical: Spacing.s }]}>{comment.text}</Text>
            <TouchableOpacity style={styles.commentUpvote}>
              <Ionicons name="arrow-up" size={16} color={Colors.light.textSecondary} />
              <Text style={[Typography.labelSmall, { color: Colors.light.textSecondary, marginLeft: 4 }]}>{comment.upvotes}</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Add Comment */}
        <View style={styles.addCommentBox}>
          <Input 
            placeholder="Add corroborating evidence or context..."
            value={newComment}
            onChangeText={setNewComment}
            multiline
            style={{ marginBottom: Spacing.s }}
          />
          <View style={styles.commentActions}>
            <TouchableOpacity style={styles.addPhotoBtn}>
              <Ionicons name="camera-outline" size={20} color={Colors.light.textSecondary} />
            </TouchableOpacity>
            <Button 
              title="Post" 
              variant="accent" 
              onPress={() => {
                setNewComment('');
                Alert.alert('Posted', 'Comment added for verification.');
              }} 
              disabled={!newComment}
              style={{ width: 100, height: 40 }}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.m,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.divider,
    backgroundColor: Colors.light.surfaceSecondary,
  },
  backButton: { padding: Spacing.xs },
  headerTitle: { color: Colors.light.textPrimary },
  scrollContent: { padding: Spacing.m },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.xs,
  },
  issueTitle: { color: Colors.light.textPrimary, flex: 1, marginRight: Spacing.m },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  locationText: { color: Colors.light.textSecondary, marginBottom: Spacing.l },
  metaBox: {
    backgroundColor: Colors.light.surfaceSecondary,
    padding: Spacing.m,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.divider,
    marginBottom: Spacing.l,
    gap: Spacing.xs,
  },
  description: { color: Colors.light.textPrimary, marginBottom: Spacing.l, lineHeight: 24 },
  actionRow: { flexDirection: 'row', gap: Spacing.m, marginBottom: Spacing.l },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceTertiary,
    paddingHorizontal: Spacing.m,
    paddingVertical: Spacing.s,
    borderRadius: 20,
    gap: Spacing.xs,
  },
  actionText: { color: Colors.light.textPrimary },
  divider: { height: 1, backgroundColor: Colors.light.divider, marginVertical: Spacing.l },
  sectionTitle: { color: Colors.light.textPrimary, marginBottom: Spacing.m },
  commentCard: {
    backgroundColor: Colors.light.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.light.divider,
    borderRadius: 8,
    padding: Spacing.m,
    marginBottom: Spacing.m,
  },
  commentHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  commentUpvote: { flexDirection: 'row', alignItems: 'center' },
  addCommentBox: { marginTop: Spacing.m },
  commentActions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  addPhotoBtn: { padding: Spacing.s, backgroundColor: Colors.light.surfaceSecondary, borderRadius: 8 }
});
