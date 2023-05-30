import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Dnditto from './Dnditto';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Dnditto />
  </React.StrictMode>
);
