import ResponsiveAppBar from "../components/appbar/AppBar";
import Grid1L from "../components/grid/Grid1L";
import { AppSideBar } from "../components/sidebar/AppSideBar";
import FeaturedGameBanner from "../components/featuredGameBanner/FeaturedGameBanner";

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

          gridTemplateColumns: "13% 30% 55.76%",
        }}
      >
        {/* <AppSideBar /> */}

        <div style={{ gridColumn: 2 }}>
          <Grid1L />
        </div>
        <div
          style={{
            backgroundImage: "url(./mainGameBackground.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "90%",
            width: "100%",
            borderRadius: "15px",
            gridColumn: 3,
          }}
        >
          <FeaturedGameBanner />
          <div style={{ marginTop: "1.8%", backgroundColor: "green" }}>
            boom
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
