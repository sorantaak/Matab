function TopNavBarFeatuers({ icon, title }) {
  return (
    <div className="flex flex-row ltr:flex-row-reverse text-darkGold text-sm basis-1/2 gap-1">
      <div className="text-brightGol">{title}</div>
      <div className="m-0 ">{icon}</div>
    </div>
  );
}

export default TopNavBarFeatuers;
