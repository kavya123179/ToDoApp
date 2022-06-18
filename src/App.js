import { useState } from "react";
import React from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState();

  var arr;
  function add() {
    if (edit) {
      arr = list;
      arr.splice(index, 1, input);
      setList([...arr]);
      setEdit(false);
      setInput("");
    } else {
      setList([...list, input]);
      setInput("");
    }
  }

  return (
    <>
      <div id="heading">
        <h1> To-Do List </h1>

        <input
          placeholder="Add Todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        {edit ? (
          <>
            <button
              onClick={() => {
                if (input) {
                  add();
                }
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setInput("");
                setEdit(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              if (input) {
                add();
              }
            }}
          >
            Add
          </button>
        )}
        <h6>By Kavya Muppa </h6>
      </div>
      <div id="body">
        <ul>
          {list.map((item, idx) => {
            return (
              <li>
                {item}
                <br />
                <button
                  onClick={() => {
                    arr = list;
                    arr.splice(idx, 1);
                    setList([...arr]);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={(e) => {
                    // e.target.backgroundColor = "red";
                    setEdit(true);
                    setInput(list[idx]);
                    setIndex(idx);
                    // add(index);
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
