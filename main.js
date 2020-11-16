(() =>{

    const stepElement = document.querySelectorAll('.step');
    const graphicElement = document.querySelectorAll('.graphic-item');

    for(let i = 0 ; i < stepElement.length; i++){
        // stepElement[i].setAttribute('data-index', i);
        stepElement[i].dataset.index = i;
        graphicElement[i].dataset.index = i;
    }

})();