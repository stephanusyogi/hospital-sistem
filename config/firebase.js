const fb = require("firebase/app")

const connectFirebase = async () => {
  try {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    };
    const conn = await fb.initializeApp(firebaseConfig);
    console.log(`Firebase Connected Domain: ${conn._options.authDomain}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectFirebase;