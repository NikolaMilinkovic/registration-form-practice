(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.documentElement;

    function parallax(e){
        let w = window.innerWidth / 2;
        let h = window.innerHeight / 2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth = `${20-(mouseX-4)*0.002}% ${20-(mouseY-2)*0.002}%`;
        let x= `${depth}`;
        elem.style.backgroundPosition = x;
    }
})();