import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import NewRepo from "./NewRepo";
import Repositories from "./Repositories";
import Search from "./Search";

import {
  getRepositories,
  createRepositories,
  destroyRepositories,
} from "../../services/api";

import "./styles.css";

const userId = "627a9312c9ef9b375781ace4";

export default function HomePage() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = "") => {
    try {
      setLoading(true);
      const response = await getRepositories(userId, query);
      setRepositories(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    loadData(query);
  };

  const handleDeleteRepo = async (repository) => {
    console.log("delete", repository);
    await destroyRepositories(userId, repository._id);
    await loadData();
  };

  const handleAddRepo = async (url) => {
    console.log("AddRepo", url);
    try {
      await createRepositories(userId, url);
      await loadData();
    } catch (err) {
      console.error(err);
      setLoadingError(true);
    }
  };

  if (loadingError) {
    return (
      <div className="loading">
        Erro ao carregar dados.
        <Link to="/login">Voltar</Link>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }
  return (
    <div id="main">
      <Nav onLogout={handleLogout} />

      <Search onSearch={handleSearch} />

      <Repositories
        repositories={repositories}
        onDeleteRepo={handleDeleteRepo}
      />

      <NewRepo onAddRepo={handleAddRepo} />
    </div>
  );
}
