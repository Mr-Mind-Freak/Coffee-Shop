const navbar = document.querySelector('nav');
const searchForm = document.querySelector('.search-form');
const cartItem = document.querySelector('#cart-items-container');
const initCart = document.getElementById("initial-cart");
let cartFlag = initCart ? true : false;

document.querySelector('#menu-btn').onclick = () => {
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.toggle('active');
}

document.querySelector('#search-btn').onclick = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.toggle('active');
}

document.querySelector('#cart-btn').onclick = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const addToCart = (data) => {
    //li for each cart item
    const item = document.createElement("li");
    // del is for cross mark symbol X
    const del = document.createElement("span");
    del.classList.add("fas","fa-times");
    del.addEventListener("click", () => del.parentElement.remove());

    const pic = document.createElement("img");
    pic.setAttribute("src",data.source);

    //div to hold name and price
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const price = document.createElement("p");
    name.textContent = data.name;
    price.textContent = data.offer;
    div.append(name,price);

    item.append(del,pic,div);
    cartItem.appendChild(item);
}

const addImgElement = (data) =>{
    const img = document.createElement("img");
    let imgData = {
        src: data.source,
        alt: data.name,
        width: "100px",
        height: "100px"
    };
    for (const [key,val] of Object.entries(imgData)) {
        if(imgData.hasOwnProperty(key)){
            img.setAttribute(key,val);
        }
    }
    return img;
} 

class Menu {
    menuData = [
        {
            source: "photos/coffee-1.jpg",
            name: "black coffee",
            amount: "$20.99",
            offer: "$10.99"
        },
        {
            source: "photos/coffee-2.jpg",
            name: "cappucinno",
            amount: "$25.99",
            offer: "$15.99"
        },
        {
            source: "photos/coffee-3.jpg",
            name: "dark coffee",
            amount: "$12.99",
            offer: "$8.99"
        },
        {
            source: "photos/coffee-4.jpg",
            name: "coffee latte",
            amount: "$25.99",
            offer: "$18.99"
        },
        {
            source: "photos/coffee-5.jpg",
            name: "Macchiato",
            amount: "$14.99",
            offer: "$8.99"
        },
        {
            source: "photos/coffee-6.jpg",
            name: "Espresso",
            amount: "$8.99",
            offer: "$5.99"
        },
        {
            source: "photos/ice-1.jpg",
            name: "bean blast",
            amount: "$10.25",
            offer: "$8.10"
        },
        {
            source: "photos/ice-2.jpg",
            name: "chocolate bean",
            amount: "$15.00",
            offer: "$10.55"
        },
        {
            source: "photos/ice-3.jpg",
            name: "load empress coffee",
            amount: "$8.65",
            offer: "$5.15"
        },
        {
            source: "photos/ice-4.jpg",
            name: "Cold Brew",
            amount: "$8.65",
            offer: "$5.15"
        },
        {
            source: "photos/ice-5.jpg",
            name: "Iced Coffee",
            amount: "$15.11",
            offer: "$10.11"
        },
        {
            source: "photos/ice-6.jpg",
            name: "brown ice",
            amount: "$17.11",
            offer: "$13.55"
        },
    ];
    menuItem (data) {
        //creating li element for each menu item
        const li = document.createElement("li");

        const img = addImgElement(data);

        const h3 = document.createElement("h3");
        h3.textContent = data.name;

        const div = document.createElement("div");
        div.textContent = data.offer;
        const span = document.createElement("span")
        span.textContent = data.amount;
        div.appendChild(span);

        const a = document.createElement("a");
        a.classList.add("btn");
        a.textContent = "add to cart";
        a.addEventListener("click",() => {
            if(cartFlag) {
                initCart.style.display = "none";
                addToCart(data);
            }
            else {
                addToCart(data);
            }
        });

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(div);
        li.appendChild(a);

        return li;
    }

    addMenu () {
        //creating ul element to include our menu
        const ul = document.createElement("ul");
        this.menuData.forEach(ele => {
            let tag = this.menuItem(ele);
            ul.appendChild(tag);
        });
        document.getElementById("menu").appendChild(ul);
        /* const article = document.getElementById("menu");
        return new Promise((res,reg) => {
            setTimeout(() =>{
                article.appendChild(ul);
                res();
            },0);
        }); */
    }
}

class Product {
    productData = [
        {
            source : "photos/product-1.jpg",
            name: "fresh coffee powder",
            amount: "$25.75",
            offer: "$20.45"
        },
        {
            source : "photos/product-2.jpg",
            name: "premium coffee powder",
            amount: "$65.65",
            offer: "$45.45"
        },
        {
            source : "photos/product-3.jpg",
            name: "flavoured coffee powder",
            amount: "$25.75",
            offer: "$23.55"
        },
        {
            source : "photos/product-4.jpg",
            name: "dark coffee powder",
            amount: "$30.11",
            offer: "$26.25"
        },
        {
            source : "photos/product-5.jpg",
            name: "brown coffee powder",
            amount: "$20.75",
            offer: "$13.99"
        },
    ];

    iconSection = (data) => {
        const sec = document.createElement("section");
        sec.classList.add("icons");

        const shop = document.createElement("a");
        shop.setAttribute("href","#cart-items-container");
        shop.classList.add("fas","fa-shopping-cart");
        shop.addEventListener("click",() => {
            if(cartFlag) {
                initCart.style.display = "none";
                addToCart(data);
            }
            else {
                addToCart(data);
            }
        });

        const heart = document.createElement("a");
        heart.classList.add("fas","fa-heart");
        heart.addEventListener("click",()=>{
            const  style = window.getComputedStyle(heart);
            const color = style.getPropertyValue("background-color");
            if ( color === "rgb(226, 165, 91)" || color === "rgb(19, 19, 26)") {
                heart.style.backgroundColor = "darkorange";
            }
            else {
                heart.style.backgroundColor = 'rgb(19, 19, 26)';
            }
        });

        const eye  = document.createElement("a");
        eye.setAttribute("href",data.source);
        eye.setAttribute("target","_blank");
        eye.classList.add("fas","fa-eye");

        sec.append(shop,heart,eye);
        return sec;
    }

    productItem = (data) => {
        //creating li element for each menu item
        const li = document.createElement("li");

        const icon = this.iconSection(data);

        const imgSec = document.createElement("section");
        imgSec.classList.add("image");
        const img = addImgElement(data);
        imgSec.appendChild(img);

        const contentSec = document.createElement("section");
        contentSec.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = data.name;

        const starDiv = document.createElement("div");
        starDiv.classList.add("stars");
        for(let i = 0; i < 5; i++){
            let star = document.createElement("i");
            if (i === 4) {
                star.classList.add("fas","fa-star-half-alt");
                starDiv.appendChild(star);
                break;
            }
            star.classList.add("fas","fa-star");
            starDiv.appendChild(star);
        }

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = data.offer;
        const span = document.createElement("span");
        span.textContent = data.amount;
        price.appendChild(span);

        contentSec.append(h3,starDiv,price);
        li.append(icon,imgSec,contentSec);

        return li;
    } 

    addProduct () {
        //creating ul element to include our menu
        const ul = document.createElement("ul");
        this.productData.forEach(ele => {
            let tag = this.productItem(ele);
            ul.appendChild(tag);
        });
        document.getElementById("products").appendChild(ul);
        /* const article = document.getElementById("menu");
        return new Promise((res,reg) => {
            setTimeout(() =>{
                article.appendChild(ul);
                res();
            },0);
        }); */
    }
}

const menu = new Menu;
menu.addMenu();

const product = new Product;
product.addProduct();