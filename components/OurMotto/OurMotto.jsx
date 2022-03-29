function OurMotto({ title, subTitle }) {
  return (
    <div className="text-brightGold space-y-5 pt-5 lg:text-right sm:pt-0 mb-10 mt-24 lg:mt-0 text-center">
      <h1 className="text-3xl lg:text-xl">{title}</h1>
      <h2 className="text-4xl font-bold leading-loose">{subTitle}</h2>
    </div>
  );
}

export default OurMotto;
