import { useState } from "react";
import "./AppSideBar.css";
import Modal from "@mui/material/Modal";
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

  const [betslipModalDisplayed, setBetslipModalDisplayed] = useState(false);
  const handleOpen = () => setBetslipModalDisplayed(true);
  const handleClose = () => setBetslipModalDisplayed(false);
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

      <Modal
        open={betslipModalDisplayed}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Betslip></Betslip>
      </Modal>
      <div style={{ height: "24%", paddingLeft: "6%", paddingRight: "6%" }}>
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
          onClick={handleOpen}
        >
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            BETSLIP
          </p>
        </button>
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
