import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-slate-300 rounded-lg py-24 px-10 flex flex-col">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-black">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
