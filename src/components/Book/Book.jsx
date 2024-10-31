import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-slate-700   p-6 ">
        <figure className="bg-slate-400 py-8 rounded-xl">
          <img className=" h-[160px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 items-center">
            {tags.map((tag,i) => (
              <button key={i} className="btn btn-xs">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>by {author}</p>
          <div className="border border-slate-400 border-dashed "></div>
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline">{category}</div>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
