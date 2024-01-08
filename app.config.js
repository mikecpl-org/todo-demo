import 'dotenv/config';

// TODO teszt todo1
// TODO teszt todo3
// TODO teszt todo4
// TODO teszt todo5
// TODO teszt todo8
// TODO teszt todo10
// TODO teszt todo12
// TODO teszt todo12
// TODO teszt todo12
// TODO teszt todo13
// TODO teszt todo14
// TODO teszt todo15
// TODO teszt todo16
// TODO teszt todo17

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
