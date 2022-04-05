function OurMotto({ title, subTitle }) {
  return (
    <div className="text-brightGold lg:text-right sm:pt-0 text-center">
      <h1 className="text-2xl lg:text-xl">{title}</h1>
      <h2 className="text-3xl font-bold leading-loose">{subTitle}</h2>
    </div>
  );
}

export default OurMotto;
