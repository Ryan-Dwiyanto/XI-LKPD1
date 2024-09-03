function updateImage() {
    const imageSelector = document.getElementById("image-select");
    const opacitySelector = document.getElementById("opacity-select");
    const imageContainer1 = document.getElementById("image1");
    const imageContainer2 = document.getElementById("image2");
    const imageContainer3 = document.getElementById("image3");
    const selectedImage = imageSelector.value;
    const selectedOpacity = opacitySelector.value;
    if (selectedImage === "image1") {
        imageContainer1.style.opacity= selectedOpacity
    }else if (selectedImage === "image2") {
        imageContainer2.style.opacity = selectedOpacity 
    } else {
        imageContainer3.style.opacity = selectedOpacity
    }

}