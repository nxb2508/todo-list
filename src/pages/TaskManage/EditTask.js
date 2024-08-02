import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Switch,
  Tooltip,
  message,
} from "antd";
import { rules } from "../../contants";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { updateTask } from "../../services/taskServices";

const { TextArea } = Input;

function EditTask(props) {
  const { record, onReload } = props;
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleFinish = async (values) => {
    const response = await updateTask(record.id, values);
    if (response) {
      setIsModalOpen(false);
      onReload();
      mess.open({
        type: "success",
        content: "Cập nhật thành công!",
        duration: 5,
      });
    } else {
      mess.open({
        type: "error",
        content: "Cập nhật không thành công!",
        duration: 3,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Tooltip title="Chỉnh sửa">
        <Button
          onClick={showModal}
          className="ml-5"
          icon={<EditOutlined />}
          type="primary"
          ghost
        ></Button>
      </Tooltip>

      <Modal
        title="Chỉnh sửa"
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <Form
          onFinish={handleFinish}
          initialValues={record}
          layout="vertical"
          form={form}
        >
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item label="Tên job" name="name" rules={rules}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Mô tả" name="description">
                <TextArea rows={16} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                valuePropName="checked"
                label="Trạng thái"
                name="status"
              >
                <Switch checkedChildren="Đã Hoàn Thành" unCheckedChildren="Chưa Hoàn Thành" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Cập nhật
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default EditTask;
