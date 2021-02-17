const images = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");
    };
};

if("IntesectionObserver" in window){
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    }); 
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

