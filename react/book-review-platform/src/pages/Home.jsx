import React from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import booklist from "../data/bookList.json"; 

const Home = () => {
  const trendingBooks = booklist.filter((book) => book.isTrending === "true");
  const featuredBooks = booklist.filter((book) => book.isFeatured === "true");

  return (
    <div>
      <TopNavbar />
      <div className="container mt-4">
        <h1 className="mb-4">Home</h1>
        <hr />

        {/* Trending Books Section */}
        <section className="mb-5">
          <h2>Trending Books</h2>
          <div className="row">
            {trendingBooks.length > 0 ? (
              trendingBooks.map((book) => (
                <div className="col-md-4 mb-3" key={book.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{book.bookname}</h5>
                      <p className="card-text">
                        <strong>Author:</strong> {book.authorname}
                      </p>
                      <p className="card-text">
                        <strong>Genre:</strong> {book.genre}
                      </p>
                      <p className="card-text">
                        <strong>Published:</strong> {book.published}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No trending books available.</p>
            )}
          </div>
        </section>

        {/* Featured Books Section */}
        <section>
          <h2>Featured Books</h2>
          <div className="row">
            {featuredBooks.length > 0 ? (
              featuredBooks.map((book) => (
                <div className="col-md-4 mb-3" key={book.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{book.bookname}</h5>
                      <p className="card-text">
                        <strong>Author:</strong> {book.authorname}
                      </p>
                      <p className="card-text">
                        <strong>Genre:</strong> {book.genre}
                      </p>
                      <p className="card-text">
                        <strong>Published:</strong> {book.published}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No featured books available.</p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
