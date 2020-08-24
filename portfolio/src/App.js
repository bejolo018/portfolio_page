import React from 'react'

import Footer from './Components/Footer'
import Home from './Views/Home'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">      
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
