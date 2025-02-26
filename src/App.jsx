import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import DefaultLayout from "./layouts/DefaulLayout";
function App() {
  return (
    /*BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}></Route>
      </Routes>
    </BrowserRouter>*/
    <DefaultLayout></DefaultLayout>
  );
}

export default App;
