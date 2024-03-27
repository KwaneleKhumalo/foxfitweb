import { useState, useEffect } from "react"
import AuthNav from "./AuthNav"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"



const PaymentComponent = () => {
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
      <h1 className="text-center"> Under Construction</h1>
    </>
  )
}

export default PaymentComponent
