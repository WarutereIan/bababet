import "./AppSideBar.css";
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

  return (
    <div style={{ width: "100%" }}>
      {/* <Sidebar
      backgroundColor="black"
      color="black"
      width="200px"
      style={{
        height: "100%",

        marginLeft: 0,
        borderRadius: "10px",
        //top: "5%",
        //position: "relative",

        color: "#D9D9D9",
      }}
    >
      <div
        style={{
          height: "60%",
          backgroundColor: "#A3411F",
          borderRadius: "10px",
        }}
      >
        <Menu>
          <MenuItem>Country</MenuItem>
          <MenuItem>League</MenuItem>
          <MenuItem>Todays Games</MenuItem>
          <MenuItem>Upcoming Games</MenuItem>
        </Menu>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: "16%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          <Menu>
            <MenuItem
              style={{
                backgroundColor: "#1F6AB0",
                position: "absolute",
                width: "100%",
                top: "70%",
                borderRadius: "2px",
                fontSize: "13",
                fontWeight: 600,
              }}
            >
              BETSLIP
            </MenuItem>
          </Menu>
        </div>
        <Menu
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <MenuItem
            style={{
              backgroundColor: "#1F6AB0",
              borderRadius: "2px",
              fontSize: "13",
              fontWeight: 600,
            }}
          >
            PAYBILL ITEMS
          </MenuItem>
        </Menu>
      </div>
    </Sidebar> */}

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
