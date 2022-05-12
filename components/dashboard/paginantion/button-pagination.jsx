function ButtonPagination({ buttons, onChangePage, setPage }) {
  return (
    <div className="flex flex-row gap-2">
      {buttons.map((btn, index) => (
        <div
          key={index}
          className={`rounded-full text-white  w-8 h-8 flex justify-center items-center transition-all duration-75 pt-1 cursor-pointer hover:bg-brightGold ${
            setPage === btn ? "bg-darkGold" : "bg-[#d4d3d3]"
          }`}
          onClick={() => onChangePage(btn, 8)}
        >
          <span>{btn}</span>
        </div>
      ))}
    </div>
  );
}

export default ButtonPagination;
