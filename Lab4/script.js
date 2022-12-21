let colors = Array('#218C8D', '#6CCECB', '#F9E559', '#EF7126', '#8EDC9D', '#473E3F', '#3D4C53', '#E64A45', '#253E66', '#C29D4E')
let zoom = 1

function color_change_1() {
    let div = document.getElementById('first')
    div.style.color = collor_picker()
    div.style.background = collor_picker()
}

function color_change_2() {
    let div = document.querySelector('p.info')
    div.style.color = collor_picker()
    div.style.background = collor_picker()
}

function collor_picker() {
    return colors[Math.floor(Math.random() * 10)]
}

function show(){
    let div = document.querySelector('a.venezia')
    div.style.display = 'block';
}

function hide(){
    let div = document.querySelector('a.venezia')
    div.style.display = 'none';
}

function zoom_in(){
    let div = document.querySelector('a.venezia')
    a = zoom + 0.1
    zoom = a
    div.style.zoom = a;
}

function zoom_out(){
    let div = document.querySelector('a.venezia')
    a = zoom - 0.1
    zoom = a
    div.style.zoom = a;
}