import React, { useState, useRef, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBKmKVBkGaKjf-4-5vN2gZd2msZuoe4hq4",
  authDomain: "learn-react-c0991.firebaseapp.com",
  databaseURL: "https://learn-react-c0991.firebaseio.com",
  projectId: "learn-react-c0991",
  storageBucket: "learn-react-c0991.appspot.com",
  messagingSenderId: "171496629159",
  appId: "1:171496629159:web:680503b9188657a38b4c82",
  measurementId: "G-DR5BCVYWLE",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export function Login() {
  // let user = null;
  const [user] = useAuthState(auth);

  return (
    <div className="container-fluid bg-dark">
      <div className="row welcome text-white text-center">
        <div className="col-12">
          <h1 className="display-4">Welcome to my site</h1>
        </div>
        <hr></hr>
        <div className="col-12">
          <p className="lead"> Hello this is my BS4 site</p>
        </div>
        <hr></hr>
      </div>
      <div>
        {user ? (
          <div className="row Chat-Int">
            <div className="container-fluid col-12">
              <ChatRoom />
            </div>
          </div>
        ) : (
          <div className="row ">
            <div className="container-fluid center col-12">
              <SignIn className="sign-in" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider(); // firebase.auth and auth are different
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, null);

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  //setups the setFromValue
  const [formValue, setFormValue] = useState("");

  //
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <SignOut />
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}
