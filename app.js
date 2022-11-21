const api_url = "https://jsonplaceholder.typicode.com/users";

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    data.length;
    console.log(data);
  
}

// Calling that async function
getapi(api_url);

// function count(api_url) {
//     return Object.keys(api_url).length;
//     console.log(api_url).length;
//   }
