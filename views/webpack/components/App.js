import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Containers
const Layout = React.lazy(() => import('./containers/Layout'));

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )
  
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
            <Routes>
              <Route path="*" name="Home" element={<Layout />}/>
            </Routes>
        </React.Suspense>
      </BrowserRouter>
    )
  }
}

export default App;