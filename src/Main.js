import "./App.css";
import styled from "styled-components";
import "./fonts.scss";
import image from "./images/illustration-sign-up-desktop.svg";
import succesimg from "./images/icon-success.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Body = styled.body`
  background-color: hsl(235, 18%, 26%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Modal = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1.5rem;
  width: 650px;
  height: 450px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 25px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Roboto-Bold", sans-serif;
    color: hsl(234, 29%, 20%);
    font-weight: bold;
    font-size: 40px;
  }

  p {
    font-family: "Roboto-Regular", sans-serif;
    margin-top: 1px;
    font-size: 16px;
  }
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 30px;
  border-radius: 6px;
  border: 1px solid gray;
  padding: 0.5rem;
`;

const Button = styled.button`
  font-family: "Roboto-Bold", sans-serif;
  font-size: 16px;
  color: white;
  background-color: hsl(234, 29%, 20%);
  margin-top: 15px;
  width: 95%;
  height: 40px;
  border-radius: 6px;
  border: none;
`;

const StyledImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-,]+$/,
      `Email is not valid`
    ),
});
function Main() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    reset();
    navigate("/confirm");
  };
  return (
    <>
      <Body>
        <Modal>
          <LeftContent>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <p>
              <StyledImg src={succesimg} /> Product discovery and building what
              matters
            </p>
            <p>
              <StyledImg src={succesimg} /> Measuring to ensure updates are a
              success
            </p>
            <p>
              <StyledImg src={succesimg} /> And much more!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*<label htmlFor="email">Email adress</label>*/}
              <Input
                id="email"
                placeholder="example@com.pl"
                {...register("email")}
                style={
                  errors.email
                    ? {
                        borderColor: "red",
                        backgroundColor: "hsl(4, 100%, 67%)",
                      }
                    : null
                }
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "15px", marginTop: "5px" }}>
                  {errors.email.message}
                </p>
              )}
              <Button type="submit"> Subscribe to monthly newsletter</Button>
            </form>
          </LeftContent>
          <RightContent>
            <img
              style={{ width: "300px", height: "430px" }}
              src={image}
              alt="Sign Up Illustration"
            />
          </RightContent>
        </Modal>
      </Body>
    </>
  );
}

export default Main;

// reset kasuje input w useForm !! daje reset do useForm i reset() do funkcji onSubmit.
// <label htmlFor nadaje napis nad input ale input i label ma miec to samo 'id' !!
