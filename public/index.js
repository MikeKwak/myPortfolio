(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const engBtn = document.querySelector(".eng");
const korBtn = document.querySelector(".kor");

engBtn.addEventListener("click", () => {
    if(engBtn.classList.contains("active-lang")){
        return;
    }
    korBtn.classList.remove("active-lang");
    engBtn.classList.add("active-lang");
    
    ReadTranslationFile('./lang/eng.json');
})

korBtn.addEventListener("click", () => {
    if(korBtn.classList.contains("active-lang")){
        return;
    }
   engBtn.classList.remove("active-lang");
    korBtn.classList.add("active-lang");
    activeLang = eng;
})







