import { useState } from "react";
import "./Passord.css";

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
      setError("Uh oh, prøv igjen");
      setInput("");
    }
  }

  if (unlocked) return children;

  return (
    <div className="gate">
      <form onSubmit={handleSubmit} className="gate-form">
        <label htmlFor="gate-password" className="gate-label">
          Passord
        </label>
        <input
          id="gate-password"
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          autoFocus
          className="gate-input"
        />
        <button type="submit" className="gate-button">
          Send
        </button>
        <p className="gate-error" role="alert">
          {error}
        </p>
      </form>
    </div>
  );
}
