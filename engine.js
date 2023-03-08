console.log('this is engine');






/*

DIV, SECTION, 

border
padding
height
min-height
max-height

width
max-width
min-width

border-radius
background-color
background-image => image, gradients


*/


class Engine {

    // ---------- CONTSTANTS --------------------

    contentBox = document.getElementById('content');




    // ---------- END OF CONTSTANTS --------------------

    static addElement(item) {
        let element = document.createElement(item);

        this.contentBox.append(element);

        return element;


    }
}



class StyleTab {
    styleDiv = document.getElementById('ss-box');

    constructor(item) {

        this.styleDiv.innerHTML = '';

        let tarea = document.createElement('textarea');
        tarea.setAttribute('rows', 6);
        tarea.innerHTML = item.innerHTML;
        this.styleDiv.append(tarea);

        tarea.oninput = function() {
            item.innerHTML = tarea.value;  
        };


        let settingrow = document.createElement('div');
        settingrow.innerHTML = `<label> choose text tag </label>`;

        let textTag = document.createElement('select');
        textTag.setAttribute('class', 'mys324');
        textTag.innerHTML = 
            `<option value=""></option>
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
            <option value="h3">H4</option>
            <option value="h5">H5</option>
            <option value="h6">H6</option>
            <option value="span">span</option>
            <option value="small">small</option>
            <option value="b">b</option>
            <option value="p">p</option>`;
        
        settingrow.append(textTag);
        this.styleDiv.append(settingrow);

        textTag.onchange = function() {
            console.log(textTag.value);

            let temp = item.innerHTML;
            let newItem =  document.createElement(textTag.value);
            newItem.innerHTML = temp;

            item.parentNode.replaceChild(newItem, item);
            // var e = document.getElementsByTagName('span')[0];

            // var d = document.createElement('div');
            // d.innerHTML = e.innerHTML;

            // e.parentNode.replaceChild(d, e);


        }
    }
}