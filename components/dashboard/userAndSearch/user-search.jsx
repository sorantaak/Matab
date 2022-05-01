import React from "react";
import SearchDashboard from "./search-dashboard";
import UserAvatar from "./user-avatar";

function UserAndSearch() {
  return (
    <div className=" container w-4/5 mx-auto">
      <div className="py-2 flex flex-row justify-between">
        <SearchDashboard />
        <UserAvatar />
      </div>
    </div>
  );
}

export default UserAndSearch;
