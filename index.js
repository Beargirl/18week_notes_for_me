function saveNote() {

    let date = document.getElementById("date").value;
    let name = document.getElementById("name").value;
    let text = document.getElementById ("note_text").value;

    localStorage.setItem("dayMonthYear", date.value);
    localStorage.setItem("noteName", name.value);
    localStorage.setItem("noteAbout", text.value);

    if(document.getElementById ("note_text").value === '' || document.getElementById ("name").value === '' || document.getElementById("date").value === '') {
        alert('Не все поля заполнены');
    }
    else {
        alert('Текст заметки сохранён');
    }

    }

