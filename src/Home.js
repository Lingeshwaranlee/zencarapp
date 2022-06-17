import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShopIcon from "@mui/icons-material/Shop";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PhoneIcon from "@mui/icons-material/Phone";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
//Home Page component
export function Home() {
  return (
    <div>
      <div className="kgf">
        <img
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            position: "static",
          }}
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1a5ba4b1-efd8-40bc-8b6d-e81bf8223e37/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-LHD"
        ></img>
      </div>

      <div className="hover1" style={{ padding: "2px" }}>
        <div
          style={{
            background: "black",
            color: " white",
            paddingTop: "50px",
            paddingLeft: "100px",
            height: "440px",
          }}
        >
          <h1 style={{ color: "crimson" }}>ADVENT OF SMART CARS</h1>
          <h4 className="test" style={{ lineHeight: "30px", color: " white" }}>
            The age of smart cars is approaching fast as automobiles are
            increasingly making full use of electronic technology developments.
            There are already cars out there which can drive themselves,
            automatically adjusting its speed and maneuvering into the hard.
            <br></br>
            <br></br>
            <h2>
              More About{" "}
              <IconButton style={{ marginTop: "1px", color: " white" }}>
                <ArrowForwardIcon />
              </IconButton>
              <span style={{ color: "crimson" }}>Smart</span>{" "}
            </h2>
          </h4>
        </div>
        <div>
          <img
            style={{ width: "800px", height: "490px", objectFit: "cover" }}
            src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20-n-line/Gallery/Hyundai-i20Nline-Gallery-Mid-PC-1120x600-9.jpg"
          ></img>
        </div>
      </div>
      <div className="hover">
        <div>
          <img
            style={{ width: "800px", height: "490px", objectFit: "cover" }}
            src="https://images.caricos.com/r/rolls-royce/2013_rolls-royce_ghost_otaon/images/1920x1080/2013_rolls-royce_ghost_otaon_11_1920x1080.jpg"
          ></img>
        </div>
        <div
          style={{
            background: "black",
            color: "white",
            paddingTop: "50px",
            paddingLeft: "100px",
            height: "440px",
          }}
        >
          <h1 style={{ color: "crimson" }}>HERITAGE MEETS MODERNITY</h1>
          <h4 className="test" style={{ lineHeight: "30px", color: "white" }}>
            Phantom effortlessly blends the classic with the strikingly modern.
            Dials that hark back to the Golden Age of Motoring are all digital,
            and yet are as striking to behold as any Rolls-Royce at any point in
            history.Rolls-Royce motor cars have been graced by the Spirit of
            Ecstasy mascot, one of the most recognisable emblems ever created.
            Yet, remarkably, given her immense fame and global reach, aspects of
            her story remain open to speculation, confusion and no little
            controversy.<br></br>
            <br></br>
            <h2>
              More About{" "}
              <IconButton style={{ marginTop: "1px", color: " white" }}>
                <ArrowForwardIcon />
              </IconButton>
              <span style={{ color: "crimson" }}>Dashboard</span>
            </h2>
          </h4>
        </div>
      </div>
      <div className="fog">
        <div style={{ paddingLeft: "150px" }}>
          <img
            style={{ width: "600px", height: "400px", objectFit: "cover" }}
            src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20-n-line/Highlights/mob/Hyundai-i20Nline-Highlight-middle-mob-tab-800x530-2.jpg"
          ></img>
          <h2 style={{ textAlign: "center" }}></h2>
        </div>
        <div>
          <img
            style={{ width: "600px", height: "400px", objectFit: "cover" }}
            src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20-n-line/Highlights/mob/Hyundai-i20Nline-Highlight-middle-mob-tab-800x530-7.jpg"
          ></img>
          <h2 style={{ textAlign: "center" }}></h2>
        </div>
      </div>

      <div className="article">
        <img
          className="ishu1"
          src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/keyhighlights/thar/desktop/1920x745_adventure_desktop.png?la=en&rev=cfeed780a4364105965bd7ae3d754f9f&extension=webp"
        ></img>
        <h4 className="header3">Mahindra Adventure</h4>
        <p className="header4">
          Experience the open skies and unlimited freedom with<br></br> an
          off-roading and adventure playground celebrating<br></br> the All-New
          Thar.
        </p>
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>Gear up</h1>
        <h3 style={{ paddingLeft: "650px" }}> Accessories & Merchandise</h3>
        <Button
          variant="contained"
          style={{
            color: "black",
            backgroundColor: "rgb(185, 183, 183)",
            marginLeft: "530px",
          }}
        >
          Download Accessories and Merchandise Brochure
        </Button>
        <div className="sanga">
          <div style={{ paddingLeft: "200px" }}>
            <ShopIcon style={{ fontSize: "50px", color: "crimson" }} />
            <p>Bring home the All-New Thar</p>
            <Button
              variant="contained"
              style={{
                color: "crimson",
                backgroundColor: "rgb(185, 183, 183)",
              }}
            >
              BOOK ONLINE
            </Button>
          </div>
          <hr></hr>
          <div>
            <HeadsetMicIcon style={{ fontSize: "50px", color: "crimson" }} />
            <p>Submit a corporate sales enquiry</p>
            <Button
              variant="contained"
              style={{
                color: "crimson",
                backgroundColor: "rgb(185, 183, 183)",
              }}
            >
              ENQUIRE
            </Button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="sanga">
        <div style={{ paddingLeft: "140px" }}>
          <SwapHorizIcon style={{ fontSize: "70px", color: "crimson" }} />
          <p>Swap your old vehicle for the All-New Thar</p>
          <Button
            variant="contained"
            style={{ color: "crimson", backgroundColor: "rgb(185, 183, 183)" }}
          >
            EXCHANGE
          </Button>
        </div>
        <hr></hr>
        <div style={{ maginLeft: "280px" }}>
          <PhoneIcon
            style={{
              fontSize: "50px",
              color: "crimson",
              marginTop: "17px",
              marginLeft: "30px",
            }}
          />
          <p>We are here to answer all your queries</p>
          <Button
            variant="contained"
            style={{ color: "crimson", backgroundColor: "rgb(185, 183, 183)" }}
          >
            REQUEST CALLBACK
          </Button>
        </div>
      </div>
      <div
        className="op"
        style={{
          background: "black",
          color: " white",
          paddingTop: "10px",
          marginTop: "10px",
        }}
      >
        <h1 style={{ color: "crimson" }}>EXPERIENCE</h1>
        <h3 className="tes" style={{ lineHeight: "30px", color: " white" }}>
          As a world-class marque, there is more to meets the eye.<br></br>{" "}
          Explore the experiences and events placing us at the summit of luxury.
        </h3>
      </div>
      <div className="fog">
        <div style={{ paddingLeft: "100px" }}>
          <img
            style={{ width: "400px", height: "280px", objectFit: "cover" }}
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5d01e919-478d-425b-8b6a-36f7cc1e4420/bvlatuR/std/3949x2202/Model-S-Exterior-Grid-A-Desktop-Mobile-Global"
          ></img>
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            Relentless Performance.
          </p>
          <Button
            style={{
              marginLeft: "100px",
              width: "200px",
              background: "rgb(41, 39, 39)",
              color: "rgb(185, 183, 183)",
            }}
            variant="contained"
          >
            Explore Offers
          </Button>
        </div>
        <div>
          <img
            style={{ width: "400px", height: "280px", objectFit: "cover" }}
            src="https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_464863480.component.damq2.3282591253392.jpg/WhatsApp%20Live%20Chat%20Mobile%20Banner.jpg"
          ></img>
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            Help when you need it.
          </p>
          <Button
            style={{
              marginLeft: "100px",
              width: "200px",
              background: "rgb(41, 39, 39)",
              color: "rgb(185, 183, 183)",
            }}
            variant="contained"
          >
            Chat Here
          </Button>
        </div>
        <div>
          <img
            style={{ width: "400px", height: "280px", objectFit: "cover" }}
            src="https://www.topgear.com/sites/default/files/cars-car/image/2021/03/lr_def_90_x_p400_gondwana_stone_gaydon_281020_005.jpg?w=1280&h=720"
          ></img>
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            {" "}
            Connects you worldwide.
          </p>
          <Button
            style={{
              marginLeft: "100px",
              width: "200px",
              background: "rgb(41, 39, 39)",
              color: "rgb(185, 183, 183)",
            }}
            variant="contained"
          >
            Explore Offers
          </Button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "40px", margin: "20px" }}>
        <div
          style={{
            margin: "20PX",
            backgroundColor: " rgba(21, 76, 228, 0.758)",
            color: "white",
            padding: "20px",
          }}
        >
          <h2>
            FACEBOOK
            <span style={{ marginTop: "2px", color: "white" }}>
              <ArrowForwardIcon />
            </span>
            <span style={{ marginLeft: "150px" }}>
              <FacebookIcon style={{ fontSize: "35px" }} />
            </span>
          </h2>
          <p style={{ lineHeight: "27px" }}>
            FACEBOOK is a popular photo-sharing app that lets you connect with
            brands, celebrities, thought leaders, friends, family, and
            more.Visit http://bit.ly/3c0509k #altrozt20 #Dream11ipl
          </p>
        </div>
        <div
          style={{
            margin: "20PX",
            backgroundImage: " linear-gradient(to right, orange,crimson)",
            color: "white",
            padding: "20px",
          }}
        >
          <h2>
            INSTAGRAM
            <span style={{ marginTop: "1px", color: "white" }}>
              <ArrowForwardIcon />
            </span>
            <span style={{ marginLeft: "160px" }}>
              <InstagramIcon style={{ fontSize: "35px" }} />
            </span>
          </h2>
          <p style={{ lineHeight: "27px" }}>
            Instagram is a popular photo-sharing app that lets you connect with
            brands, celebrities, thought leaders, friends, family, and
            more.Visit http://bit.ly/3c0509k #altrozt20 #Dream11ipl
          </p>
        </div>
        <div
          style={{
            margin: "20PX",
            backgroundColor: "rgb(12, 163, 244)",
            color: "white",
            padding: "20px",
          }}
        >
          <h2>
            TWITTER
            <span style={{ marginTop: "1px", color: "white" }}>
              <ArrowForwardIcon />
            </span>
            <span style={{ marginLeft: "190px" }}>
              {" "}
              <TwitterIcon style={{ fontSize: "35px" }} />
            </span>
          </h2>{" "}
          <p style={{ lineHeight: "27px" }}>
            TWITTER is a popular photo-sharing app that lets you connect with
            brands, celebrities, thought leaders, friends, family, and
            more.Visit http://bit.ly/3c0509k #altrozt20 #Dream11ipl
          </p>
        </div>
      </div>
      <img
        style={{ width: "1505px", height: "750px", objectFit: "cover" }}
        src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/page-properties/rrmc-black-badge-cullinan-hero-d.jpg/jcr:content/renditions/cq5dam.web.1920.webp"
      ></img>
    </div>
  );
}
