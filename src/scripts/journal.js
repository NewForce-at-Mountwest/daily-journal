apiManager.getAllJournalEntries()
.then(parsedJournalEntries => {
  domPrinter.printJournalEntries(parsedJournalEntries)
})

