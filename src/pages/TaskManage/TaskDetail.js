/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { useEffect, useState } from "react";
import { getDetailTask } from "../../services/taskServices";
import { Tag } from "antd";

function TaskDetail() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailTask(params.id);
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);

  console.log(data);

  return (
    <>
      <GoBack />
      {data && (
        <>
          <h1>Tên việc cần làm: {data.name}</h1>
          <div className="mb-20">
            <span>Trạng thái: </span>
            {data.status ? (
              <Tag color="green">Đã Hoàn Thành</Tag>
            ) : (
              <Tag color="red">Chưa Hoàn Thành</Tag>
            )}
          </div>
          <div className="mb-20">
            <div className="mb-10">Mô tả:</div>
            <div>{data.description}</div>
          </div>
        </>
      )}
    </>
  );
}

export default TaskDetail;
