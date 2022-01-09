function newDivNav(arr, local, type){
    arr.forEach(item => {
        newItem(item, local, type)
    });
}

function newItem(arr, local, type){
    if(type === 'div'){
        let div = document.createElement('div');
        div.setAttribute('class', 'main-top-box-imgs');
        let a = document.createElement('a');
        a.setAttribute('href', `#${arr.categoria}`)
        a.setAttribute('title', `${cap(arr.categoria)}`)
        let img = document.createElement('img');
        img.setAttribute('src', `${arr.list[0].url}`);
        img.setAttribute('alt', `${cap(arr.list[0].titulo)}`);
        let p = document.createElement('p');
        p.setAttribute('class', 'main-top-box-p');
        p.textContent = `${cap(arr.categoria)}`;

        a.appendChild(img);
        a.appendChild(p);
        div.appendChild(a);
        local.appendChild(div)
    }else{
        let h2 = document.createElement('h2');
        h2.setAttribute('class', 'main-sub-title')
        h2.textContent = `${cap(arr.categoria)}`;
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'main-list');
        let div = document.createElement('div');
        div.setAttribute('class', 'main-lists-box');
        div.setAttribute('id', `${arr.categoria}`);
        
        div.appendChild(h2);
        div.appendChild(ul);

        arr.list.forEach(item => {
            let li = document.createElement('li')
            li.setAttribute('class', 'main-list-item');
            let a = document.createElement('a');
            a.setAttribute('class', 'main-list-item-link')
            a.setAttribute('href', '#');
            let img = document.createElement('img');
            img.setAttribute('class', 'main-list-item-link-img')
            img.setAttribute('src', `${item.url}`);
            img.setAttribute('alt', `${cap(item.titulo)}`);
            let p = document.createElement('p');
            p.setAttribute('class', 'main-list-item-link-p');
            p.textContent = `${cap(item.titulo)}`;

            a.appendChild(img);
            a.appendChild(p);
            li.appendChild(a);
            ul.appendChild(li);
            local.appendChild(div)
        });
    }
}

function cap(str){
    let teste = str.split(' ');
    let arr = [];

    teste.forEach(item => {
        arr.push(item.replace(item[0], item[0].toUpperCase()));
    })

    return arr.join(' ');
}

const functions = {
    newDivNav
}

export default functions;