/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Link } from "react-router-dom";
import { FooterWrap } from "../style/GlobalComponents";

const Footer = () => {
  return (
    <FooterWrap>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_footer.svg`}
            alt="로고"
          />
          <ol>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </li>
        <li>
          <Link to="">만든 사람들</Link>
        </li>
        <li>
          <p>
            Product by.<span>PODOJect</span>
          </p>
        </li>
      </ul>
    </FooterWrap>
  );
};

export default Footer;
