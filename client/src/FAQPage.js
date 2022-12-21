import React from "react";
import styled, {css} from "styled-components";
import Navbar from "./Navbar";

// just did some test stuff with styled components here
function FAQPage() {
    const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;

      ${props => props.primary &&
              css`
                background: palevioletred;
                color: white;
              `};
    `;

    const Container = styled.div`
      text-align: center;
    `

    return (
        <div className="FAQPage">
            <Navbar></Navbar>
            <Container>
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </Container>
        </div>
    );
}

export default FAQPage;