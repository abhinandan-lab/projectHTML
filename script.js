function toggleModal(evt, idname) {

    let tabs = document.querySelectorAll('.tabcontent');

    tabs.forEach(element => {
        if(element.id == idname) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    });
}