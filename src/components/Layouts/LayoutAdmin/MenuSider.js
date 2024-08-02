import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

function MenuSider() {
  const location = useLocation();

  const items = [
    {
      key: "/",
      icon: <UnorderedListOutlined />,
      label: <Link to="/">Quản lý việc cần làm</Link>,
    }
  ];

  return (
    <>
      <Menu
        items={items}
        mode="inline"
        defaultOpenKeys={["/dashboard"]}
        defaultSelectedKeys={[location.pathname]}
      />
    </>
  );
}

export default MenuSider;
