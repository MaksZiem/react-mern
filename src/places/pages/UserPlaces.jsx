import React from "react";

import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of our own reece james",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddzTi7xt_wp8oDb1Cp4Ocr4QsMPDa8qKonz4pMXfGoA&s",
    address: " 20 W 34th St., New York, NY 10001, Stany Zjednoczone",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Empire state building",
    description: "One of our own reece james",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddzTi7xt_wp8oDb1Cp4Ocr4QsMPDa8qKonz4pMXfGoA&s",
    address: " 20 W 34th St., New York, NY 10001, Stany Zjednoczone",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
