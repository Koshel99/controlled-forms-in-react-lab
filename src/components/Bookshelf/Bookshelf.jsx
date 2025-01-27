import { useState } from 'react';

const Bookshelf = () => {

    let initialState = {
        title: '',
        author: ''
};
    

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (event) => {
        const newFormData = { ...formData, [event.target.name]: event.target.value };
        setFormData(newFormData);
    };
    
    const handleAddBook = (event) => {
        event.preventDefault();
        if (formData.title && formData.author) {
            setBooks([...books, formData]);
            setFormData(initialState);
        }
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleAddBook}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;