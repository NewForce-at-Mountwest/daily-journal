const apiManager = {
    getAllJournalEntries: () => {
        return fetch("http://localhost:8088/journal")
        .then(response => response.json())
    }
}

export default apiManager;