import singleJournalEntry from "./singleJournalEntry.js"

const domPrinter = {
    printJournalEntries: arrayOfAllEntries => {
        let journalEntries = "";
        for (let i = 0; i < arrayOfAllEntries.length; i++) {
          journalEntries += singleJournalEntry.makeJournalEntryComponent(arrayOfAllEntries[i]);
        }

        document.querySelector(".entry-log").innerHTML = `<div class="row">${journalEntries}</div>`;
      }
}

export default domPrinter;