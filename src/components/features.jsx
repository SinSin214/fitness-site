import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { span: 2 }
};

function Features() {
  const [data, setData] = useState({
    age: null,
    height: null,
    weight: null,
    target: null
  })

  function handleChange(evt){
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value
    });
  }

  function processData(){
    console.log(data);
  }

  return (
    <div id="features">
      <div className="container">
        <div className="section-title text-center">
          <h2>Calory Calculator</h2>
        </div>
        <div className="form-calculator">
          <Form {...layout} name="basic" initialValues={{ remember: true }}>
            <Form.Item
              label="Your Age"
              onChange={handleChange}
              rules={[{ required: true, message: "Please input your age!" }]}
            >
              <InputNumber min={16} max={60} style={{ width: '100%' }} name="age" />
            </Form.Item>

            <Form.Item
              label="Your current height (cm)"
              onChange={handleChange}
              rules={[{ required: true, message: "Please input your height!" }]}
            >
              <InputNumber min={120} max={220} style={{ width: '100%' }} name="height" />
            </Form.Item>

            <Form.Item
              label="Your current weight (kg)"
              onChange={handleChange}
              rules={[{ required: true, message: "Please input your weight!" }]}
            >
              <InputNumber min={30} max={200} style={{ width: '100%' }} name="weight" />
            </Form.Item>

            <Form.Item
              label="Your target"
              onChange={handleChange}
              rules={[
                { required: true, message: "Please select your target!" },
              ]}
            >
              <Select name="target">
                <Select.Option value="1">Gain weight</Select.Option>
                <Select.Option value="2">Sharp muscle</Select.Option>
                <Select.Option value="3">Lose weight</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" onClick={() => processData()}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Features;
