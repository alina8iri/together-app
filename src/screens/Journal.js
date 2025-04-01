import React, { useState } from 'react';
const Journal = () => {
  const [entry, setEntry] = useState('');
  return (
    <div style={{ padding: '20px' }}>
      <h2>Private Journal</h2>
      <textarea
        rows="10"
        cols="50"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts..."
        style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
      />
    </div>
  );
};
export default Journal;