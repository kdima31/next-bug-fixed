"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../../Redux/features/noteSlice";
import { useParams, useRouter } from "next/navigation";

const Edit = () => {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  let data = useSelector((state) => state.notes);
  let dispatch = useDispatch();

  const router = useRouter();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getData = (index) => {
      setTitle(data[index].title);
      setContent(data[index].content);
    };
    if (Number(id) < data.length) {
      getData(Number(id));
      console.table(title, content);
    } else {
      console.log("test");
    }
  }, [id, data]);

  const handleSave = (id) => {
    console.log(title, content);
    dispatch(edit({ id, values: { title, content } }));
    router.back();
  };
  return (
    <>
      <div className="wrapper">
        <h2 className="title">Notes Manager App</h2>
        <div className="add-note-card-container">
          <div className="add-note-card">
            <div>
              <h4 className="welcome-title"> Welcome to Notes App</h4>
              <input
                className="input-title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <textarea
                className="form"
                id="exampleFormControlTextarea1"
                value={content}
                placeholder="Take a note..."
                rows="3"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="center-btn">
              <button className="btn" onClick={() => handleSave(id)}>
                Save Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
