import apiManager from "./apiManager.js"
import domPrinter from "./domPrinter.js"

// Call the API to fetch all of the journal entries
apiManager.getAllJournalEntries()
.then(parsedJournalEntries => {
  // When they come back from the API, print them
  domPrinter.printJournalEntries(parsedJournalEntries)
})

