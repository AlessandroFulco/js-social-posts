/*
Milestone 1 -
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
[qui, la base dati ve la passo, ma in caso le img che ci sono on funzionino, potete sostituirle in quel modo]
*/

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// selezione del contenitore globale dei post
const container = document.getElementById('container');

function takeContentPost(postInfo) {

    posts.forEach(
        (post) => {

            // selezioniamo ogni valore delle chiavi dell'oggetto salvandole in delle variabili d'appoggio

            // id
            const myId = post.id;
            // testo
            const myContent = post.content;
            // immagine contenuto principale
            const myMedia = post.media;
            // nome e immagine profilo
            const myAuthor = post.author;
            // like al post
            let myLikes = post.likes;
            // data da aggiungere nell'header sotto il nome dell'autore
            const myCreated = post.created;
            
            // creare il contenitore post
            const containerPost = createElement("div", "post");
            
            function createImg(type, myClass, mySrc, myAlt){
                const elImg = createElement(type, myClass);
                elImg.src = mySrc;
                elImg.alt = myAlt;
                return elImg;
            }
            
            // funzioni che creano il contenuto
            const myHeaderPost = createPostHeader(createImg("img", "profile-pic", myAuthor.image, myAuthor.name), myAuthor.name, myCreated);
            const myMainTextPost = createTextMain(myContent);
            const myMainImgPost = createImgMain(createImg("img", "", myMedia, ""));
            const myFooterPost = createFooterPost(myLikes);

            // stampa in pagina del contenuto
            containerPost.append(myHeaderPost);
            containerPost.append(myMainTextPost);
            containerPost.append(myMainImgPost);
            containerPost.append(myFooterPost);
            container.append(containerPost);
            
            

            
        }
    )
        
    return;
}

takeContentPost(posts);





function createElement(type, myClass){
    const el = document.createElement(type);
    el.className = myClass;
    return el;
}
function createPostHeader(immagine, nome, time){
    // container header
    const containerHeader = createElement("div", "post__header");
    // container meta
    const containeMeta = createElement("div", "post-meta");
    // container icon contenitore
    const containerIcon = createElement("div", "post-meta__icon");
    // container data
    const containerData = createElement("div", "post-meta__data");
    // name profile
    const containerNome = createElement("div", "post-meta__author");
    // data post
    const containerTime = createElement("div", "post-meta__time");


    // container meta nome data
    containerTime.append(time);
    containerNome.append(nome);
    // container main che appede container figli
    containerData.append(containerNome);
    containerData.append(containerTime);


    // container immagine
    containerIcon.append(immagine);

    // conteiner meta globale
    containeMeta.append(containerIcon);
    containeMeta.append(containerData);

    // container header che contiene meta globale
    containerHeader.append(containeMeta);
    
    return containerHeader; 
}
function createTextMain(text) {
    // testo post
    const elText = createElement("div", "post__text");

    elText.append(text);
    // appendre immagine contenuto
    
    return elText;
}
function createImgMain(media) {
    // immagine contenuto
    const containerImgContent = createElement("div", "post__image");

    // appendre immagine contenuto
    containerImgContent.append(media);
    
    return containerImgContent;
}
function createFooterPost(saveLike){
    // container globale footer
    const containerPostFooter = createElement("div", "post__footer");
    // sub container footer
    const subContainerFooter = createElement("div", "likes js-likes");
    // container btn
    const containerBtn = createElement("div", "likes__cta");
    // container counter
    const containerBtnCounter = createElement("div", "likes__counter");
    containerBtnCounter.innerHTML = "Piace a " + '<b id="like-counter-1" class="js-likes-counter">' + saveLike + '</b>' + " persone";
    // button
    const btn = createElement("a", "like-button  js-like-button");
    btn.href = "#";
    // icon
    const icon = createElement("i", "like-button__icon fas fa-thumbs-up");
    // mi piace
    const like = createElement("span", "like-button__label");
    like.innerHTML = " Mi Piace";



    btn.addEventListener("click",
        function() {
            btn.classList.add("like-button--liked");
            posts.forEach(
                (element) => {
                    element["likes"] = element.likes++;
                }
            )
        
        }     
    )

    btn.append(icon);
    btn.append(like);
    containerBtn.append(btn);
    subContainerFooter.append(containerBtn);
    subContainerFooter.append(containerBtnCounter);
    containerPostFooter.append(subContainerFooter);

    return containerPostFooter;
}