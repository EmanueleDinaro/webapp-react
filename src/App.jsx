import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";

import DefaultLayout from "./layouts/DefaulLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout></DefaultLayout>}>
          <Route index path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies/:id" element={<MoviePage></MoviePage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
