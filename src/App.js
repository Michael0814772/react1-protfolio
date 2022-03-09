import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Loading } from './container';

const Home = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./HomePage")), 3000)
    )
);


function App() {
  return (
    <div className="bg-backgroundcl">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
