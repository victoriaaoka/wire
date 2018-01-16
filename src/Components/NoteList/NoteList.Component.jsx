import React from 'react';

// styles
import './NoteList.scss';

const NoteList = () => {
  return (
    <div className="notes-container">
      <div className="header">
        <span>Notes on this Incident</span>
        <button>
          <i className="fa fa-plus" aria-hidden="true"></i>
          Add Note
        </button>
      </div>
      <div className="avatar-section">
        <div className="user-avatar"></div>
        <div className="user-details">
          <span>User name</span>
          <span>PC Title</span>
        </div>
      </div>
      <div className="notes-list">
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptate, deleniti
          sequi? Sit sed tempore a fugit sint
          blanditiis, nesciunt cum deserunt
          earum temporibus fuga veritatis
          voluptatum magni excepturi
          error quidem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptate, deleniti
          sequi? Sit sed tempore a fugit sint
          blanditiis, nesciunt cum deserunt
          earum temporibus fuga veritatis
          voluptatum magni excepturi
          error quidem?
        </p>
      </div>
    </div>
  );
};

export default NoteList;
