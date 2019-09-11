import apiManager from "./apiManager.js";
import domPrinter from "./domPrinter.js";
import formBuilder from "./buildEditForm.js";

// ------ On page load, print all the journal entries ----------//
// Call the API to fetch all of the journal entries
apiManager.getAllJournalEntries().then(parsedJournalEntries => {
  // When they come back from the API, print them
  domPrinter.printJournalEntries(parsedJournalEntries);
});

///---------------- EVENT LISTENERS --------------------------------//

// ------------- Event handler to create a new entry ------------------//
// Add an event listener for the submit button
document
  .querySelector("#record-journal-entry")
  .addEventListener("click", function() {
    // On click, create an object with the values from the user's inputs

    const newJournalEntryToPost = {
      conceptsCovered: document.querySelector("#conceptsCovered").value,
      dateOfEntry: document.querySelector("#journalDate").value,
      journalEntry: document.querySelector("#journalEntry").value
      // moodOfEntry: document.querySelector("#mood-select").value
    };
    // Post the object to json-server

    apiManager
      .postJournalEntry(newJournalEntryToPost)
      .then(apiManager.getAllJournalEntries)
      .then(parsedJournalEntryArray => {
        // Get all the journal entries from json-server and reprint them to refresh the page
        domPrinter.printJournalEntries(parsedJournalEntryArray);
      });
  });

// ------------------ Event handler to delete an entry --------------------------------//
// Add event listener to all delete buttons
document.querySelector("body").addEventListener("click", function() {
  // If they clicked on a delete button
  if (event.target.id.includes("delete")) {
    // Split up the button's id attribute to get the unique id from the database
    const idToDelete = event.target.id.split("-")[2];
    // Pass the unique id from the database into a delete request
    apiManager
      .deleteOneEntry(idToDelete)
      .then(apiManager.getAllJournalEntries)
      .then(parsedEntries => {
        // To refresh the DOM, get all the entries and print them again
        domPrinter.printJournalEntries(parsedEntries);
      });
  }
});

// ----------- EDIT EVENT LISTENERS -------------//

// Event listener for edit button
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("edit-entry")) {
    apiManager
      .getOneJournalEntry(event.target.id.split("-")[2])
      .then(singleEntry => {
        formBuilder.buildEditForm(singleEntry);
      });
  }
});

// Event listner for submit button
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("save-edit")) {
    const idFromDatabase = event.target.id.split("-")[2];


    console.log("You clicked the save edit button!");
    // Get values of form inputs
    const dateValue = document.querySelector(`#date-edit-${idFromDatabase}`)
      .value;
    const journalEntryValue = document.querySelector(
      `#journalEntry-edit-${idFromDatabase}`
    ).value;
    const conceptsCoveredValue = document.querySelector(
      `#conceptsCovered-edit-${idFromDatabase}`
    ).value;
    // Put them in an object
    // {
    //   "conceptsCovered": "Array methods",
    //   "dateOfEntry": "07/24/2018",
    //   "journalEntry": "We learned about array methods, but only forEach made sense",
    //   "moodOfEntry": "Ok",
    //   "id": 1
    // },
    const editedJournalEntryObject = {
      conceptsCovered: conceptsCoveredValue,
      dateOfEntry: dateValue,
      journalEntry: journalEntryValue
    }

    console.log(editedJournalEntryObject)
    // Make a PUT request to db
    apiManager.editJournalEntry(idFromDatabase, editedJournalEntryObject)
    .then(apiManager.getAllJournalEntries)
    .then(allTheEntries => {
      domPrinter.printJournalEntries(allTheEntries)
    })
    // Refresh the page --> GET all and then reprint all
  }
});
