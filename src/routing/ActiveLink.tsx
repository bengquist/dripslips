import Link, { LinkProps } from "next/link";
import { SingletonRouter, withRouter } from "next/router";
import React, { Children } from "react";

type Props = {
  router: SingletonRouter;
  activeClassName?: string;
  disabled?: boolean;
} & LinkProps;

const ActiveLink: React.FC<Props> = ({
  router,
  children,
  activeClassName = "active",
  ...props
}) => {
  const child = Children.only(children) as any;

  let className = child.props.className || null;

  if (router.pathname === props.href && activeClassName) {
    className = `${
      className !== null ? className : ""
    } ${activeClassName}`.trim();
  }

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className,
        style: {
          borderBottom: `1px solid ${className ? "black" : "transparent"}`,
        },
      })}
    </Link>
  );
};

export default withRouter(ActiveLink);
