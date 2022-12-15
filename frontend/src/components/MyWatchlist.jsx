import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileNavbar from './MyProfile';

const MyWatchlist = () => {
    return <ProfileNavbar cur={'watchlist'} />;
};

export default MyWatchlist;

