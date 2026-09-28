import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ITEMS = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango', 'Orange', 'Pineapple', 'Strawberry'];

const SearchFilter = () => {
  const [query, setQuery] = useState('');

  const keyword = query.trim().toLowerCase();
  const filteredItems = ITEMS.filter((item) => item.toLowerCase().includes(keyword));

  return (
    <div className="exercise-box">
      <div className="mx-auto" style={{ maxWidth: 320 }}>
        <Form.Control
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          aria-label="Search items"
        />
        {filteredItems.length === 0 ? (
          <p className="text-white-50 mt-3 mb-0">No items found</p>
        ) : (
          <ul className="exercise-list mt-3 mb-0">
            {filteredItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
