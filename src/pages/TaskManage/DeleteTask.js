import { Button, Popconfirm, Tooltip } from "antd";
import { deleteTask } from "../../services/taskServices";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteTask(props) {
  const { record, onReload } = props;
  const handleDelete = async () => {
    const response = await deleteTask(record.id);
    if (response) {
      onReload();
    }
  };
  return (
    <>
      <Tooltip title="Xóa bản ghi">
        <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={handleDelete}>
          <Button
            className="ml-5"
            danger
            ghost
            icon={<DeleteOutlined />}
          ></Button>
        </Popconfirm>
      </Tooltip>
    </>
  );
}

export default DeleteTask;
