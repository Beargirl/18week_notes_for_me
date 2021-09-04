function saveNote() {

    let date = document.getElementById("date").value;
    let name = document.getElementById("name").value;
    let text = document.getElementById ("note_text").value;

    localStorage.setItem("dayMonthYear", date);
    localStorage.setItem("noteName", name);
    localStorage.setItem("noteAbout", text);

    if(document.getElementById ("note_text").value === '' || document.getElementById ("name").value === '' || document.getElementById("date").value === '') {
        alert('Не все поля заполнены');
    }
    else {
        alert('Текст заметки сохранён');
    }

    }

