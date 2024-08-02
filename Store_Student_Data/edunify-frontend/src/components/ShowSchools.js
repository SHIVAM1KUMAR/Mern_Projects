import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        // const response = await axios.get('http://localhost:5000/api/schools');
        const response = await axios.get('https://mern-task-3pbq.onrender.com');
        setSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div>
      <h1>Schools</h1>
      <div>
        {schools.map((school) => (
          <div key={school._id}>
            <h2>{school.name}</h2>
            <p>{school.address}, {school.city}</p>
            <img src={`https://mern-task-3pbq.onrender.com/${school.image}`} alt={school.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;