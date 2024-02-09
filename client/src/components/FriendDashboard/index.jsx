// FRIEND MODAL!!!!!

import { useState } from "react";
import FriendModal from "./FriendModal";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import './FriendDashboard.css'

const FriendDashboard = () => {
  const { loading, data, error } = useQuery(QUERY_ME);

  // const userData = data?.me || {};

  // const [savedCuisines, setSavedCuisines] = useState(
  //   userData.savedCuisines || []
  // );

  // if (loading) return <p>Loading...</p>;

  // const handleUpdateCuisines = async () => {
  //   // Refetch user data to update savedCuisines
  //   await refetch();
  //   setSavedCuisines(userData.savedCuisines || []);
  // };

  return (
    <div className="select-friend-dashboard">
      <div className="center">
        <div className="pref-container">
          <p>Select Friends...It's time to Eat!</p>
          <ul>
            {/* {userData.savedCuisines?.map((cuisine) => (
              <li key={cuisine.cuisineId}>{cuisine.name}</li>
            ))} */}
          </ul>
        </div>
      </div>
      <div className="center">
        {/* <FriendModal /> */}
      </div>
    </div>
  );
};

export default FriendDashboard;
