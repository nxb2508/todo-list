/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Table, Tag, Tooltip, Space } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import EditJob from "./EditTask";
import DeleteTask from "./DeleteTask";
import { getAllTasks } from "../../services/taskServices";

function TaskList(props) {
  const { className = "" } = props;
  const [tasks, setTasks] = useState([]);

  const fetchApi = async () => {
    const response = await getAllTasks();
    if (response) {
      setTasks(response.reverse());
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  const columns = [
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <>
          {record.status ? (
            <Tag color="green">Hoàn Thành</Tag>
          ) : (
            <Tag color="red">Chưa Hoàn Thành</Tag>
          )}
        </>
      ),
    },{
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <>
          <Space size="middle">
          <Link to={`/detail-task/${record.id}`}>
            <Tooltip title="Xem chi tiết">
              <Button icon={<EyeOutlined />}></Button>
            </Tooltip>

          </Link>
          </Space>
          <Space size="middle">
            
          <EditJob record={record} onReload={handleReload} />
          </Space>
          <Space size="middle">
            
          <DeleteTask record={record} onReload={handleReload} />
          </Space>
          
        </>
      ),
    },
  ];

  return (
    <>
      <div className={className}>
        <Table dataSource={tasks} columns={columns} rowKey="id" />
      </div>
    </>
  );
}

export default TaskList;
