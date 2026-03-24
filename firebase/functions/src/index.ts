import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize the Admin SDK
// admin.initializeApp();
// const db = admin.firestore();

// Note: For V1, the Firebase Admin initializeApp requires credentials which are omitted here.
// These functions correspond to the "Write Cloud Function for 500m proximity check"
// and "Write Cloud Function for issue creation and validation" from the PRD.

export const checkProximityIssues = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be logged in.');
  }

  const { latitude, longitude } = data;
  if (!latitude || !longitude) {
    throw new functions.https.HttpsError('invalid-argument', 'Missing coordinates.');
  }

  // A complete Geo-query Implementation would use GeoFire.
  // We mock the response for the frontend UI prototype completion.
  return { 
    nearbyIssues: [
      {
        id: 'mock-1',
        title: 'Pothole at Junction',
        category: 'Roads',
        status: 'unverified'
      }
    ]
  };
});

export const createIssue = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be logged in.');
  }

  const { title, description, category, location, photos, constituencyId } = data;
  
  if (!title || !description || !category || !location || !constituencyId) {
    throw new functions.https.HttpsError('invalid-argument', 'Missing required fields.');
  }

  // In a full environment, we would insert into the issues collection.
  // const newIssue = {
  //   reporterId: context.auth.uid, // Has to be SHA-256 hashed according to PRD
  //   title,
  //   description,
  //   category,
  //   location: new admin.firestore.GeoPoint(location.latitude, location.longitude),
  //   photos: photos || [],
  //   status: 'unverified',
  //   upvoteCount: 0,
  //   constituencyId,
  //   createdAt: admin.firestore.FieldValue.serverTimestamp(),
  //   timeline: [{ status: 'unverified', timestamp: new Date().toISOString() }]
  // };

  // const docRef = await db.collection('issues').add(newIssue);
  
  return { success: true, issueId: 'mock-issue-id-123' };
});

export const updateIssueStatusOnEvidence = functions.firestore
  .document('issues/{issueId}/comments/{commentId}')
  .onCreate(async (snap, context) => {
    // Basic logic to handle status progression:
    // If corroborating evidence hits threshold -> change Unverified to Verified
    // For V1 simulation, assume any comment triggers verification.
    const issueId = context.params.issueId;
    console.log(`Evaluating status for issue ${issueId} after new evidence.`);
    
    // const issueRef = db.collection('issues').doc(issueId);
    // await issueRef.update({ status: 'verified' });
});

export const moderateComment = functions.firestore
  .document('issues/{issueId}/comments/{commentId}')
  .onCreate(async (snap, context) => {
    const commentData = snap.data();
    const text = commentData?.text || "";
    
    // In actual implementation: use @google-cloud/language client
    // const client = new language.LanguageServiceClient();
    // const [result] = await client.analyzeSentiment({ document: { content: text, type: 'PLAIN_TEXT' }});
    
    const HATE_SPEECH_KEYWORDS = ['hateword1', 'hateword2']; // Mock list
    const containsHateSpeech = HATE_SPEECH_KEYWORDS.some(keyword => text.toLowerCase().includes(keyword));
    
    if (containsHateSpeech) {
      console.log(`Flagging comment ${context.params.commentId} for hate speech.`);
      // await snap.ref.update({
      //   isModerated: true,
      //   moderationReason: 'Automated Hate Speech Flag'
      // });
      // In full flow: Add warning to user document
    }
});

export const requestMLAResolution = functions.https.onCall(async (data, context) => {
  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'User must be logged in.');
  
  const { issueId, explanation, afterPhotoUrl } = data;
  
  // Verify MLA account
  // const userDoc = await db.collection('users').doc(context.auth.uid).get();
  // if (userDoc.data()?.accountType !== 'mla_verified') throw new functions.https.HttpsError('permission-denied', 'Only MLA accounts can resolve issues.');
  
  // const issueRef = db.collection('issues').doc(issueId);
  // await issueRef.update({
  //   status: 'pending_confirmation',
  //   mlaResolution: { explanation, afterPhotoUrl }
  // });
  
  return { success: true };
});

export const createMonthlyPolls = functions.pubsub.schedule('1 of month 00:00').onRun(async (context) => {
  // const constituenciesSnapshot = await db.collection('constituencies').get();
  // const batch = db.batch();
  //
  // constituenciesSnapshot.forEach(doc => {
  //   const pollRef = db.collection('satisfactionPolls').doc();
  //   batch.set(pollRef, {
  //     constituencyId: doc.id,
  //     month: new Date().toISOString().substring(0, 7), // YYYY-MM
  //     homeResidentScore: 0,
  //     externalResidentScore: 0,
  //     homeResidentCount: 0,
  //     externalResidentCount: 0,
  //     feedbackSummary: []
  //   });
  // });
  //
  // await batch.commit();
  console.log('Monthly polls created for all constituencies.');
  return null;
});

