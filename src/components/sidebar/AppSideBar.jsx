import "./AppSideBar.css";
import Popup from "reactjs-popup";
import Betslip from "../betslip/Betslip";

export const AppSideBar = () => {
  const buttonStyle = {
    backgroundColor: "inherit",
    width: "100%",
    borderRadius: "1px",
    fontSize: "9px",
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#D9D9D9",
    textAlign: "left",
  };

  /* const [betslipModalDisplayed, setBetslipModalDisplayed] = useState(false);
  const handleOpen = () => setBetslipModalDisplayed(true);
  const handleClose = () => setBetslipModalDisplayed(false); */
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          height: "64.55%",
          backgroundColor: "rgba(163,65,31,0.92)",
          borderRadius: "5px",
          marginLeft: "5%",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "20%",
            paddingTop: "50%",
          }}
        >
          <button style={buttonStyle} href="">
            Country
          </button>
          <button style={buttonStyle} href="">
            League
          </button>
          <button style={buttonStyle} href="">
            Today's Games
          </button>
          <button style={buttonStyle} href="">
            Upcoming Games
          </button>
        </nav>
      </div>

      <div style={{ height: "24%", paddingLeft: "6%", paddingRight: "6%" }}>
        <Popup
          trigger={
            <button
              style={{
                marginTop: "72%",
                backgroundColor: "rgba(31,106,176,0.78)",
                width: "100%",
                borderRadius: "3px",
                fontSize: "13px",
                fontWeight: "600",
                fontFamily: "Inter",
                color: "#D9D9D9",
                textAlign: "left",
              }}
            >
              <p>BETSLIP</p>
            </button>
          }
          modal
          position={"bottom right"}
        >
          {(close) => <Betslip></Betslip>}
        </Popup>

        <button
          style={{
            marginTop: "20%",
            backgroundColor: "rgba(31,106,176,0.78)",
            width: "100%",
            borderRadius: "3px",
            fontSize: "13px",
            fontWeight: "600",
            fontFamily: "Inter",
            color: "#D9D9D9",
            textAlign: "left",
          }}
        >
          PAYBILL
        </button>
      </div>
    </div>
  );
};
