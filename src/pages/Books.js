import React, { useState } from "react";

const sampleBooks = [
  { id: 1, title: "Book One", author: "Author A", genre: "Fiction", price: 10, stock: 5, featured: true, description: "Description of Book One" },
  { id: 2, title: "Book Two", author: "Author B", genre: "History", price: 15, stock: 0, featured: false, description: "Description of Book Two" },
];

export default function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = Array.from(new Set(sampleBooks.map(b => b.genre)));

  const filteredBooks = sampleBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <h2>Book Collection</h2>
      <input
        type="text"
        placeholder="Search books or authors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="all">All Genres</option>
        {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
      </select>

      <div style={{ marginTop: "1rem" }}>
        {filteredBooks.length === 0 && <p>No books found</p>}
        {filteredBooks.map(book => (
          <div key={book.id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "10px" }}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>{book.genre} - ${book.price}</p>
            <p>{book.stock > 0 ? `${book.stock} in stock` : "Out of stock"}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
