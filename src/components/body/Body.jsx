import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CatModal } from './cat-modal';

export const Body = () => {

    const [curentCat, setCurrentCat] = useState();
    const api_key = 'C2OpDKxP7Ol2jEl6sHZu5w==gmi15s64THlNOBZL';
    var search_filter = "";
    var search_variable = 'abyssinian';
    var cat_image_url = "/mrfresh.jpeg";

    const fetchCats = async () => {
        const response = await axios.get('https://api.api-ninjas.com/v1/cats', {
            headers: { 'X-Api-Key': api_key },
            params: {
                'name': search_variable,
            }
        });
        console.log(response);
        return response.data[0];
    }

    function setCatPicture() {

    }

    function GetCatButton() {
        useEffect(() => {
            (async () => {
                const response = await fetchCats();
                setCurrentCat(response);
            })();
        }, []);
    }
    console.log(curentCat);
    return (<>

        <div className="centered-container">
            <form style={{ marginTop: 15 }}>
                <div className="row">
                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example">
                            <option value="name" defaultValue>Breed name</option>
                            <option value="min_weight">Minimum weight</option>
                            <option value="max_weight">Maximum weight </option>
                        </select>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="email" className="form-control" id="searchInput" placeholder="input your search keywords"></input>
                        </div>
                    </div>
                    <div className="col-1">
                        <button type="button" onClick={GetCatButton} className="btn btn-primary">GET</button>
                    </div>
                </div>
            </form>
        </div>
        <img className="image_container" id="catImageArea" src={cat_image_url} width="400px" alt="mrfresh" />
        {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Show details</button>*/}
        <CatModal />
    </>)
}