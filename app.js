const api_url = "https://jsonplaceholder.typicode.com/users";

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    data.length;
    console.log(data);
   
    // data.forEach(data => console.log("company(name)"));
    let companyName = data.map(function (element) {
        // return `${data.company}`;
        
        console.log(element.company.name);
    })
    
}

// Calling that async function
getapi(api_url);


