import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);

const book=data.find(book=>book.bookId ===id);
    const {
      image,
      bookName,
      author,
      category,
      review,
      tags,
      totalPages,
      publisher,
      yearOfPublishing,
      rating,
    } = book;


  return (
    <div>
      <h1 className="text-2xl  text-center">Details</h1>
      <div className="hero bg-slate-700 rounded-lg ">
        <div className="hero-content flex-col lg:flex-row p-8">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-2">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p>by {author}</p>
            <button className="btn btn-xs">{category}</button>
            <div className="divider"></div>
            <p>
              <strong>Review:</strong>
              {review}
            </p>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <p>#{tag}</p>
              ))}
            </div>
            <div className="divider"></div>
            <p>
              Number of Pages:<strong> {totalPages}</strong>
            </p>
            <p>
              Publisher:<strong> {publisher}</strong>
            </p>
            <p>
              Year of Publishing:<strong> {yearOfPublishing}</strong>
            </p>
            <p>
              Rating:<strong> {rating}</strong>
            </p>

            <div>
              <div className="mt-4">
                <button className="btn btn-outline btn-primary">Read</button>
                <button className="btn  btn-primary ml-3">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;



