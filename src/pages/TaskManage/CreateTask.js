import GoBack from "../../components/GoBack";
import { Button, Col, Form, Input, Row, Select, Switch, message } from "antd";
import { useEffect, useState } from "react";
import { rules } from "../../contants";
import { createTask } from "../../services/taskServices";
const { TextArea } = Input;


function CreateTask() {
  const [form] = Form.useForm();
  const [mess, contextHolder] = message.useMessage();

  const handleFinish = async (values) => {
    const response = await createTask(values);
    if (response) {
      form.resetFields();
      mess.open({
        type: "success",
        content: "Tạo job mới thành công!",
        duration: 5,
      });
    } else {
      mess.open({
        type: "error",
        content: "Tạo job mới không thành công!",
        duration: 3,
      });
    }
  };

  return (
    <>
      {contextHolder}

      <GoBack />
      
      <h1>Tạo việc cần làm mới</h1>
      
      <Form
        onFinish={handleFinish}
        layout="vertical"
        form={form}
      >
        <Row gutter={20}>
          <Col span={24}>
            <Form.Item label="Tên việc" name="name" rules={rules}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Mô tả" name="description">
              <TextArea rows={16} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default CreateTask;
