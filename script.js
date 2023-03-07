function toggleModal(evt, idname, mybtn) {

    let tabs = document.querySelectorAll('.tabcontent');

    let navbtns = document.querySelector('#main-head').children;

    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        if(element.id == idname) {
            element.style.display = 'block';
            const list = navbtns[index].classList;
            list.add("btn-active");   
        }

        else {
            element.style.display = 'none';
            navbtns[index].className = '';
        }   
    }
}


function toggleSidebar(evt, idname){

    let tabs = document.querySelectorAll('.tabcontent-sidebar');

    let navbtns = document.querySelector('#sidebarbtns').children;

    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        if(element.id == idname) {
            element.style.display = 'flex';
            const list = navbtns[index].classList;
            list.add("btn-active");   
        }

        else {
            element.style.display = 'none';
            navbtns[index].className = '';
        }   
    }
}