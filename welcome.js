import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
const auth = getAuth(app);

document.getElementById('logout-btn').addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = "index.html"; // رجوع لصفحة تسجيل الدخول
  }).catch((error) => {
    alert("حدث خطأ أثناء تسجيل الخروج:\n" + error.message);
  });
});
