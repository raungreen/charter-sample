import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavigationBar from './components/NavigationBar';
import PurchaseTable from './components/PurchaseTable';

const App = () => {
  return (
    <div className="container-fluid">
      <NavigationBar />
      <PurchaseTable />
    </div>
  );
};

export default App;
