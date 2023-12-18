import React, { useState, useEffect} from 'react'
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Gameplay from './routes/Gameplay'
import BonusPoints from './routes/BonusPoints'
import StarterPage from './routes/StarterPage'
import FourZeroFour from './routes/FourZeroFour'
import Admin from './routes/Admin'
import styled from 'styled-components'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyBHwk5NQwZ6n-BXOz9QPy7lo835dGpAxHc",
  authDomain: "tvot-d52ff.firebaseapp.com",
  databaseURL: "https://tvot-d52ff.firebaseio.com",
  projectId: "tvot-d52ff",
  storageBucket: "tvot-d52ff.appspot.com",
  messagingSenderId: "776359638884",
  appId: "1:776359638884:web:4db0292713d034dec0ac71"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Container = styled.div`
  width:100%;
  height:100%;
  box-sizing:border-box;
`

const AppContainer = styled.div`
  
  min-height:100vh;
  width:100vw;
  // padding:24px;
  box-sizing:border-box;
`
function App() {
  const [imagesLoaded, setImagesLoaded ] = useState(false)

  const router = createHashRouter([
     {
      path: "/",
      element: <StarterPage/>,
    },
    {
      path: "/donotgotothispage",
      element: <Admin database={database}/>,
    },
     {
      path: "/83b05fba-47b0-4153-9274-9a63a381abc7",
      element: <Gameplay team="black" database={database}/>,
    },
    {
      path: "/0efdbd4b-94d4-47cc-b2a8-9b7a4f60b742",
      element: <Gameplay team="blue"database={database}/>,
    },
    {
      path: "/48792db6-3295-4c2e-87f6-b8dfc1a8faf2",
      element: <Gameplay team="red"database={database}/>,
    },
    {
      path: "/79984603-ab35-4f27-a1dc-71fa3fda72b7",
      element: <Gameplay team="green"database={database}/>,
    },
    {
      path: "/02d5bbad-7958-42a6-9c76-db0976861e6e",
      element: <Gameplay team="pink"database={database}/>,
    },
    {
      path: "/0ba73577-8b1f-4fb1-8b76-1a4c140ba448",
      element: <Gameplay team="yellow"database={database}/>,
    },
    {
      path: "/onlybobbycangotothispage",
      element: <BonusPoints database={database}/>,
    },
]);



  return (
    <AppContainer>
    <Container>
      { database &&
        <RouterProvider router={router } />
      }  
        
      
    </Container>  
    </AppContainer>
  );
}

export default App;
