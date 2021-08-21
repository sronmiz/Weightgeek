import React from "react";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

interface IFormButton {
  children?: React.ReactNode;
  variation: "google" | "facebook";
}

const socialIcons = {
  facebook: {
    icon: <FacebookIcon color="#4267B2" size="20px" />,
    link: "http://localhost:4444/auth/facebook/redirect",
  },
  google: {
    icon: <GoogleIcon size="20px" />,
    link: "http://localhost:4444/auth/google/redirect",
  },
};

export const SocialLoginButton: React.FC<IFormButton> = (props) => {
  const { icon, link } = socialIcons[props.variation];

  return (
    <a href={link}>
      <div className="btn">{icon}<div>sign in</div></div>
    </a>
  );
};
