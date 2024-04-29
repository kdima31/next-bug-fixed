"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "./Redux/features/noteSlice";
import { useRouter } from "next/navigation";
import "../app/globals.css";

function Notes() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  let data = useSelector((state) => state.notes);
  let dispatch = useDispatch();
  const router = useRouter();

  const handleSave = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      dispatch(add({ title, content }));
      setTitle("");
      setContent("");
    } else {
      console.log("Title or content is empty!");
    }
  };

  let handleDelete = (index) => {
    dispatch(del(index));
  };

  // let handleEdit = (i) => {
  // 	router.push(`/update/${i}`);
  // };

  return (
    <>
      <div className="wrapper">
        <h2 className="title">Notes Manager App</h2>
        <div className="add-note-card-container">
          <div className="add-note-card">
            <h3 className="welcome-title"> Welcome to Notes App</h3>
            <div>
              <input
                className="input-title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="form"
                id="exampleFormControlTextarea1"
                placeholder="Take a note..."
                rows="3"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="center-btn">
              <button
                className="btn btn-primary mt-2  "
                onClick={() => handleSave()}
              >
                Add Note
              </button>
            </div>

            <div className="note-list-container">
              <div className="note-list">
                <h4 className="welcome-title"> Notes List </h4>

                <div className="note-list-container">
                  <div className="notes-display">
                    {data.map((e, i) => {
                      return (
                        <div key={i}>
                          <div
                            className="card "
                            style={{
                              width: "317px",
                              height: "263px",
                              borderRadius: "16px",
                            }}
                          >
                            <div className="card-main">
                              <h4
                                style={{
                                  fontSize: "24px",
                                  color: "#203562",
                                  padding: "5px 5px 5px 0px",
                                }}
                              >
                                {e.title}
                              </h4>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              <div className="card-body">
                                <p
                                  style={{
                                    fontSize: "16px",
                                    color: "303030",
                                    margin: "0 5px 5px 10px 5px",
                                  }}
                                >
                                  {e.content}
                                </p>
                              </div>
                              <div className="center-btn d-flex">
                                <div className="btn">
                                  <button
                                    className="btn"
                                    alt=""
                                    onClick={() => router.push(`/update/${i}`)}
                                  >
                                    Edit
                                  </button>
                                </div>
                                &nbsp;
                                <div className="btn">
                                  <button
                                    className="btn"
                                    alt="delete"
                                    onClick={handleDelete}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
