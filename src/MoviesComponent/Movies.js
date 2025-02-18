import React, { useState, useEffect } from "react";

const MovieCard = ({
  title,
  releaseYear,
  duration,
  genre,
  description,
  imageUrl,
  director,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        ...styles.card,
        flexDirection: isSmallScreen ? "column" : "row",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered
          ? "0 15px 30px rgba(0, 0, 0, 0.6)"
          : styles.card.boxShadow,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          ...styles.backgroundImage,
          filter: isHovered ? "brightness(1.2)" : "brightness(1)",
          width: isSmallScreen ? "100%" : "65%",
          height: isSmallScreen ? "500px" : "350px",
        }}
      />
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h2
            style={{
              ...styles.title,
              textShadow: isHovered
                ? "0 0 10px rgba(255, 255, 255, 0.8)"
                : "none",
              fontSize: isSmallScreen ? "26px" : "32px",
            }}
          >
            {title}
          </h2>
          <p style={styles.year}>
            {releaseYear},{" "}
            <span
              style={{
                ...styles.director,
                textShadow: isHovered
                  ? "0 0 10px rgba(30, 144, 255, 0.8)"
                  : "none",
              }}
            >
              {director}
            </span>
          </p>
          <p style={styles.details}>
            {duration} min | {genre.join(", ")}
          </p>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    width: "85%",
    margin: "30px auto",
    backgroundColor: "#181818",
    color: "#fff",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  backgroundImage: {
    objectFit: "contain",
    marginLeft: "50%",
    transition: "filter 0.3s ease-in-out",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent)",
    zIndex: 1,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translateY(-50%)",
    zIndex: 2,
  },
  textContainer: {
    maxWidth: "50%",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    transition: "text-shadow 0.3s ease-in-out",
  },
  year: {
    fontSize: "18px",
    color: "#bbb",
  },
  director: {
    color: "#1e90ff",
    transition: "text-shadow 0.3s ease-in-out",
  },
  details: {
    fontSize: "18px",
    color: "#ccc",
  },
  description: {
    fontSize: "18px",
    marginTop: "12px",
    color: "#ddd",
  },
};

export default MovieCard;
