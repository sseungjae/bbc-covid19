(() =>{

    const stepElement = document.querySelectorAll('.step');
    const graphicElement = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElement[0]; //현재 활성화된 visible 클래스가 붙은  .graphic-item을 나타냄

    for(let i = 0 ; i < stepElement.length; i++){
        // stepElement[i].setAttribute('data-index', i);
        stepElement[i].dataset.index = i;
        graphicElement[i].dataset.index = i;
    }

    function activate(){
        currentItem.classList.add('visible');
    }

    function inactivate(){
        currentItem.classList.remove('visible');
    }


    window.addEventListener('scroll', ()=> {
        let step;
        let boundingRect;

        for(let i = 0; i < stepElement.length; i ++){
            step = stepElement[i];
            boundingRect = step.getBoundingClientRect();

            if(boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8){
                
                inactivate(); 
                currentItem = graphicElement[step.dataset.index];
                activate();
            }
        }
    });

    activate();

})();