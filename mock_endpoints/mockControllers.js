const fuzzysearch = require('fuzzysearch');

let { incidents, chats, notes, users, statuses, levels, locations } = require('./mockData');

module.exports = {
  getIncident: incidentId => {
    let incident = incidents.find(incident => {
      return incident.id === incidentId;
    });
    if(!incident) return 'Incident Not Found';
    incident['reporter'] =
      users.find(user => {
        return user.id === incident.reporterId;
      }) || null;
    incident['Status'] =
      statuses.find(status => {
        return status.id === incident.statusId;
      }) || null;
    incident['Level'] =
      levels.find(level => {
        return level.id === incident.levelId;
      }) || null;
    incident['Location'] = locations.find(location => {
      return location.id === incident.locationId;
    });
    return incident;
  },
  getIncidents: () => {
    return incidents.map(incident => {
      incident['reporter'] =
        users.find(user => {
          return user.id === incident.reporterId;
        }) || null;
      incident['Status'] =
        statuses.find(status => {
          return status.id === incident.statusId;
        }) || null;
      incident['Level'] =
        levels.find(level => {
          return level.id === incident.levelId;
        }) || null;
      incident['Location'] = locations.find(location => {
        return location.id === incident.locationId;
      });
      return incident;
    });
  },
  searchIncidents: query => {
    return incidents.filter(incident => fuzzysearch(query, incident.subject.toLowerCase()) === true).map(incident => {
      incident['reporter'] =
        users.find(user => {
          return user.id === incident.reporterId;
        }) || null;
      incident['Status'] =
        statuses.find(status => {
          return status.id === incident.statusId;
        }) || null;
      incident['Level'] =
        levels.find(level => {
          return level.id === incident.levelId;
        }) || null;
      incident['Location'] = locations.find(location => {
        return location.id === incident.locationId;
      });
      return incident;
    });
  },
  getIncidentNotes: incidentId => {
    let incidentNotes = notes.filter(note => {
      return note.incidentId === incidentId;
    });
    incidentNotes.map(
      note =>
        (note['User'] = users.find(user => {
          return user.id === note.userId;
        }))
    );
    return incidentNotes;
  },
  getIncidentChats: incidentId => {
    let incidentChats = chats.filter(chat => {
      return chat.incidentId === incidentId;
    });
    incidentChats.map(chat => {
      chat['User'] = users.find(user => {
        return user.id === chat.userId;
      });
    });
    return incidentChats;
  },
  changeStatus: (incidentId, statusId) => {
    let incident = incidents.find(incident => {
      return incident.id === parseInt(incidentId);
    });
    incident.statusId = statusId;
    incident['reporter'] =
      users.find(user => {
        return user.id === incident.reporterId;
      }) || null;
    incident['Status'] =
      statuses.find(status => {
        return status.id === statusId;
      }) || null;
    incident['Level'] =
      levels.find(level => {
        return level.id === incident.levelId;
      }) || null;
    incident['Location'] = locations.find(location => {
      return location.id === incident.locationId;
    });
    return incident;
  },
  changeAssignee: (incidentId, userId) => {
    let incident = incidents.find(incident => {
      return incident.id === incidentId;
    });
    incident.assignees = incident.assignees.filter(assignee => {
      return assignee.assignedRole !== 'assignee';
    });
    let newAssignee = users.find(user => {
      return user.id === userId;
    });
    newAssignee['assignedRole'] = 'assignee';
    incident.assignees.push(newAssignee);
    incident['reporter'] =
      users.find(user => {
        return user.id === incident.reporterId;
      }) || null;
    incident['Status'] =
      statuses.find(status => {
        return status.id === incident.statusId;
      }) || null;
    incident['Level'] =
      levels.find(level => {
        return level.id === incident.levelId;
      }) || null;
    incident['Location'] = locations.find(location => {
      return location.id === incident.locationId;
    });
    return incident;
  },
  handleCCd: (incidentId, ccdUsers) => {
    let incident = incidents.find(incident => {
      return incident.id === incidentId;
    });
    incident.assignees = [];
    ccdUsers.map(ccdUser => {
      let newCCd = users.find(user => {
        return user.id === ccdUser.userId;
      });
      newCCd['assignedRole'] = 'ccd';
      incident.assignees.push(newCCd);
    });
    incident['reporter'] =
      users.find(user => {
        return user.id === incident.reporterId;
      }) || null;
    incident['Status'] =
      statuses.find(status => {
        return status.id === incident.statusId;
      }) || null;
    incident['Level'] =
      levels.find(level => {
        return level.id === incident.levelId;
      }) || null;
    incident['Location'] = locations.find(location => {
      return location.id === incident.locationId;
    });
    return incident;
  },
  addNote: (incidentId, userId, note) => {
    let newNote = {
      id: notes.length++,
      incidentId,
      userId,
      note
    };
    notes.push(newNote);
    newNote['User'] =
      users.find(user => {
        return user.id === newNote.userId;
      }) || {};
    return newNote;
  },
  editNote: (noteId, note) => {
    let noteToEdit = notes.find(note => {
      return note.id === noteId;
    });
    noteToEdit.note = note;
    noteToEdit['User'] = users.find(user => {
      return user.id === noteToEdit.userId;
    });
    return noteToEdit;
  },
  archiveNote: noteId => {
    return notes.filter(note => {
      return note.id !== noteId;
    });
  },
  getChat: chatId => {
    return chats.find(chat => {
      return chat.id === chatId;
    });
  },
  addChat: (incidentId, userId, chat) => {
    let newChat = {
      id: chats.length++,
      incidentId,
      userId,
      chat
    };
    chats.push(newChat);
    newChat['User'] =
      users.find(user => {
        return user.id === newChat.userId;
      }) || {};
    return newChat;
  },
  editChat: (chatId, chat) => {
    let chatToEdit = chats.find(chat => {
      return chat.id === chatId;
    });
    chatToEdit.chat = chat;
    chatToEdit['User'] = users.find(user => {
      return user.id === chatToEdit.userId;
    });
    return chatToEdit;
  },
  archiveChat: chatId => {
    return chats.filter(chat => {
      return chat.id !== chatId;
    });
  },
  getStaff: () => {
    return users.filter(user => {
      return user.roleId !== 1;
    });
  },
  login: (email) => {
    if (email) {
      let userToCheck = users.filter(user => {
        return user.email == email;
      });
      return userToCheck[0].roleId !== 1;
    }
    return false;
  }
};
