import * as FaIcons from "react-icons/fa";
function CardTable({ tableTitle, tBodyData }) {
  return (
    <div className="my-8 md:hidden">
      <h2 className="mb-2">{tableTitle}</h2>
      <div className=" grid grid-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11 ">
        {tBodyData.map((user) => (
          <div
            key={user.id}
            className="rounded-lg overflow-hidden flex flex-col space-y-3 shadow-xl border"
          >
            <div className="w-full">
              {user.userPhotoSrc ? (
                <img
                  src={user.userPhotoSrc}
                  alt="user"
                  className="w-full h-full"
                />
              ) : (
                <div className="h-[273px] flex justify-center items-center w-full">
                  <FaIcons.FaUserCircle className="w-full h-full  text-gray-100" />
                </div>
              )}
            </div>
            <div className="text-center text-sidebarMenu text-sm mt-2">
              {user.name} {user.family}
            </div>
            <div className="flex felxt-row items-center text-sidebarMenu text-sm  px-2 justify-between">
              <h3>تاریخ ویزیت</h3>
              <p>{user.visitDate}</p>
            </div>
            <div className="flex felxt-row items-center text-sidebarMenu text-sm  px-2 justify-between">
              <h3>ساعت ویزیت</h3>
              <p>{user.visitTime}</p>
            </div>
            <div className="flex flex-row justify-center items-center text-sm text-darkGold gap-1">
              <div className="pt-1">{user.number}</div>
              <FaIcons.FaMobileAlt />
            </div>
            <div className="h-10 w-fulls bg-darkGold flex justify-center items-center text-sm text-white">
              <p className="text-center">{user.lastStatus}</p>
            </div>
          </div>
        ))}

        {/* <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div> */}
      </div>
    </div>
  );
}

export default CardTable;
