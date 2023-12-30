document.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    let parallaxSections = document.querySelectorAll('.parallax');

    parallaxSections.forEach(function (section) {
        let parallaxLayers = section.querySelectorAll('.layer');

        parallaxLayers.forEach(function (layer) {
            let parallaxSpeed = layer.getAttribute('data-parallax-speed') || 0.5;
            let parallaxOffset = layer.parentElement.offsetTop;
            let parallaxEffect = (parallaxOffset - scrollTop) * parallaxSpeed;

            layer.style.transform = `translate(-50%, -50%) translateY(${parallaxEffect}px)`;
        });
    });
});
