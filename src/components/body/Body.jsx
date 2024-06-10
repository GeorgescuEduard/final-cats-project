import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CatModal } from './cat-modal';
import { CatDetails } from './CatDetails';
import { api_key } from '../../config';

export const Body = () => {

    const [curentCat, setCurrentCat] = useState();

    var search_filter;
    var search_variable;
    var search_value;
    var search_explanation;

    const fetchCats = async () => {

        search_filter = document.getElementById("selectSearch").value;
        search_variable = document.getElementById("searchInput").value;

        document.getElementById("catImageArea").src = "loading-cat.jpg";
        if (search_variable) {
            const response = await axios.get('https://api.api-ninjas.com/v1/cats?' + search_filter + "=" + search_variable, {
                headers: { 'X-Api-Key': api_key }
            });
            if (response.data[0] == null) {
                document.getElementById("catImageArea").src = "no-cat.png";
            }
            else {
                setCurrentCat(response.data[0]);
                document.getElementById("catImageArea").src = response.data[0].image_link;
                return response.data[0];
            }
        }
        else {
            document.getElementById("catImageArea").src = "type-something-cat.png";
        }
    }

    /*   useEffect(() => {
           updateSearchValueAndExplanation();
       }, []);
   
   
       const updateSearchValueAndExplanation = () => {
           switch (document.getElementById("selectSearch").value) {
               case "name":
                   search_value = "Breed name";
                   search_explanation = " - the name of cat breed <i>(ex. abyssinian, siamese)</i>";
           }
       }*/

    console.log(curentCat);
    return (<>

        <div className="centered-container">
            <form style={{ marginTop: 15 }}>
                <div className="row">
                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example" id="selectSearch">
                            <option value="name" defaultValue>Breed name</option>
                            <option value="min_weight">Minimum weight</option>
                            <option value="max_weight">Maximum weight </option>
                            <option value="min_life_expectancy ">Minimim life expectancy </option>
                            <option value="max_life_expectancy">Maximum life expectancy </option>
                            <option value="shedding">Shedding </option>
                            <option value="family_friendly">Family Friendly </option>
                            <option value="playfulness">Playfulness </option>
                            <option value="grooming">Grooming </option>
                            <option value="other_pets_friendly">Other pets friendly </option>
                            <option value="children_friendly">Children Friendly </option>
                        </select>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="searchInput" placeholder="input your search keywords"></input>
                        </div>
                    </div>
                    <div className="col-1">
                        <button type="button" onClick={fetchCats} className="btn btn-primary">GET</button>
                    </div>
                </div>
                <p style={{ fontSize: 17 }}> <b className="highlight-text-search">{search_value}</b>{search_explanation}</p>
            </form>
        </div>
        <>{curentCat && <CatDetails cat={curentCat} />}</>
        <img className="image_container" id="catImageArea" src="mrfresh.jpeg" width="400px" alt="mrfresh" />
        {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Show details</button>*/}
        <CatModal />
    </>)
}