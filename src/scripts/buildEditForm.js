const formBuilder = {
    buildEditForm: (singleJournalEntryObject) => {

        const targetCard = document.querySelector(`#entry-card-${singleJournalEntryObject.id}`)

        document.querySelector(`#entry-card-${singleJournalEntryObject.id}`).innerHTML = `
        <div id="entry-card-${singleJournalEntryObject.id}">
        <div class="card hoverable">
          <div class="card-content">
            <input type="date" id="date-edit-${singleJournalEntryObject.id}" value="${singleJournalEntryObject.dateOfEntry}">
            <input type="text" id="journalEntry-edit-${singleJournalEntryObject.id}" value="${singleJournalEntryObject.journalEntry}">
          </div>
          <div class="card-action">
            <input type="text" value="${singleJournalEntryObject.conceptsCovered}" id="conceptsCovered-edit-${singleJournalEntryObject.id}">
            <a  class="btn-floating btn-med waves-effect waves-light teal accent-4">
            <i class="material-icons" id="save-edit-${singleJournalEntryObject.id}">save</i>
          </a>
          </div>
        </div>
      </div>`

    }
}

export default formBuilder;