function moveSlider(direction) {
    const slider = document.querySelector('.slider');
    const scrollDistance = slider.offsetWidth / 8; // Scrolls one-eighth of the slider's width
    slider.scrollBy(scrollDistance * direction, 0);
}
