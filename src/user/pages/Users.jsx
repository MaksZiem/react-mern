import React from "react";

import UsersList from "../components/UsersList";

export const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      placeCount: 3,
    },
  ];

  return <UsersList items={USERS} />;
};
