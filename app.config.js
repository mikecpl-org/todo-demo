import 'dotenv/config';

// TODO teszt todo2
// TODO teszt todo12
// TODO teszt todo12
// TODO teszt todo12
// TODO teszt todo13
// TODO teszt todo15
// TODO teszt todo16
// TODO teszt todo17
// TODO teszt todo18
// TODO teszt todo19
// TODO teszt todo20

export default ({ config }) => {
  return {
    extra: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKER,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        googleClientId: process.env.FIREBASE_GOOGLE_CLIENT_ID
      }
    },
    ...config
  }
};
