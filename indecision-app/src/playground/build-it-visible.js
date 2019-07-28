
const app = document.getElementById('app');
let count = 0;  
let details = "";
let btnText = "Show details"; 

const onDetailShow = () => {
    if ( count === 0){
        details = <p>Hey. These are some details you can now see</p>;
        count++; 
    }
    else{
        details = "";
        count--; 
    }
   
    render(); 
}; 
 
const render = () => {

const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onDetailShow}>{count == 0 ? "Show Details" : "Hide Details"}</button>
        {details}
    </div>
)
ReactDOM.render(template, app);

}
render(); 

