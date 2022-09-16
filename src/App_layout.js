import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Upload, Popconfirm, Avatar, Menu, Breadcrumb } from "antd";
import { Layout } from "antd";
import { Typography, Divider, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title, Paragraph, Text, Link } = Typography;
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "blue" }}>
          <Title level={3}>h3. Ant Design</Title>
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: "red" }}>
            Sider
            <Menu
              onClick={handleClick}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <Menu.Item>Dashboard</Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{ backgroundColor: "#FFF" }}
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
              <Typography>
                <Title>Introduction</Title>
                <Title>h1. Ant Design</Title>
                <Title level={2}>h2. Ant Design</Title>
                <Title level={3}>h3. Ant Design</Title>
                <Title level={4}>h4. Ant Design</Title>
                <Title level={5}>h5. Ant Design</Title>
                <Avatar src="./logo192.png" />
                <Space>
                  Space
                  <Button type="primary">Button</Button>
                  <Upload>
                    <Button>
                      <UploadOutlined /> Click to Upload
                    </Button>
                  </Upload>
                  <Popconfirm
                    title="Are you sure delete this task?"
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button>Confirm</Button>
                  </Popconfirm>
                </Space>
                <Divider />
                <Space direction="vertical">
                  <Text>Ant Design (default)</Text>
                  <Text type="secondary">Ant Design (secondary)</Text>
                  <Text type="success">Ant Design (success)</Text>
                  <Text type="warning">Ant Design (warning)</Text>
                  <Text type="danger">Ant Design (danger)</Text>
                  <Text disabled>Ant Design (disabled)</Text>
                  <Text mark>Ant Design (mark)</Text>
                  <Text code>Ant Design (code)</Text>
                  <Text keyboard>Ant Design (keyboard)</Text>
                  <Text underline>Ant Design (underline)</Text>
                  <Text delete>Ant Design (delete)</Text>
                  <Text strong>Ant Design (strong)</Text>
                  <Link href="https://ant.design" target="_blank">
                    Ant Design (Link)
                  </Link>
                </Space>
                <Paragraph>
                  In the process of internal desktop applications development,
                  many different design specs and implementations would be
                  involved, which might cause designers and developers
                  difficulties and duplication and reduce the efficiency of
                  development.
                </Paragraph>
                <Paragraph>
                  After massive project practice and summaries, Ant Design, a
                  design language for background applications, is refined by Ant
                  UED Team, which aims to
                  <Text strong>
                    uniform the user interface specs for internal background
                    projects, lower the unnecessary cost of design differences
                    and implementation and liberate the resources of design and
                    front-end development
                  </Text>
                  .
                </Paragraph>
                <Title level={2}>Guidelines and Resources</Title>
                <Paragraph>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (<Text code>Sketch</Text>{" "}
                  and <Text code>Axure</Text>), to help people create their
                  product prototypes beautifully and efficiently.
                </Paragraph>

                <Paragraph>
                  <ul>
                    <li>
                      <a href="/docs/spec/proximity">Principles</a>
                    </li>
                    <li>
                      <a href="/docs/pattern/navigation">Patterns</a>
                    </li>
                    <li>
                      <a href="/docs/resource/download">Resource Download</a>
                    </li>
                  </ul>
                </Paragraph>

                <Paragraph>
                  Press <Text keyboard>Esc</Text> to exit...
                </Paragraph>

                <Divider />
              </Typography>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design Layout example
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
