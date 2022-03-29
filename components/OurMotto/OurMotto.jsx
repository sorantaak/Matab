function OurMotto({ title, subTitle }) {
  return (
    <div className="text-brightGold space-y-5 pt-5 text-center lg:text-right sm:pt-0 mb-10">
      <h1 className="text-xl">{title}</h1>
      <h2 className="text-4xl sm:text-6xl font-bold">{subTitle}</h2>
    </div>
  );
}

export default OurMotto;
