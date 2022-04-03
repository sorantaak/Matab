import NewsItem from "./NewsItem";

function News() {
  return (
    <div className="pb-20">
      <div className="w-4/5 container mx-auto">
        <h2 className="text-2xl py-10 text-center">آخرین اخبار</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-5">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </div>
  );
}

export default News;
