import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar';

const MyWatchlist = () => {
    return <ProfileNavbar cur={'watchlist'} />;
};

export default MyWatchlist;
