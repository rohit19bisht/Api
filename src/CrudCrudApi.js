import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

import profile from './profile.png';
import axios from "axios"

function CrudCrudApi() {

    const [userGet, setUserGet] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [createUserData, setCreateUserData] = useState([]);

    // const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    // const [deleteUserData, setDeleteUserData] = useState("");
    
    useEffect(() => {
        getUserHandle();
    }, [])
    
    const getUserHandle = async () => {
        const getApi = await axios.get(`https://crudcrud.com/api/b14931d1e8bc43e1b7e23404d695d69b/users`);
        console.log(getApi);
        setUserGet(getApi.data);
    }

    const onFinish = async(values) => {
        setCreateUserData(values);
        const postApi = await axios.post(`https://crudcrud.com/api/b14931d1e8bc43e1b7e23404d695d69b/users`, createUserData)
        // setIsModalVisible(false);
        console.log(createUserData)
    };

    // const onFinishDelete = async(values) => {
    //     setDeleteUserData(values);
    //     console.log(deleteUserData);
    //     const deleteApi = await axios.delete(`https://crudcrud.com/api/b14931d1e8bc43e1b7e23404d695d69b/users/${deleteUserData.id}`)
    // };


    const showModal = () => {
        setIsModalVisible(true);
    };

    // const deleteModal = () => {
    //     setDeleteModalVisible(true);
    // };

    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div>
            <header>
                <div className="container">
                    <div className="headerInner">
                        <div className="logo">
                            <span>IMDB Bitch</span>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="movies">
                <div className="container">
                    <ul>
                        <li onClick={showModal}>Create User</li>
                        <li onClick={getUserHandle}>Get User</li>
                        <li>Update User</li>
                        {/* <li onClick={deleteModal}>Delete User</li> */}
                    </ul>
                    <div className="moviesInner">
                    {userGet.map((data) => {
                        return (
                            <div className="movieCard">
                                <img src={profile} />
                                <div className="movieContent">
                                    <p><b>Name:</b> {data.name}</p>
                                    <p><b>Age:</b> {data.age}</p>
                                    <p><b>Xompany:</b> {data.company}</p>
                                    <p><b>Position:</b> {data.position}</p>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </section>

            <footer>
                <p>@copyright 2021 IMDB Bitch</p>
            </footer>

            <Modal title="Basic Modal" visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[{ required: true, message: 'Please input your age!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Company Name"
                        name="company"
                        rules={[{ required: true, message: 'Please input your Company Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Position"
                        name="position"
                        rules={[{ required: true, message: 'Please input your Position!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal> 


            {/* <Modal title="Basic" visible={deleteModalVisible}  onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic modal"
                    initialValues={{ remember: true }}
                    onFinish={onFinishDelete}
                >
                    <Form.Item
                        label="user id"
                        name="id"
                        rules={[{ required: true, message: 'Please input your id!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal> */}

        </div>
    );
}
export default CrudCrudApi;