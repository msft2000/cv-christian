import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "../context";
import { LangingPage } from "../pages/LangingPage";

function App() {
    return (
        <BrowserRouter>
            <GeneralProvider>
                <Routes>
                    <Route path="/" element={<LangingPage />} />
                </Routes>
            </GeneralProvider>
        </BrowserRouter>
    );
}
export { App };