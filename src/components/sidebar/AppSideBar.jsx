import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import "./AppSideBar.css";
export const AppSideBar = () => {
  return (
    <Sidebar
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
    </Sidebar>
  );
};
