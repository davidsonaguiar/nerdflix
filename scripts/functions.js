let index = 0;

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
        a.setAttribute('title', `${arr.categoria}`)
        let img = document.createElement('img');
        img.setAttribute('src', `${arr.list[0].url}`);
        img.setAttribute('alt', `${arr.list[0].titulo}`);
        let p = document.createElement('p');
        p.setAttribute('class', 'main-top-box-p');
        p.textContent = `${cap(arr.categoria)}`;

        a.appendChild(img);
        a.appendChild(p);
        div.appendChild(a);
        local.appendChild(div)
    }else{
        let div = document.createElement('div');
        div.setAttribute('class', 'main-box-lists');
        div.setAttribute('id', `${arr.categoria}`);

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'main-box-list-cat');
        

        div2.innerHTML = `
            <h2 class="main-list-cat">
                ${cap(arr.categoria)}
            </h2>
            <div>
                <button class="btn left">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
                <button class="btn right">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
            </div>`;

        div.appendChild(div2)

        let ul = document.createElement('ul');
        ul.setAttribute('class', 'main-list');

        div.appendChild(ul);

        arr.list.forEach(item => {
                let li = document.createElement('li');
                li.setAttribute('class', 'main-list-item');

                li.innerHTML += `
                    <a class="main-list-item-link-img"
                     href="#"
                     title="${cap(item.titulo)}">
                        <img src="${item.url}">
                    </a>
                    <div class="main-list-item-div-p">
                        <p class="main-list-item-div-p-title">
                            <a href="#"
                            title="Leia mais sobre: ${cap(item.titulo)}">
                                ${cap(item.titulo)}
                            </a>
                        </p>
                        <p class="main-list-item-div-p-diretor">
                            Diretor: 
                            <a href="#"
                            title="Conheça mais sobre: ${cap(item.diretor)}!">
                                <span>${cap(item.diretor)}
                            </a>
                        </p>
                        <p class="main-list-item-div-p-studio">
                            Estudio: 
                            <a href="#"
                            title="Conheça mais sobre: ${item.studio}!">
                                <span>
                                    ${item.studio}
                                </span>
                            </a>
                        </p>
                    </div>
                `

                ul.appendChild(li);
                local.appendChild(div);
            }
        );
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

function back(btn){
    let divPrin = btn.parentElement.parentElement.parentElement;
    let widthList = divPrin.getElementsByClassName('main-list')[0].offsetWidth;
    let scrollWidthList = divPrin.getElementsByClassName('main-list')[0].scrollWidth;

    index -= widthList;

    if(index < 0){
        index = scrollWidthList
    }

    divPrin.getElementsByClassName('main-list')[0].scroll(index - 100, 0);   

    console.log(widthList, scrollWidthList, index)
}

function next(btn){
    let divPrin = btn.parentElement.parentElement.parentElement;
    let widthList = divPrin.getElementsByClassName('main-list')[0].offsetWidth;
    let scrollWidthList = divPrin.getElementsByClassName('main-list')[0].scrollWidth;

    index += widthList;

    if(index > scrollWidthList){
        index = 0
    }

    divPrin.getElementsByClassName('main-list')[0].scroll(index - 100, 0);   

    console.log(widthList, scrollWidthList, index)
}

const functions = {
    newDivNav,
    back,
    next
}

export default functions;