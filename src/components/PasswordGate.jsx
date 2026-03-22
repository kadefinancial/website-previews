import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "2026";

export default function PasswordGate({ siteName, children }) {
  const storageKey = `preview-auth-${siteName}`;
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(storageKey) === "true") {
      setAuthorized(true);
    }
  }, [storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(storageKey, "true");
      setAuthorized(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (authorized) return children;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h1 style={styles.title}>{formatName(siteName)}</h1>
        <p style={styles.subtitle}>Enter password to view this preview</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            style={{
              ...styles.input,
              borderColor: error ? "#e53e3e" : "#d1d5db",
            }}
          />
          {error && <p style={styles.error}>Incorrect password</p>}
          <button type="submit" style={styles.button}>
            View Site
          </button>
        </form>
      </div>
    </div>
  );
}

function formatName(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const styles = {
  overlay: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fafb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "48px 40px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.04)",
    textAlign: "center",
    maxWidth: "380px",
    width: "100%",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827",
  },
  subtitle: {
    margin: "0 0 28px",
    fontSize: "14px",
    color: "#6b7280",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px 16px",
    fontSize: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.15s",
    textAlign: "center",
    letterSpacing: "4px",
  },
  error: {
    margin: 0,
    fontSize: "13px",
    color: "#e53e3e",
  },
  button: {
    padding: "12px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#fff",
    background: "#111827",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.15s",
  },
};
