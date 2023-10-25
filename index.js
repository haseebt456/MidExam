function Add()
{
    var question = document.getElementById("query").value;
    var answer = document.getElementById("ans").value;
    const cont = document.getElementById('container');
    const card = document.createElement('div');
    const queElement = document.createElement('h3');
    const ansElement = document.createElement('p');
    const arrow = document.createElement('button');
    arrow.setAttribute("class","faq-toggle");
    arrow.innerHTML =' <i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>'; 
    queElement.innerText = question;
    ansElement.innerText = answer;
    queElement.setAttribute('class','faq-title');
    ansElement.setAttribute('class','faq-text');
    card.appendChild(queElement);
    card.appendChild(ansElement);
    card.appendChild(arrow);
    card.setAttribute("class","faq");
    cont.appendChild(card);
}

function expandCard()
{
    var cards = document.querySelectorAll('.faq');
    for(let i=0; i < cards.length ; i++)
    {
        cards[i].addEventListener("click",function(){
            document.body.style.backgroundColor='black';
            cards[i].classList.toggle('active');
        });
    }
}