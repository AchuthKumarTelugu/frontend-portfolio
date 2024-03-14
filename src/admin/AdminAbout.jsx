import React from 'react'
import { Form } from 'antd'
import {  message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../redux/rootSlice'
import axios from 'axios'
function AdminAbout() {
  const [messageApi, contextHolder] = message.useMessage()
  const { portfolioData } = useSelector(state => state.root)
  const { abouts } = portfolioData;
  console.log('abouts', abouts)
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    values = { _id: abouts._id, ...values,skills:values.skills.split(',') }
    console.log('onFinish called', values)
    dispatch(ShowLoading())
    const response = await axios.post('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/update-abouts', values)
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
        <Form layout='vertical' onFinish={onFinish} initialValues={portfolioData.abouts} >
          <Form.Item name="lottieUrl" label='lottieUrl'>
            <input type="text" placeholder="lottieUrl" />
          </Form.Item>
          
          <Form.Item name="description1" label='description1'>
            <textarea type="text" placeholder='description1' />
          </Form.Item>
          <Form.Item name="description2" label='description2'>
            <textarea type="text" placeholder='description2' />
          </Form.Item>
          <Form.Item name="skills" label='skills'>
            <textarea type="text" placeholder='skills' />
          </Form.Item>
          <div className="flex justify-end w-full">
            <button className='px-8 py-3 bg-primary text-white text-xl' type='submit'>save</button>
          </div>
        </Form>
      </div>)
    )
  }

export default AdminAbout;
