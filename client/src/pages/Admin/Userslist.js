import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/alertsSlice'
import { axios } from 'axios';

function Userslist() {
  const [users , setUsers] = useState([])
  const dispatch = useDispatch()

    const getUsersData=async()=>{
       try {
        dispatch(showLoading())
        const response = await axios.get('/api/admin/get-all-users' , {} , {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,            }
        })
        dispatch(hideLoading())
        if(response.data.success){
            setUsers(response.data.data)
        }
       } catch (error) {
        dispatch(hideLoading())
       }
    }


    useEffect(() => {
      getUsersData()
    }, [])
    
  return (
    <Layout>
     <h1 className="page-header">Users List</h1>
      </Layout>
  )
}

export default Userslist
