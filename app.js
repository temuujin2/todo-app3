document.querySelector('#nemeh').onclick = function() {
        if (document.querySelector('#input-heseg input').value.length == 0) {
            alert("Бичих хэсэг хоосон байна")
        } else {
            document.querySelector('#list-heseg').innerHTML += `
    <div class="list-inside">
        <span id="list-name">
            ${document.querySelector('#input-heseg input').value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
`;

            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function() {
                    this.parentNode.remove();
                }
            }
        }
    }
    // var isCompleted = document.querySelector('.list-inside input').innerHTML += `<div class="completed"></div>`
    // isCompleted.addEventListener('click', function() {
    //     if (ev.target.tagName === 'input') {
    //         ev.target.classList.toggle('checked');
    //     }
    // }, false);
