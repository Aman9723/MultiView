import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyProfile from '../components/MyProfile';
import MyWatchlist from '../components/MyWatchlist';

const AllPages = () => {
    return (
        <Routes>
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/myprofile/watchlist" element={<MyWatchlist />} />
        </Routes>
    );
};

export default AllPages;
