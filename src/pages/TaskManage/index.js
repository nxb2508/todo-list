import TaskList from "./TaskList";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function TaskManage() {
  return (
    <>
      <h1>Danh sách việc cần làm</h1>
      <Link to="/create-task">
        <Button icon={<PlusOutlined />}>Thêm việc cần làm</Button>
      </Link>
      <TaskList className="mt-20" />
    </>
  );
}

export default TaskManage;
