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

const AllRoute = () => {
    return (
       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginotp" element={<LoginOtp />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/signupotp" element={<SignUpOtp />} />

            <Route path="/movies" element={<Movies />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/myprofile/watchlist" element={<MyWatchlist />} />
            <Route path="/premiumplan" element={<PremiumPlan />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    );
};

export default AllRoute;
