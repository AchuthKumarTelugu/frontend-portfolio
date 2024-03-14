import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Modal,message } from 'antd'
import axios from 'axios'
import { HideLoading, ReloadData, ShowLoading } from '../redux/rootSlice'
function AdminProjects() {
  const formRef= useRef(null)
  const { portfolioData } = useSelector(state => state.root)
  const { projects } = portfolioData
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
  const handleCancel = () => {
    setShowModal(false)
    if(!selectedItemForEdit) {
    setSelectedItemForEdit(null)
    }
  }
  const handleOpenModal = (value) => {
    
    setSelectedItemForEdit(value)
    setShowModal(true)
    console.log('data in openModal',value)
    if(formRef.current ) {
        if(value && value) {
            formRef.current.setFieldsValue({...value,techStack: value.techStack.join(',')})
        }
    }
    console.log('data in modal',value)
  }
  const onFinish = async(values) => {
    console.log('entered onFinish', values)
    try {
      dispatch(ShowLoading())
      let response;
      if(selectedItemForEdit){
        response=await axios.post('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/update-projects',{
          _id: selectedItemForEdit._id ,
          ...values,techStack: values.techStack.split(",")
        })
      }else{
        console.log('entered add projects',values)
       response=await axios.post('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/add-projects',{...values,techStack: values.techStack.split(",")})
      }
      dispatch(HideLoading())
      const data=response.data
      if(data.success) {
        message.success(data.message)
        dispatch(ReloadData(true))
        setSelectedItemForEdit(null)
      }else{
        message.error('error occured')
      }
    } catch (error) {
      console.log(error)
      message.error(error.message)
    }
    handleCancel()
  }
const handleDelete = async(value) => {
  try {
    const res=await axios.post('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/delete-projects',value)
    const data=res.data
    if(data.success) {
      console.log('deleted data',data)
      message.success(data.message)
      dispatch(ReloadData(true))
    }else{
      message.error(data.message)
    }
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <div>
      <div className="flex justify-end ml-3 my-2">
        <button className="bg-primary text-white px-4 py-2"
          onClick={()=>{
            formRef.current.resetFields()
            handleOpenModal(null)}}
        >Add Projects</button>
      </div>
      <div className='grid grid-cols-4'>
        {
          projects.map((value, index) => (
            <div key={index} className='m-3 flex flex-col gap-2 border-2 p-6 hover:shadow-lg '>
              <h1 className='font-bold text-2xl text-primary'>{value.title}</h1>
              <hr />
              <p>{value.description}</p>
              <a href={value.link} target='_blank'><h5 className='text-blue-500 font-bold'>Go to Website</h5></a>
              
              <div className="flex justify-end mt-5">
                <button className='bg-primary text-white px-5 py-3 mx-2'
                  onClick={()=>handleOpenModal(value)}
                >Edit</button>
                <button className='bg-red-600 text-white px-5 py-3 mx-2' onClick={()=>handleDelete(value)}>delete</button>
              </div>
            </div>
          ))
        }
      </div>
      <Modal
        open={showModal}
        title={selectedItemForEdit ? "Edit Projects" : "Add Projects"}
        footer={null} onCancel={()=>{
          handleCancel()
          setSelectedItemForEdit(null)
        }}
      >
        <Form layout='vertical' onFinish={onFinish} ref={formRef}  >
          <Form.Item name='title' label='title'>
            <input placeholder='title' />
          </Form.Item>
          <Form.Item name='techStack' label='techStack'>
            <input placeholder='techStack' />
          </Form.Item>
          <Form.Item name='description' label='description'>
            <textarea placeholder='description' />
          </Form.Item>
          <Form.Item name='link' label='link'>
            <input placeholder='link' />
          </Form.Item>
          <Form.Item name='image' label='image'>
            <input placeholder='image' />
          </Form.Item>
          <div className="flex justify-end gap-2">
            <button className='border-2 border-primary text-primary px-4 py-2'
              onClick={handleCancel}
            >Cancel</button>
            <button className='bg-primary text-white px-4 py-2'>
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default AdminProjects
