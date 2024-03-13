import ResponsiveAppBar from "../components/appbar/AppBar";
import Grid1L from "../components/grid/Grid1L";
import { AppSideBar } from "../components/sidebar/AppSideBar";
import FeaturedGameBanner from "../components/featuredGameBanner/FeaturedGameBanner";
import Footer from "../components/footer/footer";
import HomePageMainGrid from "../components/homePageMainGrid/HomePageMainGrid";

const HomePage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div
        style={{
          display: "grid",
          height: "80vh",
          width: "100%",
          //backgroundColor: "red",
          //justifyContent: "space-evenly",
          //alignContent: "center",

          gridTemplateColumns: "13% 30% 55.76%",
        }}
      >
        {<AppSideBar />}

        <div style={{ gridColumn: 2 }}>
          <Grid1L />
        </div>
        <div
          style={{
            backgroundImage: "url(./mainGameBackground.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            borderRadius: "15px",
            gridColumn: 3,
          }}
        >
          <div style={{ height: "67.2%", width: "70.12%" }}>
            <FeaturedGameBanner />
          </div>
          <div style={{ height: "" }}>
            {" "}
            <HomePageMainGrid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
