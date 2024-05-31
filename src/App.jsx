import { useState } from 'react'
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const isValueValid = value.length >= 3;

  const onInputButtonClick = () => {
    const newValue = prompt("Введите значение:");
    if (newValue.length < 3) {
      setError("Значение должно содержать минимум 3 символа");
    } else {
      setError("");
      setValue(newValue);
    }
  };

  const onAddButtonClick = () => {
    if (isValueValid) {
      const newItem = { id: Date.now(), value };
      setList([...list, newItem]);
      setValue("");
      setError("");
    }
  };

  return (
    <div className="app">
      <h1>Ввод значения</h1>
      <p>Текущее значение: {value && `"${value}"`}</p>
      {error && <div>{error}</div>}
      <button onClick={onInputButtonClick}>Ввести новое</button>
      <button onClick={onAddButtonClick} disabled={!isValueValid}>
        Добавить в список
      </button>
      <div className="list-container">
        <h2>Список:</h2>
        {list.length === 0 ? (
          <p>Нет добавленных элементов</p>
        ) : (
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                {item.value} ({new Date(item.id).toLocaleString()})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;