function TopNavBarFeatuers({ icon, title }) {
  return (
    <div className="flex flex-row align-middle justify-center ltr:flex-row-reverse text-darkGold text-sm  gap-1">
      <div className="text-brightGol">{title}</div>
      <div className="m-0 ltr:pt-1">{icon}</div>
    </div>
  );
}

export default TopNavBarFeatuers;
