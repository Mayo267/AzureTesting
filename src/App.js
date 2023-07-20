import logo from './logo.svg';
import './App.css';

const mysql = require('mysql');

// Replace these values with your Azure MySQL database credentials
const dbConfig = {
  host: 'mayoandeggsdb-server.database.windows.net',
  user: 'mayo@amayo0925gmail.onmicrosoft.com',
  password: 'Amelia309%%',
  database: 'mayoandeggsdb-server',
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database.');

  // Perform your database operations here
  // For example, you can execute queries, insert data, etc.

  // When you're done with the database connection, don't forget to end it
  connection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
      return;
    }
    console.log('Database connection closed.');
  });
});

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
