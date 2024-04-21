import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRepositories();
  }, [page]);

  const fetchRepositories = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/ifeanyiagujekwu/repos`);
      setRepositories(response.data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default RepositoryList;
