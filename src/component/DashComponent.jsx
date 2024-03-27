import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthNav from "./AuthNav";
import CustomAlert from "./Alert";

const DashComponent = () => {
  const [userInfo, setUserInfo] = useState("");
  const [isPaid, setIsPaid] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const navigate = useNavigate();

  const getUserInfo = async () => {
    const user = JSON.parse(sessionStorage.getItem("userInfo"));
    if (user) {
      setUserInfo(user);
      setIsPaid(user.isPaid);
      setEnrollment(user.enrollment);
    } else {
      navigate("/login");
      toast.warning("You are not logged in!");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const isNotPaid = `Your account is due for payment of $${enrollment.membershipCost}.00`;
  const isNotPaidAttention = `Important Message about your account!`;
  return (
    <>
      <AuthNav />
      <Row>{isPaid === false ? <CustomAlert message={isNotPaid} heading={isNotPaidAttention} variant={"danger"} /> : <h1 className="text-center mt-5 text-secondary">Dashboard is Under Construction</h1>}</Row>
    </>
  );
};

export default DashComponent;
