import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  const editItem = (index) => {
    setInputValue(items[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const updateItem = () => {
    const newItems = items.map((item, index) =>
      index === currentIndex ? inputValue : item
    );
    setItems(newItems);
    setInputValue("");
    setIsEditing(false);
    setCurrentIndex(null);
  };

  return (
    <div>
      <div className="w-full min-h-[100vh] bg-slate-950 flex gap-10 justify-center items-center">
        <div className="w-[60vw] border border-slate-800 shadow-lg flex py-20 flex-col items-center">
          <h1 className="text-xl font-semibold text-yellow-400 mb-20">
            To-Do App
          </h1>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {isEditing ? (
            <button className="text-blue-400" onClick={updateItem}>
              Update Item
            </button>
          ) : (
            <button className="text-blue-400" onClick={addItem}>
              Add New
            </button>
          )}
          <ul className="my-10 w-full justify-center">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between w-[30vw] border-2 border-slate-800 text-yellow-400 py-2 px-6 items-center"
              >
                <div>{item}</div>
                <div className="flex gap-4">
                  <button
                    className="text-green-500"
                    onClick={() => editItem(index)}
                  >
                    <MdEdit size={20} />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => deleteItem(index)}
                  >
                    <RiDeleteBin6Fill size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
