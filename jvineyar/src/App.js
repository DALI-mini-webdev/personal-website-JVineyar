import React from 'react';
import logo from './logo.svg';
import './App.css';
import forest from "./Mysterious Forest Cropped.png";
import waterfall from "./IMG_5528.jpg";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar />
    <head>
      <title>Joseph Vineyard's Website</title>
    </head>


    <body>
      <h1 className="HeaderBackground"><span>What is there to know about Jo?</span></h1>
      <hr />
      <table className = "content-center">
        <tr>
          <td><h2 className = "left-title">I am invested in Art!</h2></td>
          <td><h2 className = "right-title">I am invested in CS!</h2></td>
        </tr>
        <tr>
          <td><p className = "left-paragraph">My intrest and passion in art does not neccisarily come from a
           admiration of the act of drawing or painting, but from what worlds
           and stories that I can create with them and bring to life. So I am
           interested in any way and medium that can let me express my stories!
           Which brings on part two.</p></td>
           <td><p className = "right-paragraph">To me CS has a similar appeal as art does as I can create something
           that I envision according to my desires. I enjoy it also as a form
           of puzzle solving that keeps me entertained in the process and I hope
           to combine the two interests which currently may be game design
           or animation.</p></td>
        </tr>
      </table>
      <h2 style = {{textAlign: "center", fontSize: "60px"}}>Here are some pieces of
         art I made a few months ago!</h2>
      <div className={"row"}>

       <div className={"column"}>
         <img src={forest} style={{width:"100%"}} alt="Mysterious Forest"></img>
       </div>
       <div className={"column"}>
         <img src={waterfall} className = "image-right" alt="Mysterious Waterfall"></img>
       </div>

      </div>
    </body>
    </div>
  );
}

export default App;
