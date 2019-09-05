const singleJournalEntry = {
  makeJournalEntryComponent: singleObject => {
    // Create your own HTML structure for a journal entry
    return `
        <div class="col s12 m6">
        <div class="card hoverable">
          <div class="card-content">
            <span class="card-title indigo-text">${singleObject.dateOfEntry}</span>
            <p>${singleObject.journalEntry}</p>
          </div>
          <div class="card-action">
            <p>My mood: ${singleObject.moodOfEntry}</p>
            <p>Concepts covered: ${singleObject.conceptsCovered}</p>
            <a  class="btn-floating btn-med waves-effect waves-light red accent-4">
              <i class="material-icons" id="delete-entry-${singleObject.id}">delete</i>
            </a>
          </div>
        </div>
      </div>`;
  }
};

export default singleJournalEntry;
