import React from "react";

function App() {

    const [data, setData] = useState([
      {
          id: 1,
          title: "Make A Drink And We'll Tell You Where You'll Meet Your Soulmate",
          name: "John Doe",
          month: "March 20, 2020    1 min"
      },
      {
          id: 2,
          title: "Long=Lasting Fashion Items That Are Worth The Investement",
          name: "Sarah Doe",
          month: "March 19, 2020    1 min"
      },
      {
          id: 3,
          title: "20 Creative Pasta Recipes You'll Probably Want To Whip Up ASAP",
          name: "Sarah Doe",
          month: "March 20, 2020    1 min"
      },
      {
          id: 4,
          title: "I Webt To Seattle With No Clothes The Empty Suitcase Show",
          name: "John Doe",
          month: "January 18, 2020    1 min"
      },                      
  ])
  
    return (
      <div className="App">
        {data.map(item => (
          <Component key={item.id} title={item.title} name={item.name} month={item.month}/>
        ))}
      </div>
    );
  }
  