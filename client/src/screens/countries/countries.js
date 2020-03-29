import React from 'react';

export default function(){

    const [loading,SetLoading] = React.useState(true);
    fetch('https://corona-info-api.herokuapp.com/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });

    if(loading){
        return(
            <div>loading</div>
        )
    }
}