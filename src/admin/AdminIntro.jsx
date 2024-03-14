import React from 'react'
import { Form } from 'antd'
import {  message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../redux/rootSlice'
import axios from 'axios'
function AdminIntro() {
  const [messageApi, contextHolder] = message.useMessage()
  const { portfolioData } = useSelector(state => state.root)
  const { intros } = portfolioData;
  console.log('intros', intros)
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    values = { _id: intros._id, ...values }
    // console.log('onFinish called', values)
    dispatch(ShowLoading())
    const response = await axios.post('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/update-intros', values)
    const data=response.data
    dispatch(HideLoading())
    if (data.success) {
      message.success(data.message)
      // alert(data.message)
    } else {
      // alert('data not updated')
      message.error('error occured')
      }
     }

    return (

      (<div>
        <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.intros} >
          <Form.Item name="welcomeText" label='welcome text'>
            <input type="text" placeholder="welcome Text" />
          </Form.Item>
          <Form.Item name="firstName" label='firstName'>
            <input type="text" placeholder='firstName' />
          </Form.Item>
          <Form.Item name="lastName" label='lastName'>
            <input type="text" placeholder='lastName' />
          </Form.Item>
          <Form.Item name="caption" label='caption'>
            <input type="text" placeholder='caption' />
          </Form.Item>
          <Form.Item name="description" label='description'>
            <textarea type="text" placeholder='description' />
          </Form.Item>
          <div className="flex justify-end w-full">
            <button className='px-8 py-3 bg-primary text-white text-xl' type='submit'>save</button>
          </div>
        </Form>
      </div>)
    )
  }

export default AdminIntro;
