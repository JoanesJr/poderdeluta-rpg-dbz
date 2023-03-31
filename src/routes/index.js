import { Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />}  />
        </Routes>
    );
}