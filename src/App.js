import logo from "./logo.svg";
import "./App.css";
import {  Grid,  } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Middlebar from "./components/Middlebar";
import Rightbar from "./components/Rightbar";

function App() {
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Leftbar />
        </Grid>
        <Grid item xs={12} md={8}>
         <Middlebar />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
