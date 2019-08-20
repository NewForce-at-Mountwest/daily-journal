// Journal Entries Array

const journalEntries = [
  {
    conceptsCovered: "Array methods",
    dateOfEntry: "07/24/2018",
    journalEntry: "We learned about array methods, but only forEach made sense",
    moodOfEntry: "Ok"
  },
  {
    dateOfEntry: "August 12",
    conceptsCovered: "Objects and Variables",
    journalEntry:
      "Today we learned about objects, variables, loops, and conditionals. I am just wishing that some of this information would sink in and start making sense.",
    moodOfEntry: "Confused"
  },
  {
    dateOfEntry: "August 16",
    conceptsCovered: "Basic DOM Components",
    journalEntry:
      "We followed along as Jordan built a weather forecast function that showed the five-day forecast for two difference cities.",
    moodOfEntry: "Nervous"
  }
];

const makeJournalEntryComponent = singleObject => {
  // Create your own HTML structure for a journal entry
  return `
    <article>
    <h3>${singleObject.dateOfEntry}</h3>
    <h4>${singleObject.conceptsCovered}</h4>
    <p>${singleObject.journalEntry}</p>
    <h6>${singleObject.moodOfEntry}</h6>
    </article>
    `;
};
const entryLog = document.querySelector(".entry-log");

const renderJournalEntries = arrayOfAllEntries => {
  let journalEntries = "";
  for (let i = 0; i < arrayOfAllEntries.length; i++) {
    journalEntries += makeJournalEntryComponent(arrayOfAllEntries[i]);
  }
  entryLog.innerHTML = journalEntries;
};

// Invoke the render function
renderJournalEntries(journalEntries);
// 1. Get the values of the inputs

// Add event listener on submit button
const submitButton = document.querySelector("#record-journal-entry");
console.log(submitButton);

submitButton.addEventListener("click", function() {
  // Once they click the button, do the these things:
  const dateValue = document.querySelector("#journalDate").value;
  const conceptsValue = document.querySelector("#conceptsCovered").value;
  const journalEntryValue = document.querySelector("#journalEntry").value;
  const moodValue = document.querySelector("#mood-select").value;

  // 2. Turn them into an object
  const newJournalEntryObject = {
    dateOfEntry: dateValue,
    conceptsCovered: conceptsValue,
    journalEntry: journalEntryValue,
    moodOfEntry: moodValue
  };

  // 3. Push the object into my journalEntries array
//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
journalEntries.push(newJournalEntryObject)

console.log(journalEntries)
  // 4. Call the function that prints the entire array to the DOM
  renderJournalEntries(journalEntries);
});
