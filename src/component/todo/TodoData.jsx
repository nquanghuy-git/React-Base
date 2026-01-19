
const TodoData = (props) => {
    //props là 1 object chứa tất cả các thuộc tính được truyền từ component cha
    const { name, age } = props; //destructuring
    console.log("check", props);
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>My age is {age}</div>
        </div>
    )
}

export default TodoData;