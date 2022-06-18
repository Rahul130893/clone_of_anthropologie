import styled from "styled-components";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Container = styled.div`
  
  width: 100%;
  height: 500px;
  margin-top: 120px;
`;
const Upper = styled.div`
  height: 200px;
  font-size: 12px;
  border: 1px solid darkgray;
  text-align: center;
`;
const Upper1 = styled.div`
  height: 70%;
  width: 85%;
  margin: auto;
  
  display: flex;
  gap: 30px;
`;
const UpperLeft = styled.div`
  
  width: 47%;
`;
const UpperRight = styled.div`
  
  width: 50%;
`;
const UpperP = styled.p`
  color: gray;
`;
const Blue = styled.p`
  color: blue;
`;
const Lefthead = styled.p`
  font-size: 18px;
  text-align: left;
`;
const RightBox = styled.div`
  display: flex;
  gap: 10px;
`;
const Inputbox = styled.input`
  border: 1px solid gray;
  height: 40px;
  width: 350px;
`;
const ButtonS = styled.button`
  color: white;
  background-color: #4b5666;
  height: 43px;
  width: 150px;
  border: none;
  &:hover{
    cursor: pointer;
  }
`;

const Lower = styled.div`
  /* border: 1px solid green; */
  height: 300px;
  width: 70%;
  display: flex;
  margin: auto;
`;
const LowerBox = styled.div`
  /* border: 1px solid blue; */
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const LowerA = styled.a`
  font-size: 13px;
  margin-bottom: 20px;
  text-decoration:none;
  color:black;
  &:hover{
    color:teal;
  }
`;
const LowerIcon = styled.div`
  display: flex;
  /* border: 1px solid pink; */
  color: teal;
  display: flex;
  
`;

export const Footer = () => {
  return (
    <Container>
      <Upper>
        <Upper1>
          <UpperLeft>
            <Lefthead>SignUp for Email</Lefthead>
            <UpperP style={{ textAlign: "left", fontSize: "14px" }}>
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </UpperP>
          </UpperLeft>
          <UpperRight>
            <UpperP
              style={{ textAlign: "left", fontSize: "18px", color: "black" }}
            >
              Email Address*
            </UpperP>
            <RightBox>
              <Inputbox />
              <ButtonS>Submit</ButtonS>
            </RightBox>
          </UpperRight>
        </Upper1>
        <UpperP>
          By signing up, you will receive Anthropologie offers, promotions and
          other commercial messages. You are also agreeing to Anthropologie’s
          Privacy Policy. You may unsubscribe at any time.
        </UpperP>
      </Upper>

      <Lower>
        <LowerBox>
          <LowerA href="" style={{ fontSize: "15px", fontWeight: "500" }}>
            Help
          </LowerA>
          <LowerA href="">Track Your Order</LowerA>
          <LowerA href="">Start A Return or Exchange(US)</LowerA>
          <LowerA href="">Return & Exchanges</LowerA>
          <LowerA href="">Shipping</LowerA>
          <LowerA href="">Customer Services</LowerA>
          <LowerA href="">Current Promotions</LowerA>
          <LowerA href="">Products Recalls</LowerA>
        </LowerBox>
        <LowerBox>
          <LowerA href="" style={{ fontSize: "15px", fontWeight: "500" }}>
            About Us
          </LowerA>
          <LowerA href="">Our Story</LowerA>
          <LowerA href="">Events</LowerA>
          <LowerA href="">A Greater Good</LowerA>
          <LowerA href="">Diversity & Inclusion</LowerA>
          <LowerA href="">Stories</LowerA>
        </LowerBox>
        <LowerBox>
          <LowerA href="" style={{ fontSize: "15px", fontWeight: "500" }}>
            Services
          </LowerA>
          <LowerA href="">AnthroPerks</LowerA>
          <LowerA href="">Trade MemberShip</LowerA>
          <LowerA href="">Furniture: Guides & Services</LowerA>
          <LowerA href="">Store PickUp & Collection Points</LowerA>
          <LowerA href="">Klarna</LowerA>
        </LowerBox>
        <LowerBox>
          <LowerA href="" style={{ fontSize: "15px", fontWeight: "500" }}>
            Connect
          </LowerA>
          <LowerA href="">Contact Us</LowerA>
          <LowerA href="">Stay Connected</LowerA>
          <LowerA href="">Careers</LowerA>
          <LowerA href="">Styling Services</LowerA>
          <LowerA href="">Request A Catalog</LowerA>
        </LowerBox>
        <LowerBox>
          <LowerIcon>
            <AddLocationOutlinedIcon />
            <LowerA>Store Locator</LowerA>
          </LowerIcon>
          <LowerIcon>
            <EmailOutlinedIcon />
            <LowerA>Email</LowerA>
          </LowerIcon>
        </LowerBox>
      </Lower>
    </Container>
  );
};
