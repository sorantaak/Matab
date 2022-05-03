import React from "react";
import SearchDashboard from "./search-dashboard";
import UserAvatar from "./user-avatar";

function UserAndSearch(props) {
  return (
    <div className=" container w-11/12 mx-auto">
      <div className="py-2 flex flex-row justify-between">
        <SearchDashboard />
        <UserAvatar
          onClick={props.onShowBackPopUp}
          isClicked={props.isClicked}
        />
      </div>
    </div>
  );
}

export default UserAndSearch;
