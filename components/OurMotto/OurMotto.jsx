function OurMotto({ title, subTitle }) {
  return (
    <div className="text-brightGold space-y-5 pt-16 text-center sm:text-right sm:pt-0">
      <h1 className="text-xl">{title}</h1>
      <h2 className="text-4xl sm:text-6xl font-bold">{subTitle}</h2>
    </div>
  );
}

export default OurMotto;
