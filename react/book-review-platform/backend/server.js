const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const books = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Book ${i + 1}`,
  author: `Author ${i + 1}`,
}));

app.get("/api/books", (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  // Convert query params to numbers
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  // Calculate start and end indexes
  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const results = books.slice(startIndex, endIndex);

  res.json({
    currentPage: pageNumber,
    totalPages: Math.ceil(books.length / limitNumber),
    totalItems: books.length,
    data: results,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
