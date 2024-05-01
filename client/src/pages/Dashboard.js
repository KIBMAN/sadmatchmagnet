import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { useCookies } from "react-cookie";
import ChatContainer from "../components/ChatContainer"
import axios from "axios";

const Dashboard = () => {

  const [user,setUser] = useState(null)
  const [genderedUsers,setGenderedUsers]
  const [cookies,setCookie,removeCookie]=useCookies(['user'])

  const userId=cookies.UserId

  const getUser=async()=>{
    try{
      const response = await axios.get('http://localhost:8000/user',{
        params: {userId}
      })
      setUser(response.data)
    } catch (error){
      console.log(error)
    }
  }

  const getGenderedUsers=async()=>{
    try{
      const response=await axios.get('http://localhost:8000/gendered-users',{
        params: {gender:user?.gender_interest}
      })
      setGenderedUsers(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getUser()
    getGenderedUsers()
  },[])

  console.log('user',user)

  

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
    <>
    {user &&
    <div className="dashboard">
      <ChatContainer user={user}/>
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
    </div>}
    </>

  );
};

export default Dashboard;
