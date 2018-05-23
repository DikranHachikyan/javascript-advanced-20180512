const todoView = (todo)=>{
    const render = ()=>{
        const {id, title, completed } = todo;

        let title$ = (completed)?`<del class="w-75 text-truncate" >${title}</del>`
                               :`<span class="w-75 text-truncate">${title}</span>`;
        return `<li class="list-group-item" data-id="${id}">
                  <input type="checkbox" class="toggleCompleted mr-2" ${completed?"checked":""} />
                  <button class="remove close mr-2 text-danger">
                  </button>
                  <span>${title$}</span>
                </li>`;
    };

    return {
        render
    };
};