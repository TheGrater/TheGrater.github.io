const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition(){
    
    for (let i=0; i<secBtn.length;i++){
        secBtn[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn','');
            this.classList.add('active-btn');
        })
    }

    allSections.addEventListener('click',(e)=> {
        const id = e.target.dataset.id;
        if (id){
            /*
            secBtns.forEach((btn)=> {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            */
            sections.forEach((section) =>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransition();