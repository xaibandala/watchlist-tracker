// firebase-messaging-init.js
const firebaseConfig = {
  apiKey: "AIzaSyD_6icpMFNFUNI1YUZmJumkAPmQFnI-CaA",
  authDomain: "watchlist-tracker-f16a1.firebaseapp.com",
  projectId: "watchlist-tracker-f16a1",
  storageBucket: "watchlist-tracker-f16a1.firebasestorage.app",
  messagingSenderId: "838399153011",
  appId: "1:838399153011:web:bd65f561ccbd8d9ff6ab06"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.requestPermission()
.then(() => messaging.getToken())
.then((token) => {
  console.log("Token received:", token);
})
.catch((err) => {
  console.error("Permission denied", err);
});
