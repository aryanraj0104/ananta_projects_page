import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Board = lazy(() => import('../tabs/Board'));

const Display= ()=>{
  return (
    <div className='max-w-screen flex justify-center items-center text-white text-7xl'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/board" element={<Board />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Display;