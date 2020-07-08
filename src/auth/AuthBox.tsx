import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import parseGqlError from "../apollo/parseGqlError";
import { useLoginMutation } from "../generated/graphql";
import { flexAlignCenter, gap } from "../style/helpers";
import ErrorMessage from "../ui/ErrorMessage";
import Input from "../ui/Input";
import LinkButton from "../ui/LinkButton";
import SquareButton from "../ui/SquareButton";
import { useAuth } from "./AuthContext";

type Props = {
  title?: string;
  onSubmit?: () => void;
};

type LoginValues = {
  user: string;
  password: string;
};

const AuthBox: React.FC<Props> = ({ title, onSubmit }) => {
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const [login] = useLoginMutation();
  const { handleSubmit, register, errors, reset } = useForm<LoginValues>();

  const submitHandler = async ({ user, password }: LoginValues) => {
    setError("");

    try {
      const { data } = await login({ variables: { user, password } });

      if (data?.login) {
        setUser(data?.login.accessToken);
        reset();
        if (onSubmit) onSubmit();
      }
    } catch (e) {
      setError(parseGqlError(e.message));
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      {title && <h2>{title}</h2>}

      <Input
        name="user"
        label="Email or username *"
        ref={register({
          required: "Required",
        })}
        error={errors.user?.message}
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

      {error && <ErrorMessage>{error}</ErrorMessage>}

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
