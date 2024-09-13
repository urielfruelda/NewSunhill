import React from 'react';
import { Card, Col, Row } from 'antd';


function Dashboard() {


  return (
    <div>
      <h1>Dashboard</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Total Students" bordered={false}>
            100
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Teachers" bordered={false}>
            20
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Parents" bordered={false}>
            80
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Student Distribution" bordered={false}>
         
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
