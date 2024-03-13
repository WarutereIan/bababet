function ResponsiveAppBar() {
  return (
    <>
      <a href="#" style={{ marginLeft: 0, position: "absolute" }}>
        <img
          style={{
            height: "50px",
            width: "70px",
            position: "relative",

            //top: "3%",
          }}
          src={"/bababet_logo.svg"}
        />
      </a>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",

          backgroundImage: "url(./navbar_bg.svg)",
          fontFamily: "Inter",
          fontSize: 14,
          fontStyle: "revert",

          maxWidth: "100%",
          position: "relative",
          height: "50px",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
            marginLeft: "50%",
          }}
        >
          <li
            style={{
              listStyle: "none",
              padding: "0 20px",
              position: "relative",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Home
            </a>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "0 20px",
              position: "relative",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Categories
            </a>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "0 20px",
              position: "relative",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Live Bets
            </a>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "0 20px",
              position: "relative",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Casino Games
            </a>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "0 20px",
              position: "relative",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Promotions
            </a>
          </li>
          <li
            style={{
              listStyle: "none",
              padding: "0 20px",
              //position: "relative",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              About Us
            </a>
          </li>
        </ul>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              backgroundColor: "#A3411F",
              padding: "5px 20px",
              borderRadius: "3px",
              fontFamily: "Inter",
              fontWeight: 800,
              fontSize: "12px",
              width: "91px",
            }}
          >
            Log In
          </button>
          <a
            href="/register"
            style={{
              padding: "5px 20px",
              borderRadius: "3px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "12px",
            }}
          >
            Register
          </a>
        </div>
      </nav>
    </>
  );
}
export default ResponsiveAppBar;
