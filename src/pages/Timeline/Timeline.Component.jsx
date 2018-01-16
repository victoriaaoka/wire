import React, { Component } from 'react';

// styles
import './Timeline.scss';

// Components
import NavBar from '../../Components/NavBar/NavBar.Component';
import NoteList from '../../Components/NoteList/NoteList.Component';
import Incident from '../../Components/Incident/Incident.Compoent';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-page">
        <nav className="main-navigation">
          <NavBar />
        </nav>
        <section className="timeline-container">
          <div className="chat-timeline">
            <div className="chat-thread">
            chat thread
            </div>
            <div className="chat-input">
            chat input
            </div>
          </div>
          <div className="aside">
            <NoteList />
            <Incident />
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
