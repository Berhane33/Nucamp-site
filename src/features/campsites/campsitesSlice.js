import { CAMPSITES} from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
})

export const selectAllCampsites = (state) => {
    return CAMPSITES;
};

//export const selectRandomCampsite = () => {
//    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
//};

export const selectCampsiteById = (id) => (state) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = (state) => {
    return CAMPSITES.find((campsite) => campsite.featured);
};