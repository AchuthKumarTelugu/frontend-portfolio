import { Form, Input, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('entered onFinsih', values)
        const response = await axios.post('https://portfolio-backend-3-vdt8.onrender.com/api/portfolio/login', values)
        console.log('send request', response)
        const data = response.data
        console.log('data', data)
        if (data.success) {
            message.success(data.message)
            localStorage.setItem('token',data.token)
            navigate('/admin')
        } else {
            message.error(data.message)
        }


    }
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary'>
            <div className="login-form w-1/3 border-2 shadow-lg p-5 bg-white rounded-lg">
                <h1 className='font-bold text-3xl text-primary mb-5'>Achuth-admin panel</h1>
                <Form onFinish={onFinish} layout='vertical'>
                    <Form.Item name='username' label='username'>
                        <Input type='text' placeholder='username' className='border-2 border-primary outline-none' />
                    </Form.Item>
                    <Form.Item name='password' label='password'>
                        <Input.Password
                            placeholder="input password"
                            visibilityToggle={{
                                visible: passwordVisible,
                                onVisibleChange: setPasswordVisible,
                            }}
                            className='border-2 border-primary outline-none'
                        />
                    </Form.Item>
                    <div className="flex justify-end">
                        <button className='w-full bg-primary text-white font-bold px-6 py-3' type='submit'>Login</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login
