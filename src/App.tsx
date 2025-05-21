import { useCallback } from "react";
import "./App.css";

import { initializeApp } from "firebase/app";
import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1j39BQLnzitpyAGGZ_eBuYjw544SSEA0",
  authDomain: "poc-id-magalu.firebaseapp.com",
  projectId: "poc-id-magalu",
  storageBucket: "poc-id-magalu.firebasestorage.app",
  messagingSenderId: "485878381236",
  appId: "1:485878381236:web:6ccf530e6f82c5460b75e1",
};

const app = initializeApp(firebaseConfig);
const idMagaluAuthProvider = new OAuthProvider("oidc.id-magalu-prod");

function App() {
  const onLoginWithPopUp = useCallback(async () => {
    const auth = getAuth(app);
    try {
      const result = await signInWithPopup(auth, idMagaluAuthProvider);
      console.log("Result: ", result);
      const credential = OAuthProvider.credentialFromResult(result);
      console.log("Credential: ", credential);
    } catch (error) {
      console.error("Error signing in with popup:", error);
    }
  }, []);

  return (
    <>
      <h1>POC ID Magalu + Firebase</h1>
      <div className="card">
        <button onClick={onLoginWithPopUp}>Login with PopUp</button>
      </div>
    </>
  );
}

export default App;
