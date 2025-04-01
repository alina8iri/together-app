import React from 'react';
import { Link } from 'react-router-dom';
const Conflict = () => (
  <div style={{ padding: '20px' }}>
    <h2>Conflict Resolution</h2>
    <p>Practice taking turns with the 2-minute timer:</p>
    <Link to="/conflict/taketurns">
      <button style={{ padding: '10px', borderRadius: '5px' }}>Start Take Turns</button>
    </Link>
  </div>
);
export default Conflict;