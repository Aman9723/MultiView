import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from '../Components/Login';
import Movies from '../Components/Movies';
import MyProfile from '../Components/MyProfile';
import MyWatchlist from '../Components/MyWatchlist';
import Signup from '../Components/Signup';
import PremiumPlan from '../Components/PremiumPlan';

const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/myprofile/watchlist" element={<MyWatchlist />} />
            <Route path="/premiumplan" element={<PremiumPlan />} />
        </Routes>
    );
};

export default AllRoute;
