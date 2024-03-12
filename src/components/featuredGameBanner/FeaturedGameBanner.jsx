const FeaturedGameBanner = () => {
  const buttonStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    width: "101px",
    borderRadius: "5px",
    fontSize: "13px",
    fontWeight: "600",
    fontFamily: "Inter",
  };

  return (
    <div
      style={{
        height: "67.2%",
        width: "70.12%",
        backgroundColor: "rgba(0,0,0,0.4)",
        top: "5%",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "76.81%",
          top: "9.28%",
          width: "19.652%",
          height: "28.71%",
          backgroundColor: "rgba(113,125,135,0.62)",
          borderRadius: "5px",
        }}
      >
        <p
          style={{
            paddingTop: "24.6%",
            display: "flex",
            justifyContent: "right",
            paddingRight: "15%",
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: 22,
            color: "#D9D9D9",
          }}
        >
          TO REGISTER:
        </p>
        <p
          style={{
            paddingTop: "5%",
            display: "flex",
            justifyContent: "right",
            paddingRight: "15%",
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: 29,
            color: "#D9D9D9",
          }}
        >
          SMS GAME TO
        </p>
        <p
          style={{
            paddingTop: "5%",
            display: "flex",
            justifyContent: "right",
            paddingRight: "15%",
            fontFamily: "Inter",
            fontWeight: "900",
            fontSize: 45,
            color: "#D9D9D9",
          }}
        >
          20719
        </p>
      </div>
      <div
        style={{
          top: "28%",
          position: "absolute",
          display: "flex",
          justifyContent: "left",
          fontSize: "34px",
          fontFamily: "Inter",
          fontWeight: "100",
          width: "fit-content",
          paddingLeft: "11.5%",
          color: "#D9D9D9",
        }}
      >
        14:00
      </div>
      <div
        style={{
          top: "32%",
          position: "absolute",
          display: "flex",
          justifyContent: "left",
          fontSize: "13px",
          fontFamily: "Inter",
          fontWeight: "600",
          width: "fit-content",
          paddingLeft: "13%",
          color: "#E5C6BB",
        }}
      >
        Today
      </div>
      <div
        style={{
          top: "35%",
          position: "absolute",
          display: "flex",
          justifyContent: "left",
          fontSize: "13px",
          fontFamily: "Inter",
          fontWeight: "600",
          paddingLeft: "20%",
          width: "fit-content",
          color: "#E5C6BB",
        }}
      >
        Bundesliga
      </div>
      <div
        style={{
          top: "40%",
          paddingLeft: "10%",
          position: "absolute",
          display: "flex",
          justifyContent: "left",
          fontSize: "40px",
          fontFamily: "Inter",
          fontWeight: "200",
          width: "fit-content",
          color: "#D9D9D9",
        }}
      >
        Real Madrid
      </div>
      <div
        style={{
          top: "45%",
          paddingLeft: "10%",
          position: "absolute",
          display: "flex",
          justifyContent: "left",
          fontSize: "40px",
          fontFamily: "Inter",
          fontWeight: "400",
          width: "fit-content",
          color: "#D9D9D9",
        }}
      >
        Manchester United
      </div>
      <div
        style={{
          top: "85%",
          position: "relative",
          display: "flex",
          justifyContent: "space-evenly",
          paddingLeft: "0%",

          width: "100%",
        }}
      >
        <a
          href="#"
          style={{ fontSize: 13, fontWeight: 600, fontFamily: "Inter" }}
        >
          All games
        </a>
        <a
          href="#"
          style={{
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#E5C6BB",
          }}
        >
          Live Match
        </a>
        <a
          href="#"
          style={{
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "Inter",
            color: "#E5C6BB",
          }}
        >
          Statistics
        </a>
      </div>
      <div
        style={{
          top: "88%",
          position: "relative",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button style={buttonStyle}>1x 4.56</button>
        <button style={buttonStyle}>x 3.24</button>
        <button style={buttonStyle}>2x 5.78</button>
      </div>
    </div>
  );
};

export default FeaturedGameBanner;
