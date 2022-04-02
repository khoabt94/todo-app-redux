import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import { v4 as uuidv4 } from "uuid";
import { todoFilterSelector } from "../store/selectors";
import Todo from "../Todo";
import { todoActions } from "./TodoSlice";

export default function TodoList() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Low");

  const todoFilter = useSelector(todoFilterSelector);
  console.log(todoFilter);

  const dispatch = useDispatch();

  const handleInputChange = (e) => setName(e.target.value);

  const handlePriorityChange = (value) => setPriority(value);

  const handleSubmitToDo = () => {
    const action = todoActions.createTodo({
      id: uuidv4(),
      name,
      priority,
      isComplete: false,
    });
    dispatch(action);
    setName("");
    setPriority("Low");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoFilter?.length > 0 &&
          todoFilter.map((todo) => (
            <Todo
              key={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              id={todo.id}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInputChange} value={name} />
          <Select
            defaultValue="Medium"
            onChange={handlePriorityChange}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleSubmitToDo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
