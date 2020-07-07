import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { flexAlignCenter, gap } from "../style/helpers";
import Input from "../ui/Input";
import LinkButton from "../ui/LinkButton";
import SquareButton from "../ui/SquareButton";

type Props = {
  title?: string;
};

const AuthBox: React.FC<Props> = ({ title }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {title && <h2>{title}</h2>}
      <Input
        name="email"
        label="Login *"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        error={errors.email?.message}
      />

      <Input
        name="password"
        type="password"
        label="Password *"
        ref={register({
          required: "Required",
        })}
        error={errors.password?.message}
      />

      <LinkButton type="button">Forgot your password?</LinkButton>

      <div style={{ width: "100%" }} css={[flexAlignCenter, gap({ right: 1 })]}>
        <SquareButton variant="secondary" type="button">
          Register
        </SquareButton>
        <SquareButton type="submit">Sign In</SquareButton>
      </div>
    </Form>
  );
};

export default AuthBox;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  ${gap({ bottom: 2 })}
  padding: 2rem;

  > h2 {
    margin-bottom: 1rem;
  }
`;
