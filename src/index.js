import { tabs } from "./tabs";
import { homecontent } from "./home";
import { populateBeers } from "./beer-menu";
import "./style.css";
import "./reset.css";
import { gallerycontent, setScroll } from "./gallery";
import { contact } from "./contact";
import { footer } from "./footer";

tabs();
footer();
homecontent();
populateBeers();
gallerycontent();
setScroll();
contact();
