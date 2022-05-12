import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
function CardTable({ tableTitle, tBodyData, isAction }) {
  return (
    <div className=" my-8 md:hidden">
      <div className="grid grid-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11">
        {tBodyData.map((user) => (
          <div
            key={user.id}
            className="rounded-lg overflow-hidden flex flex-col  shadow-xl border justify-start relative"
          >
            {isAction && (
              <div className="absolute top-2 left-2 flex flex-col space-y-2">
                <div className="rounded-full w-10 h-10 bg-blue-300 flex justify-center items-center shadow-lg shadow-black/25">
                  <GrIcons.GrEdit />
                </div>
                <div className="rounded-full w-10 h-10 bg-red-500 flex justify-center items-center shadow-lg shadow-black/25">
                  <MdIcons.MdDelete className="text-lg text-white" />
                </div>
              </div>
            )}
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
            <div className="flex flex-row justify-center items-center text-sm text-darkGold gap-1 mb-11">
              <div className="pt-1">{user.number}</div>
              <FaIcons.FaMobileAlt />
            </div>
            <div className="h-10 w-full bg-darkGold flex justify-center items-center text-sm text-white absolute bottom-0">
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
