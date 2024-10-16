document.querySelectorAll('.button-animate').forEach(button => {

    let div = document.createElement('div'),
        letters = button.textContent.trim().split('');

    function elements(letter, index, array) {

        let element = document.createElement('span'),
            part = (index >= array.length / 2) ? -1 : 1,
            position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
            move = position / (array.length / 2),
            rotate = 1 - move;

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
        element.style.setProperty('--move', move);
        element.style.setProperty('--rotate', rotate);
        element.style.setProperty('--part', part);

        div.appendChild(element);

    }

    letters.forEach(elements);

    button.innerHTML = div.outerHTML;

    button.addEventListener('mouseenter', e => {
        if(!button.classList.contains('out')) {
            button.classList.add('in');
        }
    });

    button.addEventListener('mouseleave', e => {
        if(button.classList.contains('in')) {
            button.classList.add('out');
            setTimeout(() => button.classList.remove('in', 'out'), 950);
        }
    });

});



// function classToggle() {
//     this.classList.toggle('class1');
//     this.classList.toggle('class2');
// }

// document.querySelector('#elmenu').addEventListener('click', classToggle);


function classToggle() {
    var menu = document.getElementById("menu");
    var svg1 = document.getElementById("svgicon1");
    var svg2 = document.getElementById("svgicon2");
    

    svg1.classList.toggle('block');
    svg1.classList.toggle('hidden');

    svg2.classList.toggle('block');
    svg2.classList.toggle('hidden');

    menu.classList.toggle('close');
    menu.classList.toggle('open');

    this.classList.toggle('setopentrue');
    this.classList.toggle('setopenfalse');

}


document.querySelector('#setopen').addEventListener('click', classToggle);


// MODALS

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-modal-hide]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});















// function classToggleModal(modal) {
//     var defaultmodal = document.getElementById("default-modal");
    

//     defaultmodal.classList.toggle('hidden');
//     defaultmodal.classList.toggle('block');

//     // this.classList.toggle('setopentrue');
//     // this.classList.toggle('setopenfalse');

// }

// function classToggleModalQuiropodia(modal) {
//     var defaultmodal = document.getElementById("modal-quiropodia");
    

//     defaultmodal.classList.toggle('hidden');
//     defaultmodal.classList.toggle('block');

// }



// function onClose() {
//     var defaultmodal = document.getElementById("default-modal");
//     var modalQuiropodia = document.getElementById("modal-quiropodia");
//     defaultmodal.classList.toggle('hidden');
//     modalQuiropodia.classList.toggle('hidden');

// }

// document.querySelector('#show-modal').addEventListener('click', classToggleModal);
// document.querySelector('#onClose').addEventListener('click', classToggleModal);
// document.querySelector('#onAcept').addEventListener('click', classToggleModal);

// document.querySelector('#show-modal-quiropodia').addEventListener('click', classToggleModalQuiropodia);



