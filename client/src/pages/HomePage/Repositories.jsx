import React, { useState } from "react";

const Repositories = ({ repositories, onDeleteRepo }) => {
  return (
    <div className="repositories">
      <h2 className="title">Repositórios</h2>
      <ul className="list">
        {repositories.map((repository) => (
          <li className="item" key={repository._id}>
            <div className="info">
              <div className="owner">
                {repository.name.substring(repository.name.indexOf("/") + 1)}
              </div>
              <div className="name">
                {repository.name.substring(0, repository.name.indexOf("/"))}
              </div>
            </div>
            <button onClick={() => onDeleteRepo(repository)} className="delete">
              Apagar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
