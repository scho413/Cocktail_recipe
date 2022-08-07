import axios from "axios";
import { useState } from 'react';
import './App.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

function App() {
  // Declare a new state variable, which we'll call "pokemonName"
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailInfo, setCocktailInfo] = useState<undefined | any>(undefined);

  const COCKTAIL_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
  return (
    <div>
      <h1>
        Cocktail Ingredient Search
      </h1>
      
      <div>
        <label>Cocktail Name</label><br/>
        <input type="text" id="cocktail-name" name="cocktail-name" onChange={e => setCocktailName(e.target.value)}/><br/>
        <button onClick={search}>
        Search
        </button>
      </div>

      <p>You have entered {cocktailName}</p>

      {cocktailInfo === undefined ? (
        <p>No recipe not found</p>
      ) : (
        <div id="cocktail-result">
          <img src={cocktailInfo.drinks[0].strDrinkThumb} />
        </div>
      )}
    </div>
  );

  function search() {
    axios.get(COCKTAIL_BASE_URL + "search.php?s=" + cocktailName).then((res) => {
      setCocktailInfo(res.data);
      console.log(res.data.drinks[0]);
    });
  }
}

export default App;

//https://www.thecocktaildb.com/api.php