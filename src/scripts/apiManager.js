const apiManager = {
  getAllJournalEntries: () => {
    return fetch("http://localhost:8088/journal").then(response =>
      response.json()
    );
  },
  postJournalEntry: journalEntryObject =>
    fetch("http://localhost:8088/journal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalEntryObject)
    }),
  deleteOneEntry: id =>
    fetch(`http://localhost:8088/journal/${id}`, {
      method: "DELETE"
    })
};

export default apiManager;
