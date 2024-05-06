function Todo({ todo, index, remove }) {
    function handle() {
        remove(index);
    }
    return <div className="todo">{todo.text}
        <button><img className="remove-button" width="25" height="25" src="./img/trash.png" alt="remove this todo task" onClick={handle} /></button>
    </div>;
}