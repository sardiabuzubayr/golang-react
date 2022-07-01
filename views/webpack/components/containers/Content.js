import React, {Suspense} from 'react'
import {
  Navigate,
  Route,
  Routes 
} from 'react-router-dom'
// routes config
import routes from '../../routes'

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

const Content =()=>{
    return (
        <>
        <main className="c-main">
            <Suspense fallback={loading}>
              <Routes >
                {routes.map((route, idx) => {
                  return route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      element={
                        <route.component />
                      }
                      />
                  )
                })}
              </Routes>
            </Suspense>
        </main>
        </>
      )
}

export default Content