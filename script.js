function toggleModal(evt, idname, mybtn) {

    let tabs = document.querySelectorAll('.tabcontent');

    let navbtns = document.querySelector('#main-head').children;

    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        if (element.id == idname) {
            element.style.display = 'block';
            const list = navbtns[index].classList;
            list.add("btn-active");
        }

        else {
            element.style.display = 'none';
            navbtns[index].className = '';
        }
    }


    if(mybtn.id == 'showbtn'){
        console.log('praise JESUS');

        let a = document.getElementById('content').innerHTML;
        let b = document.getElementById('content-code');
        b.innerText = a;
        


    }


}


function toggleSidebar( idname) {

    let tabs = document.querySelectorAll('.tabcontent-sidebar');

    let navbtns = document.querySelector('#sidebarbtns').children;

    for (let index = 0; index < tabs.length; index++) {
        const element = tabs[index];
        if (element.id == idname) {
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


function selectStyleTab() {
    toggleSidebar('sidebar-style');
}





const mainContainer = document.getElementById('content');


function additem(item) {
    const rootContainer = document.getElementById('content');
    let a = document.createElement(item);
    a.innerHTML = 'praise the LORD';
    rootContainer.append(a);
    // console.log(rootContainer);
}




document.onclick = (e) => {
    if(mainContainer.contains(e.target) && (mainContainer != e.target)) {
        e.target.style.border = '1px solid black';
        selectStyleTab();

        let obj1 = new StyleTab(e.target);
    }
}

document.onmouseover = (e) => {
    if(mainContainer.contains(e.target) && (mainContainer != e.target)) {
        e.target.style.border = '1px solid blue';
    }
}

document.onmouseout = (e) => {
    if(mainContainer.contains(e.target) && (mainContainer != e.target)) {
        console.log('leave');
        e.target.style.border = 'none';
    }
}



// const showCode = document.getElementById('content-code');

// showCode.addEventListener('click', ()=>{
//     // msg.classList.toggle('reveal');
// });

// showCode.onclick = function() {
//     console.log('hiiiiiiiiiiiiiiiiiiiiiiiii');
//     item.innerHTML = tarea.value;  
// };