import React, { useState, useEffect } from 'react';

/*function getCatsRequest() {
    const request = require('request');
    var name = 'abyssinian';
    request.get({
        url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
        headers: {
            'X-Api-Key': 'C2OpDKxP7Ol2jEl6sHZu5w==gmi15s64THlNOBZL'
        },
    }, function (error, response, body) {
        if (error) return console.error('Request failed:', error);
        else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else console.log(body)
    });
}*/

export const Body = () => {
    return (<>

        <div className="centered-container">
            <form style={{ marginTop: 15 }}>
                <div className="row">
                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example">
                            <option value="name" defaultValue>Breed name</option>
                            <option value="2">Minimum weight</option>
                            <option value="3">Maximum weight </option>
                        </select>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <input type="email" className="form-control" id="searchInput" placeholder="input your search keywords"></input>
                        </div>
                    </div>
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">GET</button>
                    </div>
                </div>
            </form>
        </div>

    </>)
}