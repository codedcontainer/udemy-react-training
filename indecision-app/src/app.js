console.log('App.js is running!');

//if statments
//ternary operators
// logical and operator

var app = {
    title: "Indecision App", 
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
};

// JSX - JavaScript XML
var template = (
<div>
    <h1>{app.title}</h1>
    { app.subtitle && <p>{app.subtitle}</p> }
    <p>{app.options.length > 0? 'Here are your options' : 'No Options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div> 
);

var user = {
   // name: 'Jason', 
    age: 222,
    location: "Indianapolis"
}

var userName = "Jason Utt";
var userAge = 2;  
var userLocation = "Indianapolis";

function getLocation(location){
    if ( location ){
        return <p>Location: {location}</p> 
    }
    else{
        return undefined;
    }
}


var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age) >= 18 && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app'); 
ReactDOM.render(template, appRoot); 