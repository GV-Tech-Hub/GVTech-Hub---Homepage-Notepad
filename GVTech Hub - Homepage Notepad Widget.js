// Load the saved notes when Load button is clicked
document.getElementById('load-btn').addEventListener('click', function() {
    var savedNotes = JSON.parse(localStorage.getItem('savedNotes'));
    if (savedNotes && savedNotes.length > 0) {
        var selectedNote = prompt('Enter the number of the note you want to load (1-' + savedNotes.length + '):\n\n' + getSavedNotesList(savedNotes));
        if (selectedNote) {
            var noteIndex = parseInt(selectedNote) - 1;
            if (noteIndex >= 0 && noteIndex < savedNotes.length) {
                document.getElementById('note-text').value = savedNotes[noteIndex];
                alert('Note ' + (noteIndex + 1) + ' loaded successfully!');
            } else {
                alert('Invalid note selection!');
            }
        } else {
            alert('No note selected.');
        }
    } else {
        alert('No saved notes found.');
    }
});

// Function to get the list of saved notes with their corresponding numbers
function getSavedNotesList(savedNotes) {
    var notesListString = "Saved Messages:\n";
    savedNotes.forEach(function(note, index) {
        notesListString += (index + 1) + '. ' + note + '\n';
    });
    return notesListString;
}

// Clear all saved notes
document.getElementById('clear-btn').addEventListener('click', function() {
    var confirmation = confirm('Are you sure you want to clear all notes?');
    if (confirmation) {
        localStorage.removeItem('savedNotes');
        document.getElementById('note-text').value = ""; // Clear the textarea
        alert('All notes cleared!');
    }
});
