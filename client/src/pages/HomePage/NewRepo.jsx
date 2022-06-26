import React, { useState } from "react";

const NewRepo = ({ onAddRepo }) => {
  const [newRepo, setNewRepo] = useState("");
  return (
    <div className="new">
      <label htmlFor="new-repo" className="new-repo">
        Novo Repo
      </label>
      <input
        type="url"
        name="new-repo"
        id="new-repo"
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
      />
      <button onClick={() => onAddRepo(newRepo)} className="add">
        Adicionar
      </button>
    </div>
  );
};

export default NewRepo;
