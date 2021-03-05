///store about lists
    let tasks = [
    {
        task_ID : create_ID(),
        task_title: '',
        task_content: '',
    }
    ]
    allTasks = document.getElementById("center")


    function create_ID(){
    return Date.now();
}
///create and add tast
function addTasks () {
    let title = document.getElementById("exampleFormControlInput1")
    let content = document.getElementById("exampleFormControlTextarea2")
    console.log( content.value  )
    if(content.value === ''){
    alert('Please writing your task...')
}
    else{
    let elem = {
    task_ID : create_ID(),
    task_title: title.value,
    task_content: content.value,
};
    tasks.push(elem);
    createItem(elem);

    title.value = '';
    content.value = '';
}
}
///add item list
    function createItem(element) {

    let item = document.createElement('div'),
    tit = document.createElement('input'),
    text = document.createElement('div');
    remove = document.createElement('button');

    item.classList.add('item');
    tit.classList.add('tit');
    text.classList.add('form-control','input-group');

    remove.classList.add('btn','btn-danger','delBTN');
    remove.innerText = 'Delete'
    remove.addEventListener('click', function () {
    delete_Task(this);
});

    item.id = element.task_ID;
    tit.id = element.task_ID
    tit.value = element.task_title;
    text.innerHTML = element.task_content;

    item.appendChild(tit);
    item.appendChild(text);
    item.appendChild(remove);
    allTasks.appendChild(item);

    changeTitle(element.task_ID,element)
}

    function changeTitle(eleID, el) {
    const input = document.getElementById(eleID);
    console.log(input)
    input.addEventListener('input', updateValue);

    function updateValue(e) {
    textContent = e.target.value;
    el.task_title = textContent;
}
}

    function delete_Task(element) {
    let removeEl = element.parentNode;
    removeEl.remove()
}

