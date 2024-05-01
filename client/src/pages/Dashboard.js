import { useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer"

const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://imgs.search.brave.com/G7PMeUgzG1zh75C7cIXIVWlrcnUczSU8lKlLqkCC16w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTMyODgyMy9waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1vZi1z/bWlsaW5nLW1hbGUt/ZW1wbG95ZWUtaW4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rUHZv/Qm02cUNZelFYTUFu/OUpVdHFMUkVYZTkt/UGxaeU1sOWktaWJh/VnVZPQ",
    },
    {
      name: "Erlich Bachman",
      url: "https://imgs.search.brave.com/G7PMeUgzG1zh75C7cIXIVWlrcnUczSU8lKlLqkCC16w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTMyODgyMy9waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1vZi1z/bWlsaW5nLW1hbGUt/ZW1wbG95ZWUtaW4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rUHZv/Qm02cUNZelFYTUFu/OUpVdHFMUkVYZTkt/UGxaeU1sOWktaWJh/VnVZPQ",
    },
    {
      name: "Monica Hall",
      url: "https://imgs.search.brave.com/G7PMeUgzG1zh75C7cIXIVWlrcnUczSU8lKlLqkCC16w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTMyODgyMy9waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1vZi1z/bWlsaW5nLW1hbGUt/ZW1wbG95ZWUtaW4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rUHZv/Qm02cUNZelFYTUFu/OUpVdHFMUkVYZTkt/UGxaeU1sOWktaWJh/VnVZPQ",
    },
    {
      name: "Jared Dunn",
      url: "https://imgs.search.brave.com/G7PMeUgzG1zh75C7cIXIVWlrcnUczSU8lKlLqkCC16w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTMyODgyMy9waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1vZi1z/bWlsaW5nLW1hbGUt/ZW1wbG95ZWUtaW4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rUHZv/Qm02cUNZelFYTUFu/OUpVdHFMUkVYZTkt/UGxaeU1sOWktaWJh/VnVZPQ",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://imgs.search.brave.com/G7PMeUgzG1zh75C7cIXIVWlrcnUczSU8lKlLqkCC16w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/OTMyODgyMy9waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1vZi1z/bWlsaW5nLW1hbGUt/ZW1wbG95ZWUtaW4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rUHZv/Qm02cUNZelFYTUFu/OUpVdHFMUkVYZTkt/UGxaeU1sOWktaWJh/VnVZPQ",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <ChatContainer/>
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => 
            <TinderCard // Change here: Replace TinderCard with div
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div style={{ backgroundImage: 'url('+character.url+')'}} className="card"  >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p>:<p/>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
