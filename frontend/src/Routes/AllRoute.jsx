import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Movies from '../Components/Movies';
import MyProfile from '../Components/MyProfile';
import MyWatchlist from '../Components/MyWatchlist';
import Signup from './Signup';
import PremiumPlan from '../Components/PremiumPlan';
import SignUpOtp from './SignupOtp';
import LoginOtp from './LoginOtp';
import Payment from '../Components/Payment';
import Search from "../Components/search";
import PrivateRoute from "../Components/PrivateRoute";

const AllRoute = () => {
    return (
       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginotp" element={<LoginOtp />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/signupotp" element={<SignUpOtp />} />

            <Route path="/movies" element={<PrivateRoute><Movies /></PrivateRoute>} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/myprofile/watchlist" element={<MyWatchlist />} />
            <Route path="/premiumplan" element={<PrivateRoute><PremiumPlan /></PrivateRoute>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    );
};

export default AllRoute;
