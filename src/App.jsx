import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Auto-discover all site files in src/sites/
const siteModules = import.meta.glob("./sites/*.jsx", { eager: true });

const sites = Object.entries(siteModules).map(([path, module]) => {
  const filename = path.replace("./sites/", "").replace(".jsx", "");
  return {
    slug: filename,
    name: filename.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    Component: module.default,
  };
});

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Website Previews</h1>
        <p style={styles.count}>
          {sites.length} {sites.length === 1 ? "site" : "sites"} available
        </p>
        {sites.length === 0 ? (
          <p style={styles.empty}>
            No preview sites yet. Add a JSX file to <code>src/sites/</code> to
            get started.
          </p>
        ) : (
          <ul style={styles.list}>
            {sites.map((site) => (
              <li key={site.slug} style={styles.listItem}>
                <Link to={`/${site.slug}`} style={styles.link}>
                  {site.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {sites.map((site) => (
          <Route
            key={site.slug}
            path={`/${site.slug}`}
            element={<site.Component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fafb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    background: "#fff",
    borderRadius: "12px",
    padding: "48px 40px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.04)",
    maxWidth: "480px",
    width: "100%",
  },
  heading: {
    margin: "0 0 4px",
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827",
  },
  count: {
    margin: "0 0 24px",
    fontSize: "14px",
    color: "#6b7280",
  },
  empty: {
    fontSize: "14px",
    color: "#9ca3af",
    lineHeight: 1.6,
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  listItem: {
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    transition: "border-color 0.15s",
  },
  link: {
    display: "block",
    padding: "14px 18px",
    textDecoration: "none",
    color: "#111827",
    fontWeight: 500,
    fontSize: "15px",
  },
};
