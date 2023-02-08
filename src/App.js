import { useAuth } from "./hooks/useAuth.js";

function App() {
  const { user, signout, signInWithGoogle } = useAuth();
  return (
    <div>
      {user ? (
        <button onClick={signout}>Sign out</button>
      ) : (
        <>
          <button onClick={signInWithGoogle}>Login with Google</button>
        </>
      )}
    </div>
  );
}

export default App;
