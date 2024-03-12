const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#283847",
        height: "20%",
        width: "100%",
      }}
    >
      <img
        src="./arsenal.svg"
        style={{
          marginLeft: "23.61%",
          marginTop: "0%",
          height: "90%",
          width: "25.07%",
        }}
      />
      <div
        style={{
          fontFamily: "Inter",
          fontSize: 22,
          fontWeight: 400,
          color: "#D9D9D9",
          left: "43.4%",
          top: "91.21%",
          position: "absolute",
        }}
      >
        This Week's
      </div>
      <div
        style={{
          fontFamily: "Inter",
          fontSize: 29,
          fontWeight: 700,
          color: "#D9D9D9",
          left: "42.78%",
          top: "93.85%",
          position: "absolute",
        }}
      >
        JACKPOT
      </div>
      <div
        style={{
          fontFamily: "Inter",
          fontSize: 50,
          fontWeight: 900,
          color: "#D9D9D9",
          left: "53.33%",
          top: "92.31%",
          position: "absolute",
        }}
      >
        KES 41,345,234
      </div>
    </div>
  );
};

export default Footer;
