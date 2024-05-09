import ButtonsComponent from "./ButtonsComponent";
const BookDetail = ({ book }) => {
  {
    /*

 const dispatch = useDispatch();
  const items = useSelector(selectItems);

  useEffect(() => {
    const foundItem = items.find((item) => item.id === book.id);
    if (foundItem) {
      setIsAdded(true);
      setQuantity(foundItem.quantity);
    } else {
      setIsAdded(false);
      setQuantity(0);
    }
  }, [items, book]);
  const [isAdded, setIsAdded] = useState(false);
 */
  }

  if (book.saleInfo.saleability === "FOR_SALE") {
    return (
      <div className="single-book" key={book.id}>
        <div className="image-container-book">
          {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Thumbnail"
              />
            )}
        </div>
        <div className="content-container">
          <div className="info">
            <h2>{book.volumeInfo.title}</h2>

            {book.volumeInfo.authors && (
              <p className="author"> ~{book.volumeInfo.authors.join(", ")}</p>
            )}
            {/*book.volumeInfo.publisher && (
            <p> Publisher: {book.volumeInfo.publisher}</p>
          )}
          {book.volumeInfo.publishedDate && (
            <p> Date of publication: {book.volumeInfo.publishedDate}</p>
          )*/}
            <span>Read more</span>
          </div>

          <div className="price">
            <p>
              {book.saleInfo.listPrice.amount}{" "}
              {book.saleInfo.listPrice.currencyCode}
            </p>
          </div>
          {/*book.volumeInfo.description && (
            <p> Description: {book.volumeInfo.description}</p>
          )*/}
        </div>
        <ButtonsComponent book={book} />
      </div>
    );
  }
};

export default BookDetail;
