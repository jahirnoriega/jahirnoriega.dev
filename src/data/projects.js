// IMG TECHSHOP
import techshop from "../img/TechShop/TechShop.webp";
import techshoplogin from "../img/TechShop/login.webp";
import techshopproduct from "../img/TechShop/product.webp";
import techshopproducts from "../img/TechShop/products.webp";
import techshopproducts3 from "../img/TechShop/product3.webp";
import techshopsignup from "../img/TechShop/signup.webp";
// IMG SMARTBOWL
import smartbowl from "../img/smartbowl/smartbowl.webp";
import sbAdd from "../img/smartbowl/add.webp";
import sbLogin from "../img/smartbowl/login.webp";
import sbPet from "../img/smartbowl/pet.webp";
import sbSignup from "../img/smartbowl/signup.webp";
// IMG JS APPS
import jsStore from "../img/JS-apps/store-app.webp";
import jsCripto from "../img/JS-apps/cripto-app.webp";
import jsImage from "../img/JS-apps/image-app.webp";
import jsWeather from "../img/JS-apps/weather-app.webp";

export const projects_info = [
  {
    id: 1,
    projectName: "TechShop",
    sm_desc:
      "TechShop is a platform dedicated to selling technology-related products.",
    lg_desc:
      "TechShop is a robust e-commerce platform designed to facilitate the seamless buying and selling of technology-related products. Built on a foundation of powerful technologies, including PHP for dynamic server-side scripting, MySQL for efficient database management, and HTML/CSS for a user-friendly front-end interface, TechShop ensures a smooth and responsive online shopping experience. This combination of cutting-edge technologies enables TechShop to provide a feature-rich platform for users to explore and purchase a wide range of electronic devices, including computers, smartphones, tablets, cameras, and various accessories and software.",
    url: "https://jahirnoriegablog.000webhostapp.com/proyecto/EN/loginEN.php",
    cover: [
      techshop,
      techshopproduct,
      techshoplogin,
      techshopproducts,
      techshopproducts3,
      techshopsignup,
    ],
  },
  {
    id: 2,
    projectName: "SmartBowl",
    sm_desc: "Smartbowl is an innovative and user-friendly mobile application.",
    lg_desc:
      "Smartbowl represents a pioneering mobile application in the realm of pet care, introducing a sophisticated automated feeding system. Developed with precision using Firebase for real-time data synchronization, Arduino for seamless hardware integration, and Flutter for an elegant and responsive user interface, Smartbowl ensures pets receive timely and precise nourishment. The incorporation of Firebase facilitates remote monitoring, while Arduino automates the feeding process. With a commitment to user-friendly design, the Flutter framework enhances the overall experience. Smartbowl is a testament to the harmonious convergence of advanced technology and refined design, offering a professional and efficient solution for pet owners seeking optimal care for their companions",
    url: "#",
    cover: [smartbowl, sbAdd, sbLogin, sbPet, sbSignup],
  },
  {
    id: 3,
    projectName: "JavaScript Projects",
    sm_desc:
      "Through these apps, my ability to handle various language functions and more advanced functionalities.",
    lg_desc:
      "Through these apps, my ability to handle various language functions, such as the integration of APIs and the efficient use of local storage, is evident. This project not only allowed me to apply fundamental concepts but also to explore and implement more advanced functionalities. In parallel, I have honed my web development skills, employing HTML and CSS to craft a professional and user-friendly web interface. The majority of my proficiency in web development, particularly in leveraging the dynamic capabilities of JavaScript, has been cultivated through hands-on experience during the creation of these applications.",
    url: "https://weather-api-jn.netlify.app/",
    cover: [jsCripto, jsImage, jsStore, jsWeather],
  },
];
