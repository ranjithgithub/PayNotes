export const ACTION_GET_NOTES_CARDS  = 'ACTION_GET_NOTES_CARDS'
export const ACTION_SET_NOTES_CARDS  = 'ACTION_SET_NOTES_CARDS'
export const ACTION_GET_NOTE = 'ACTION_GET_NOTE'
export const ACTION_SET_NOTE = 'ACTION_SET_NOTE'
export const ACTION_GET_DELETE_NOTE = 'ACTION_GET_DELETE_NOTE'
export const ACTION_SET_DELETE_NOTE = 'ACTION_SET_DELETE_NOTE'

export const getNotesCardsData = () => ({
    type: ACTION_GET_NOTES_CARDS
})

export const setNotesCardsData= (notesCardsData) => ({
    type: ACTION_SET_NOTES_CARDS,
    notesCardsData
})

export const getNote= (noteID) => ({
    type: ACTION_GET_NOTE,
    noteID
})

export const setNotes= (note) => ({
    type: ACTION_SET_NOTE,
    note
})

export const deleteNote= (noteID) => ({
    type: ACTION_GET_DELETE_NOTE,
    noteID
})

export const setDeleteNote= (id) => ({
    type: ACTION_SET_DELETE_NOTE,
    id
})