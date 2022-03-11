import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Loading } from './container';
import AOS from 'aos';
import 'aos/dist/aos.css';

// const Home = React.lazy(() => (import("./HomePage")));

const Home = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./HomePage")), 1000)
    )
);

AOS.init({
  duration: 500
});


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
