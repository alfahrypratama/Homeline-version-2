import React from 'react';

const PesananTable = () => {
  const tableData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago' },
    { id: 4, name: 'Alice Williams', age: 35, city: 'San Francisco' },
    { id: 5, name: 'Charlie Brown', age: 22, city: 'Seattle' },
    { id: 6, name: 'Diana Miller', age: 27, city: 'Miami' },
    { id: 7, name: 'Elijah Davis', age: 32, city: 'Austin' },
    { id: 8, name: 'Fiona Wilson', age: 29, city: 'Denver' },
    { id: 9, name: 'Gary Lee', age: 31, city: 'Portland' },
    { id: 10, name: 'Hannah Martin', age: 26, city: 'Phoenix' },
    { id: 11, name: 'Isaac Clark', age: 33, city: 'Atlanta' },
  ];

  return (
    <table className="table border mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Usia</th>
          <th>Kota</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PesananTable;
