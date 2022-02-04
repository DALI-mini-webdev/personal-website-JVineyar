import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <head>
      <title>Joseph Vineyard's Website</title>
    </head>


    <body>
      <h1><span>What is there to know about Jo?</span></h1>
      <hr />
      <h2>I am invested in Art!</h2>
      <p>My intrest and passion in art does not neccisarily come from a
         admiration of the act of drawing or painting, but from what worlds
         and stories that I can create with them and bring to life. So I am
         interested in any way and medium that can let me express my stories!
         Which brings on part two.</p>
      <h2>I am invested in CS!</h2>
      <p className = {"right_paragraph"}>To me CS has a similar appeal as art does as I can create something
         that I envision according to my desires. I enjoy it also as a form
         of puzzle solving that keeps me entertained in the process and I hope
         to combine the two interests which currently may be game design
         or animation.</p>
      <h2 style = {{textAlign: "center", fontSize: "60px"}}>Here are some pieces of
         art I made a few months ago!</h2>
      <div className={"row"}>

       <div className={"column"}>
         <img src="Mysterious Forest Cropped.png" style={{width:"100%"}} alt="Mysterious Forest"></img>
       </div>
       <div className={"column"}>
         <img src="IMG_5528.jpg" style={{width:"100%"}} alt="Mysterious Waterfall"></img>
       </div>

      </div>
    </body>
    </div>
  );
}

export default App;
