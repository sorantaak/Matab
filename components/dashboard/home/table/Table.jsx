import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

function Table({ tableTitle, thData, tBodyData, isAction }) {
  return (
    <div className="relative overflow-x-auto mt-2 hidden md:block">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-sidebar">
          <tr className="transition-all hover:shadow-lg">
            {thData.map((item, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {tBodyData.map((user) => (
            <tr
              key={user.id}
              className="border-y border-white even:bg-gray-100 odd:bg-gray-50 transition-all hover:tr-shadow"
            >
              <td className="px-6 py-3">
                {user.userPhotoSrc ? (
                  <img
                    src={user.userPhotoSrc}
                    alt="user"
                    className="rounded-full w-5 h-5"
                  />
                ) : (
                  <div className="w-5 h-5">
                    <FaIcons.FaUserCircle className="h-full w-full text-gray-300" />
                  </div>
                )}
              </td>
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.family}</td>
              <td className="px-6 py-3">{user.visitDate}</td>
              <td className="px-6 py-3">{user.visitTime}</td>
              <td className="px-0 py-3 text-darkGold flex justify-end items-center">
                <span className="pt-[2px]">{user.number}</span>{" "}
                <FaIcons.FaMobileAlt />
              </td>
              <td className="px-6 py-3">{user.lastStatus}</td>
              {isAction && (
                <td className="">
                  <div className="flex flex-row justify-center items-center">
                    <div className="rounded-full w-8 h-8 transition-all bg-blue-300 hover:bg-blue-400 flex justify-center items-center cursor-pointer ml-1">
                      <GrIcons.GrEdit />
                    </div>
                    <div className="rounded-full w-8 h-8 transition-all bg-red-500 hover:bg-red-600 flex justify-center items-center cursor-pointer">
                      <MdIcons.MdDelete className="text-lg text-white" />
                    </div>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
