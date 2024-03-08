import ResponsiveAppBar from "../components/appbar/AppBar";
import { AppSideBar } from "../components/sidebar/AppSideBar";

const HomePage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div
        style={{
          display: "grid",
          height: "90vh",
          width: "100%",
          //justifyContent: "space-evenly",
          //alignContent: "center",

          gridTemplateColumns: "13% 36% 50%",
        }}
      >
        <AppSideBar />

        <div style={{ backgroundColor: "green", gridColumn: 2 }}>
          Griddddddddddddddddddddddddddddddd 1
        </div>
        <div style={{ backgroundColor: "red", gridColumn: 3 }}>Grid 2</div>
      </div>
    </>
  );
};

export default HomePage;
