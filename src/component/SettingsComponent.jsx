import AuthNav from "./AuthNav"
import UpdateForm from "./UpdateForm"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const SettingsComponent = () => {
  const [userInfo, setUserInfo] = useState("")
  const navigate = useNavigate()

  const getUserInfo = async () => {
    const user = JSON.parse(sessionStorage.getItem("userInfo"))
    if (!user) {
      navigate("/login")
      toast.warning("Please Login!")
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <>
      <AuthNav />
      <UpdateForm />
    </>
  )
}

export default SettingsComponent
