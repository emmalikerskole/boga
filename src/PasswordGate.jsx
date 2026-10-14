import { useState } from "react";

// SHA-256 hash of your password (not the password itself).
// Generate one with:
//   node -e "console.log(require('crypto').createHash('sha256').update('YOUR_PASSWORD').digest('hex'))"
// Then put it in a .env file at the project root:
//   VITE_PASSWORD_HASH=paste_the_hash_here
const PASSWORD_HASH = import.meta.env.VITE_PASSWORD_HASH;

const STORAGE_KEY = "site-unlocked";

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "true"
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const hash = await sha256(input);
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError("Incorrect password");
      setInput("");
    }
  }

  if (unlocked) return children;

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ margin: 0 }}>Enter password</h2>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          autoFocus
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Enter
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "260px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    background: "#222",
    color: "#fff",
    cursor: "pointer",
  },
  error: { color: "crimson", margin: 0, fontSize: "14px" },
};
