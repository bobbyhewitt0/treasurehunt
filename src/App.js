import React from 'react'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Gameplay from './routes/Gameplay'
import StarterPage from './routes/StarterPage'
import FourZeroFour from './routes/FourZeroFour'
import Admin from './routes/Admin'
import styled from 'styled-components'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

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


  const router = createBrowserRouter([
     {
      path: "/",
      element: <StarterPage/>,
    },
    {
      path: "/dangerzone",
      element: <Admin database={database}/>,
    },
     {
      path: "/black",
      element: <Gameplay team="black" database={database}/>,
    },
    {
      path: "/blue",
      element: <Gameplay team="blue"database={database}/>,
    },
    {
      path: "/red",
      element: <Gameplay team="red"database={database}/>,
    },
    {
      path: "/green",
      element: <Gameplay team="green"database={database}/>,
    },
    {
      path: "/pink",
      element: <Gameplay team="pink"database={database}/>,
    },
    {
      path: "/yellow",
      element: <Gameplay team="yellow"database={database}/>,
    },
]);


  return (
    <AppContainer>
    <Container>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </Container>  
    </AppContainer>
  );
}

export default App;
