import logo from './logo.svg';
import './App.css';
import DataDisplay from './DataDisplay';

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();

// // Replace these values with your Azure MySQL database credentials
// const dbConfig = {
//   host: 'mayoandeggsdb-server.database.windows.net',
//   user: 'mayo@amayo0925gmail.onmicrosoft.com',
//   password: 'Amelia309%%',
//   database: 'mayoandeggsdb-server',
// };

// // Create a pool to manage database connections
// const pool = mysql.createPool(dbConfig);

// app.use(cors());

// // Define an API endpoint to fetch data from the database
// app.get('/data', (req, res) => {
//   const sqlQuery = 'SELECT * FROM your_table_name'; // Replace your_table_name with the actual table name in your database
//   pool.query(sqlQuery, (err, result) => {
//     if (err) {
//       console.error('Error executing the SQL query:', err);
//       res.status(500).json({ error: 'Error fetching data from the database' });
//     } else {
//       res.json(result);
//     }
//   });
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
