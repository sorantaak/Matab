function TopNavBarFeatuers({ icon, title }) {
  return (
    <div className="flex flex-row text-darkGold text-xs basis-1/2 ml-2">
      <div className="ml-1 text-brightGol">{title}</div>
      <div className="m-0 ">{icon}</div>
    </div>
  );
}

export default TopNavBarFeatuers;
