import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            placeholder="Digite o título"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" key="default">
            Selecione uma categoria
          </option>
          <option value="Trabalho" key="work">
            Trabalho
          </option>
          <option value="Pessoal" key="personal">
            Pessoal
          </option>
          <option value="Estudos" key="studies">
            Estudos
          </option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
