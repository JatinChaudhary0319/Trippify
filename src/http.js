import { baseApi } from "./utils/helperData";

export async function fetchAvailablePlaces() {
    const response = await fetch(`${baseApi}/places`);
    const resData = await response.json();

    if(!response.ok){
      throw new Error("Failed to fetch data...");
    }

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch(`${baseApi}/user-places`, {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error("Failed to upload user data...");
    }

    return resData.message;
}

export async function fetchUserPlaces() {
    const response = await fetch(`${baseApi}/user-places`);
    const resData = await response.json();

    if(!response.ok){
      throw new Error("Failed to fetch user data...");
    }

    return resData.places;
}