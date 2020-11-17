(() =>{

    const stepElement = document.querySelectorAll('.step');
    const graphicElement = document.querySelectorAll('.graphic-item');

    for(let i = 0 ; i < stepElement.length; i++){
        // stepElement[i].setAttribute('data-index', i);
        stepElement[i].dataset.index = i;
        graphicElement[i].dataset.index = i;
    }

    window.addEventListener('scroll', ()=> {
        let step;
        let boundingRect;

        for(let i = 0; i < stepElement.length; i ++){
            step = stepElement[i];
            boundingRect = step.getBoundingClientRect();

            if(boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8){
                    console.log(step.dataset.index);
                }
        }
    });

})();