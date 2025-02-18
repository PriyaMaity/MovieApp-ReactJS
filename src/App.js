import "./App.css";
import MoviesList from "./MoviesComponent/MoviesList";

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.header}>Movie List</h1>
      <MoviesList />
    </div>
  );
}
const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#1a1a1a",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#f5c518",
  },
  "@media (max-width: 768px)": {
    app: {
      padding: "10px",
    },
    header: {
      fontSize: "24px",
    },
  },
};

export default App;
