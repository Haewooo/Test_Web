const main = document.querySelector("#main");
const QnA = document.querySelector("#QnA");

function addAnswer(answerDetail, qIdx){
    var a = document.querySelector('.ans');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    
    a.appendChild(answer);
    answer.innerHTML = answerDetail;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            next(++qIdx);
        },450)
    }, false);
}

function next(qIdx){
    var q = document.querySelector('.que');
    q.innerHTML = QnAList[qIdx].q;
    for(let i in QnAList[qIdx].a){
        addAnswer(QnAList[qIdx].a[i].answer, qIdx);
    }
}


function start(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        QnA.style.WebkitAnimation = "fadeIn 1s";
        QnA.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            QnA.style.display = "block";
        }, 450)
        let qIdx = 0;
        next(qIdx);
    }, 450);
}