import { useState } from 'react';
import './App.css';
import { FavouriteStud } from './FavouriteStud';
import { ListOfStud } from './ListOfStud';
import { FavoritesProvider } from './FavoritesContext';


function App() {

  const list = ["List of Student","Favourite Student"]
  const pages = [<ListOfStud />, < FavouriteStud/>]

  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <div className="App">
    <FavoritesProvider>

      <nav style={{ background: "#0883a6", height:"50px"}}>
        <ul style={{display: "flex", cursor:"pointer", flexDirection: "row", gap:"90px", fontSize:"20px", color:"#fff", height:"50px", alignItems:"center",justifyContent:"center",textDecoration:"underline"}}>
          {
            list.map((item,index) => (             
                <li key={index} onClick={()=>setSelectedPage(index)}>{item}</li>             
            ))
          }     
        </ul>
      </nav>
      <div>
        {
          pages[selectedPage]
          
        }
      </div>
      </FavoritesProvider>

    </div>
  );
}

export default App;
