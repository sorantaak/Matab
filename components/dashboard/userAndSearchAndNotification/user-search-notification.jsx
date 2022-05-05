import React from "react";
import Notification from "./notification";
import SearchDashboard from "./search-dashboard";
import UserAvatar from "./user-avatar";

function UserAndSearchNotificattion(props) {
  return (
    <div className="container mx-auto w-11/12 relative">
      {/* <div className="py-2 flex gap-4 md:gap-0 flex-row justify-between"> */}
      <div className="py-2 flex gap-4 md:gap-0 flex-row justify-between">
        <SearchDashboard onClickHamberger={props.onClickHamberger} />

        <div className="flex flex-row justify-center items-center gap-6">
          <Notification
            onClick={() => props.onClick("notification")}
            isClicked={props.isShowNotification}
          />
          <UserAvatar
            onClick={() => props.onClick("user")}
            isClicked={props.ishowUserMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default UserAndSearchNotificattion;
