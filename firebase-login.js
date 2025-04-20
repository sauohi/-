import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5BB2041A0d_ZfJ5orvYTOO_k2_vLmwS0",
  authDomain: "nouu-ca003.firebaseapp.com",
  projectId: "nouu-ca003",
  storageBucket: "nouu-ca003.appspot.com",
  messagingSenderId: "122049006410",
  appId: "1:122049006410:web:0ec9a1ed79772a8ca9cfb3",
  measurementId: "G-R6CNHFR3QX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById('google-signin-btn').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      window.location.href = "welcome.html";
    })
    .catch((error) => {
      console.error(error);
      alert("حدث خطأ أثناء تسجيل الدخول:\n" + error.code + "\n" + error.message);

    });
});
