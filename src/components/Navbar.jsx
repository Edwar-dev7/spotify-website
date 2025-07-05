import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>
          Spotify Website
        </Link>
      </div>

      <div style={styles.center}>
        <Link to="/" style={styles.homeBtn}>
          <AiFillHome size={18} />
          <span>Home</span>
        </Link>

        <input
          type="text"
          placeholder="Buscar..."
          style={styles.search}
        />
      </div>

      <div style={styles.right}>
        <Link to="/auth" style={styles.link}>Registrarse</Link>
        <Link to="/auth" style={styles.link}>Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#000",
    color: "#fff",
    padding: "1rem 2rem",
    gap: "1rem",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  left: {
    flex: "1 1 100px",
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#1DB954",
    textDecoration: "none",
  },
  center: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flex: "2 1 400px",
    justifyContent: "center",
  },
  homeBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  },
  search: {
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    backgroundColor: "#282828",
    border: "none",
    color: "#fff",
    width: "100%",
    maxWidth: "200px",
  },
  right: {
    flex: "1 1 120px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "1rem",
  },
  link: {
    color: "#fff",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "0.95rem",
  },
};
