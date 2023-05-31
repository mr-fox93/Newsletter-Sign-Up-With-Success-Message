import React, { useEffect, useState } from "react";
import styled from "styled-components";
import succesimg from "./images/icon-success.svg";
import "./fonts.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Body = styled.body`
  background-color: hsl(235, 18%, 26%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 338px;
  height: 347px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 25px;
  padding: 2rem;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Header = styled.p`
  font-family: "Roboto-Bold", sans-serif;
  color: hsl(234, 29%, 20%);
  font-weight: bold;
  font-size: 40px;
`;

const Info = styled.p`
  font-family: "Roboto-Regular", sans-serif;
  margin-top: 1px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 1.5;
`;

const Button = styled.button`
  font-family: "Roboto-Bold", sans-serif;
  font-size: 17px;
  color: white;
  background-color: hsl(234, 29%, 20%);
  width: 95%;
  height: 60px;
  border-radius: 6px;
  border: none;
`;
const Confirm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setEmail(JSON.parse(data).email);
    }
  }, []);

  const onSubmit = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Body>
      <Modal>
        <StyledImg src={succesimg} />
        <Header>
          Thanks for <br />
          subscribing !
        </Header>
        <Info>
          A confirmation email has been sent to <b>{email}</b> Please open it
          and click the button inside to confirm your subscription.
        </Info>
        <Button onClick={onSubmit}> Dismiss message</Button>
      </Modal>
    </Body>
  );
};

export default Confirm;
