import React from 'react'
import { Form } from 'antd'
import {  message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading, ReloadData } from '../redux/rootSlice'
import axios from 'axios'
function AdminContacts() {
  const { portfolioData } = useSelector(state => state.root)
  const { contact } = portfolioData;
  console.log('contacts', contact)
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    values = { _id: contact._id, ...values }
    console.log('onFinish called', values)
    dispatch(ShowLoading())
    const response = await axios.post('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/update-contacts', values)
    const data=response.data
    dispatch(HideLoading())
    if (data.success) {
      message.success(data.message)
      dispatch(ReloadData(true))
      // alert(data.message)
    } else {
      // alert('data not updated')
      message.error('error occured')
      }
     }

    return (

      (<div>
        <Form layout='vertical' onFinish={onFinish} initialValues={contact} >
          <Form.Item name="name" label='name'>
            <input type="text" placeholder="name" />
          </Form.Item>
          <Form.Item name="email" label='email' initialValue={contact}>
            <input type="text" placeholder='email' />
          </Form.Item>
          <Form.Item name="mobile" label='mobile'>
            <input type="text" placeholder='mobile' />
          </Form.Item>
          <Form.Item name="age" label='age'>
            <input type="text" placeholder='age' />
          </Form.Item>
          <Form.Item name="gender" label='gender'>
            <input type="text" placeholder='gender' />
          </Form.Item>
          <Form.Item name="address" label='address'>
            <textarea type="text" placeholder='address' />
          </Form.Item>
          <div className="flex justify-end w-full">
            <button className='px-8 py-3 bg-primary text-white text-xl' type='submit'>save</button>
          </div>
        </Form>
      </div>)
    )
  }

export default AdminContacts;
