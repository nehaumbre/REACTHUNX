// import Greet from './components/Greet.jsx';
// import StyledCard from './components/StyledCard.jsx';
// import ProfileCard from './components/ProfileCard.jsx';
// import IconComponent from './components/IconComponent.jsx';
// import Add from './components/Add.jsx';
// import Header from './components/Header.jsx';
// import MainContent from './components/MainContent.jsx';
// import Footer from './components/Footer.jsx';
// import WelcomeMessage from './components/WelcomeMessage.jsx';
// import JSXRULES from './components/JSXRULES.jsx';
// import ProductInfo from './components/ProductInfo.jsx';
// import Greetings from './components/Greetings.jsx';
// import ProductList from './components/ProductList.jsx';
// import React from "react";
// import AnimeCard from "./components/AnimeCard";
// import AnimeReview from "./components/AnimeReview.jsx";
// import AnimeWatchExperience from "./components/AnimeWatchExperience.jsx";
// import Product from "./components/Product.jsx";
// import Consumer from "./components/Consumer.jsx";
// import Card from "./components/Card.jsx";
// import UserList from './components/userList.jsx';
// import { CgAlbum } from "react-icons/cg";
// import Weather from './components/Weather.jsx';
// import UserStatus from './components/UserStatus.jsx';
// import "./index.css";
import ClickMeComponent from "./components/ClickMeComponent";
// const ValidPasscode = () => <h1>Valid Passcode</h1>;
// const InvalidPasscode = () => <h1>Invalid Passcode</h1>;

// const IsLoggedIn = () => <h2>You are logged in.</h2>;
// const IsLoggedOut = () => <h2>You are logged out.</h2>;

// const SubscriptionStatus = ({ isSubscribed }) => {
//   // if (isSubscribed) {
//   //   return <h2>Thank you for subscribing!</h2>;
//   // }
//   // return <h2>Please subscribe to access premium content.</h2>;
//   return isSubscribed ? (<h2>Thank you for subscribing!</h2>) : (<h2>Please subscribe to access premium content.</h2>);
// };

// const LoginStatus = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return <IsLoggedIn />;
//   }
//   return <IsLoggedOut />;
// };


// const Passcode = ({ isValid }) => {
//   // if (isValid) {
//   //   return <ValidPasscode />;
//   // }
//   // return <InvalidPasscode />;
//   return isValid ? (<ValidPasscode />) : (<InvalidPasscode />);
// };
  
const App = () => {
  // const animeList = [
  //   {
  //     id: 1,
  //     title: "One Piece",
  //     genre: "Adventure",
  //     episodes: 1100,
  //   },
  //   {
  //     id: 2,
  //     title: "Jujutsu Kaisen",
  //     genre: "Action",
  //     episodes: 47,
  //   },
  //   {
  //     id: 3,
  //     title: "Frieren",
  //     genre: "Fantasy",
  //     episodes: 28,
  //   },
  // ];
  // const numbers = [1, 2, 3, 4, 5];
  // const usersInfo = [
  //   {
  //     username: "aarav_mehta",
  //     email: "aarav.mehta@gmail.com",
  //     location: "Bengaluru, India",
  //   },
  //   {
  //     username: "sophia_w",
  //     email: "sophia.williams@outlook.com",
  //     location: "Manchester, UK",
  //   },
  //   {
  //     username: "mike_chen92",
  //     email: "mike.chen92@yahoo.com",
  //     location: "San Francisco, USA",
  //   },
  //   {
  //     username: "priya_codes",
  //     email: "priya.sharma@gmail.com",
  //     location: "Hyderabad, India",
  //   },
  //   {
  //     username: "daniel_rodriguez",
  //     email: "daniel.r@proton.me",
  //     location: "Barcelona, Spain",
  //   },
  //   {
  //     username: "yuki_tanaka",
  //     email: "yuki.tanaka@gmail.com",
  //     location: "Tokyo, Japan",
  //   },
  //   {
  //     username: "emma_90",
  //     email: "emma.johnson@icloud.com",
  //     location: "Melbourne, Australia",
  //   },
  //   {
  //     username: "devraj_s",
  //     email: "devraj.singh@outlook.com",
  //     location: "Delhi, India",
  //   },
  //   {
  //     username: "lucas_m",
  //     email: "lucas.martin@gmail.com",
  //     location: "Berlin, Germany",
  //   },
  //   {
  //     username: "zoe_parker",
  //     email: "zoe.parker@yahoo.com",
  //     location: "Toronto, Canada",
  //   },
  // ];

  // const crunchyrollCustomers = [
  //   {
  //     username: "anime_kaiser",
  //     email: "kaiser@example.com",
  //     location: "Tokyo, Japan",
  //     favoriteAnime: "Jujutsu Kaisen",
  //     watching: ["One Piece", "Demon Slayer", "Solo Leveling"],
  //     episodesWatched: 247,
  //     subscription: "Mega Fan",
  //   },
  //   {
  //     username: "shonen_slayer",
  //     email: "shonen@example.com",
  //     location: "Mumbai, India",
  //     favoriteAnime: "One Piece",
  //     watching: ["One Piece", "My Hero Academia"],
  //     episodesWatched: 893,
  //     subscription: "Fan",
  //   },
  //   {
  //     username: "mika_chan",
  //     email: "mika@example.com",
  //     location: "Osaka, Japan",
  //     favoriteAnime: "Frieren: Beyond Journey's End",
  //     watching: ["Frieren", "Spy x Family", "Haikyuu!!"],
  //     episodesWatched: 156,
  //     subscription: "Ultimate Fan",
  //   },
  //   {
  //     username: "otaku_night",
  //     email: "otaku@example.com",
  //     location: "Seoul, South Korea",
  //     favoriteAnime: "Solo Leveling",
  //     watching: ["Solo Leveling", "Attack on Titan", "Chainsaw Man"],
  //     episodesWatched: 312,
  //     subscription: "Mega Fan",
  //   },
  //   {
  //     username: "ramen_and_anime",
  //     email: "ramen@example.com",
  //     location: "New York, USA",
  //     favoriteAnime: "Naruto",
  //     watching: ["Naruto", "Bleach", "One Piece"],
  //     episodesWatched: 1240,
  //     subscription: "Ultimate Fan",
  //   },
  // ];

  // const animeDataforUser = [
  //   {
  //     id: 101,
  //     username: "voidwalker",
  //     email: "voidwalker@example.com",
  //     location: "Mumbai, India",
  //     avatar: "https://i.pravatar.cc/150?img=12",
  //     role: "Moderator",
  //     level: 42,
  //     isOnline: true,
  //     favoriteGenre: "Action",
  //     favoriteAnime: "Jujutsu Kaisen",
  //     watchlist: ["One Piece", "Bleach", "Chainsaw Man"],
  //     stats: {
  //       episodesWatched: 843,
  //       hoursWatched: 1267,
  //       reviewsWritten: 34,
  //     },
  //   },
  //   {
  //     id: 102,
  //     username: "moonlit_fox",
  //     email: "moonlit@example.com",
  //     location: "Kyoto, Japan",
  //     avatar: "https://i.pravatar.cc/150?img=47",
  //     role: "Member",
  //     level: 27,
  //     isOnline: false,
  //     favoriteGenre: "Fantasy",
  //     favoriteAnime: "Frieren: Beyond Journey's End",
  //     watchlist: ["Frieren", "Violet Evergarden", "Spy x Family"],
  //     stats: {
  //       episodesWatched: 421,
  //       hoursWatched: 638,
  //       reviewsWritten: 18,
  //     },
  //   },
  //   {
  //     id: 103,
  //     username: "senpai_mode",
  //     email: "senpai@example.com",
  //     location: "Bengaluru, India",
  //     avatar: "https://i.pravatar.cc/150?img=33",
  //     role: "Premium Member",
  //     level: 61,
  //     isOnline: true,
  //     favoriteGenre: "Adventure",
  //     favoriteAnime: "One Piece",
  //     watchlist: ["One Piece", "Hunter x Hunter", "My Hero Academia"],
  //     stats: {
  //       episodesWatched: 1298,
  //       hoursWatched: 1947,
  //       reviewsWritten: 72,
  //     },
  //   },
  //   {
  //     id: 104,
  //     username: "akira_404",
  //     email: "akira@example.com",
  //     location: "Seoul, South Korea",
  //     avatar: "https://i.pravatar.cc/150?img=25",
  //     role: "Member",
  //     level: 19,
  //     isOnline: true,
  //     favoriteGenre: "Thriller",
  //     favoriteAnime: "Death Note",
  //     watchlist: ["Death Note", "Monster", "Attack on Titan"],
  //     stats: {
  //       episodesWatched: 287,
  //       hoursWatched: 431,
  //       reviewsWritten: 9,
  //     },
  //   },
  //   {
  //     id: 105,
  //     username: "ramen.exe",
  //     email: "ramen@example.com",
  //     location: "New York, USA",
  //     avatar: "https://i.pravatar.cc/150?img=68",
  //     role: "Member",
  //     level: 35,
  //     isOnline: false,
  //     favoriteGenre: "Comedy",
  //     favoriteAnime: "Gintama",
  //     watchlist: ["Gintama", "Saiki K", "Konosuba"],
  //     stats: {
  //       episodesWatched: 612,
  //       hoursWatched: 918,
  //       reviewsWritten: 26,
  //     },
  //   },
  // ];

  // const stylesforSectionWeather = {
  //   color: "yellow",
  //   backgroundColor: "OrangeRed",
  //   padding: "10px",
  //   marginBottom: "20px",
  // };

  return (
    // <section id="section">
    //   <h1>My Website</h1>
    //   <JSXRULES />
    //   <WelcomeMessage />
    //   <article>
    //     <h2>Welcome to my website</h2>
    //     <p className="text">This is a simple website built with React and Vite.</p>
    //   </article>
    //   <ProductInfo />
    //   <Greetings />
    // </section>
    <main>
      {/* <section style ={{color:"pink", backgroundColor:"DarkSlateBlue", padding:"10px", marginBottom:"20px"}}>
        <p style= {stylesforSectionWeather}>Temperature is : <Weather temperature={16} /></p>
        <p>User Status : <UserStatus loggedIn={true} isAdmin={false} /></p>
        <p>Greet Time of Day : <Greet timeOfDay="evening" /></p>
      </section> */}
      {/* <section style={{ border: "2px solid black", padding: "10px", marginBottom: "20px" }}>
        Passcode Status: <Passcode isValid={true} />
      </section>
      <section style={{ border: "2px solid black", padding: "10px", marginBottom: "20px" }}>
        Login Status: <LoginStatus isLoggedIn={true} />
      </section>
      <section style={{ border: "2px solid black", padding: "10px", marginBottom: "20px", backgroundColor: "#bb8484" }}>
        <h3>Subscription Status <SubscriptionStatus isSubscribed={true} /></h3>
      </section> */}
      {/* <section
        style={{
          border: "2px solid black",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <h1>Anime Card: Passing an object as a prop</h1>
        {animeList.map((anime) => (
          <div key={anime.id}>
            <AnimeCard anime={anime} />
            <AnimeReview anime={anime} />
            <AnimeWatchExperience anime={anime} />
          </div>
        ))}
      </section> */}
      {/* <User
        banana="I hate banana!☜(ﾟヮﾟ☜)"
        apple={30}
        isFruit={true}
        fruits={["apple", "banana", "cherry"]}
      /> */}
      {/* <Product name="Anime Figure" price={29.99} />
      <Consumer name="John Doe" age={30} isMember={true} />
      <Card style={{ backgroundColor: "#4caf50", padding: "15px", borderRadius: "8px" }}>
        <h1>Card Component</h1>
        <p>This is some content inside the card1.</p>
      </Card> */}
      {/* <Card style = {{ backgroundColor: "#d84e4e", padding: "20px", borderRadius: "10px" }}>
        <h1>Another Card Component</h1>
        <p>This is some content inside the card2.</p>
      </Card> */}
      {/* <Card style = {{ backgroundColor: "#c9b0bf", padding: "40px", borderRadius: "50px" , boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"  }}>
        <h1>Another Card Component</h1>
        <p>This is some content inside the card3.</p>
      </Card> */}
      {/* anime={anime} Left anime → the prop name Right anime → the JavaScript variable/value */}
      {/* {numbers.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))} */}
      {/* {usersInfo.map((user, index) => (
        <ul key={index}>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Location: {user.location}</li>
        </ul>
      ))} */}

      {/* <h1>Crunchyroll Customers: {crunchyrollCustomers.length}</h1> */}
      {/* below i have used destrucrturing   */}
      {/* {crunchyrollCustomers.map(({ username, email, location, favoriteAnime, watching, episodesWatched, subscription }) => (
        <ul>
          <li key={username}>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Location: {location}</p>
            <p>Favorite Anime: {favoriteAnime}</p>
            <p>Watching: {watching.join(", ")}</p>
            <p>Episodes Watched: {episodesWatched}</p>
            <p>Subscription: {subscription}</p>
          </li>
          <hr />
        </ul>
      ))} */}
      {/* <h1>Anime Data for Users: {animeDataforUser.length}</h1> */}
      {/* {animeDataforUser.map((user) => (
        <ul key={user.id}>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Location: {user.location}</li>
          <li>Role: {user.role}</li>
          <li>Level: {user.level}</li>
          <li>Online Status: {user.isOnline ? "Online" : "Offline"}</li>
          <li>Favorite Genre: {user.favoriteGenre}</li>
          <li>Favorite Anime: {user.favoriteAnime}</li>
          <li><strong>Watchlist</strong>
            <ul>
              {
                user.watchlist.map((anime, index)=>(
                  <li key={index}>{anime}</li>
                ))
              }
            </ul>
          </li>
          <li>Episodes Watched: {user.stats.episodesWatched}</li>
          <li>Hours Watched: {user.stats.hoursWatched}</li>
          <li>Reviews Written: {user.stats.reviewsWritten}</li>
          <hr />
        </ul>
      ))} */}
      {/* <ProductList /> */}
      {/* <UserList /> */}
      {/* <CgAlbum size={50} color="red" />
      <StyledCard />
      <ProfileCard />
      <IconComponent /> */}
      <ClickMeComponent />
    </main>
  );
};

// destructuring props in the function parameter itself
// const User = ({ banana, apple, isFruit, fruits }) => {
//   console.log("User component rendered:", { banana, apple, isFruit, fruits });
//   return (
//     <section
//       style={{
//         border: "2px solid black",
//         padding: "10px",
//         marginBottom: "20px",
//       }}
//     >
//       <br />
//       {banana}
//       <br />
//       {apple}
//       <br />
//       {isFruit ? "Yes, it's a fruit!" : "No, it's not a fruit."}
//       <br />
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };
export default App;
