import axios from "axios";
import { useState } from 'react';
import './App.css';
import { Alert, Box, Button, Fade, Grid, Paper, Skeleton } from "@mui/material";

function App() {
  const [cocktailName, setCocktailName] = useState("");
  const IngredientImage = "https://www.thecocktaildb.com/images/ingredients/";
  const [cocktailInfo, setCocktailInfo] = useState<undefined | any>(undefined);
  const [status, setChoice] = useState(true);
  const [isFirst, setisFirst] = useState(true);

  const COCKTAIL_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Cocktail Ingredient Search
      </h1>
      
      <div>
        <label>Cocktail Name</label><br/>
        <input type="text" id="cocktail-name" name="cocktail-name" onChange={e => setCocktailName(e.target.value)}/>
        <button onClick={search}>
        Search
        </button>
      </div>

      {cocktailInfo === undefined || cocktailInfo.drinks === null ? (
        <><br />
        {isFirst == false && (
          <Fade in={status === true} timeout={500}>
            <Alert severity="error">Counldn't find the recipe!</Alert>
          </Fade>
        )}
        </>
      ) : (
        <>
        <br/>
        <Fade in={status === true} timeout={500}>
          <Alert severity="success">Successfully found the recipe!</Alert>
        </Fade>
        <div id="cocktail-result">
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: "35%" }}>
                      <h2>{cocktailInfo.drinks[0].strDrink}</h2>
                  </td>
                  <td style={{ width: "60%" }}>
                    <h2>Ingredients</h2>
                  </td>
                </tr>

                <td style={{ width: "35%" }}>
                  <img src={cocktailInfo.drinks[0].strDrinkThumb} style={{ width: "80%", height: "80%" }}></img>
                </td>
                <td style={{ width: "60%" }}>
                  <table style={{ width: "100%" }}>
                    <tr>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient1 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient1 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure1} {cocktailInfo.drinks[0].strIngredient1}</figcaption></>
                        )}
                      </td>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient2 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient2 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure2} {cocktailInfo.drinks[0].strIngredient2}</figcaption></>
                        )}
                      </td>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient3 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient3 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure3} {cocktailInfo.drinks[0].strIngredient3}</figcaption></>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient4 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient4 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure4} {cocktailInfo.drinks[0].strIngredient4}</figcaption></>
                        )}
                      </td>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient5 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient5 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure5} {cocktailInfo.drinks[0].strIngredient5}</figcaption></>
                        )}
                      </td>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient6 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient6 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure6} {cocktailInfo.drinks[0].strIngredient6}</figcaption></>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient7 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient7 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure7} {cocktailInfo.drinks[0].strIngredient7}</figcaption></>
                        )}
                      </td>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient8 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient8 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure8} {cocktailInfo.drinks[0].strIngredient8}</figcaption></>
                        )}
                      </td>
                      <td>
                        {cocktailInfo.drinks[0].strIngredient9 != null && (
                          <><img src={IngredientImage + cocktailInfo.drinks[0].strIngredient9 + '.png'} style={{ width: "50%", height: "50%" }}></img><figcaption>{cocktailInfo.drinks[0].strMeasure9} {cocktailInfo.drinks[0].strIngredient9}</figcaption></>
                        )}
                      </td>
                    </tr>
                  </table>
                </td>
              </tbody>
            </table>

            <h2>Instructions</h2>
            <div>
              {cocktailInfo.drinks[0].strInstructions}
              <br/>
              <br/>
            </div>    
          </div>          
          </>
      )}
    </div>
  );

  function search() {
    axios.get(COCKTAIL_BASE_URL + "search.php?s=" + cocktailName).then((res) => {
      setisFirst(false);
      setCocktailInfo(res.data);
      console.log(res.data.drinks[0]);
    });
  }

}

export default App;

//https://www.thecocktaildb.com/api.php