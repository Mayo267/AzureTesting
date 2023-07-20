// const express = require('express');
// const mssql = require('mssql');
// const cors = require('cors');

// const app = express();
// const port = 5000; // Replace with the port you want your backend server to run on

// app.use(express.json());
// app.use(cors());

// // Replace with your Azure database connection configuration
// const config = {
//   user: 'your_username',
//   password: 'your_password',
//   server: 'your_server_name.database.windows.net',
//   database: 'your_database_name',
//   options: {
//     encrypt: true, // Required for Azure
//     trustServerCertificate: true // Required for Azure
//   }
// };

// app.post('/api/addData', async (req, res) => {
//   try {
//     const { name, age, email } = req.body;

//     await mssql.connect(config);

//     // Replace 'your_table_name' with the name of the table where you want to insert the data
//     const query = `INSERT INTO your_table_name (name, age, email) VALUES (@name, @age, @email)`;
    
//     await mssql.query(query, {
//       name: mssql.NVarChar(100),
//       age: mssql.Int,
//       email: mssql.NVarChar(100),
//     }, {
//       name,
//       age,
//       email,
//     });

//     await mssql.close();

//     res.status(201).json({ message: 'Data added successfully' });
//   } catch (error) {
//     console.error('Error adding data:', error);
//     res.status(500).json({ error: 'Error adding data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Backend server is running on port ${port}`);
// });