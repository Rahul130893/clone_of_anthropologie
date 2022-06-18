import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import image1 from "../images/Anthropologie.svg";
import logo2 from "../images/logo2.svg";
const Container = styled.div`
  border: 1px solid transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;
const Layers1 = styled.div`
  border: 1px solid green;
  width: 100%;
  height: 40px;
  text-align: centre;
  background: #b53b3d;
  color: white;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
const Layers2 = styled.div`
  border: 1px solid transparent;
  width: 100%;
  display: flex;
  justify-content: end;
  background-color: whitesmoke;
  height: 40px;
`;
const Layers3 = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  height: 50px;
  margin-bottom: 10px;
`;
const Layers4 = styled.div`
  border: 1px solid gray;
  width: 100%;
  height: 50px;
`;
const Toptag = styled.p`
  font-style: italic;
  font-size: 13px;
`;

const Atag = styled.a`
  color: white;
  font-size: 14px;
`;

const AtagDiv = styled.div`
  display: flex;

  gap: 50px;
  padding: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const IconDiv = styled.div`
  display: flex;
  gap: 10px;

  width: 150px;
  height: 100%;
  margin-right: 30px;
  background-color: white;
`;
const Icon = styled.div`
  color: teal;
  padding: 8px;

  cursor: pointer;
`;
const English = styled.p`
  font-size: 13px;
  font-family: sans-serif;
`;
const Anthro = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  gap: 20px;
`;
const Logo1 = styled.img`
  border-top: 3px solid teal;
  align-items: center;

  padding: 17px;
`;
const Logo2 = styled.img`
  width: 150px;
`;

const InputBox = styled.input`
  margin-left: 50px;
  margin-top: 3px;
  width: 250px;
  height: 80%;
  border-radius: 5px;
  border: 1px solid gray;
`;

const Navdiv = styled.div`
  width: 80%;
  
  height: 100%;
  margin-left: 73px;
  display: flex;
  gap: 15px;
  font-size: 13px;
`;
const Nav = styled.div`
  

  align-items: center;
  &:hover{
    color:teal;
    border: teal;
  }
`;
const NavP = styled.p`
  text-align: center;
  padding: 5px;
`;

export const Navbar = () => {
  return (
    <Container>
      <Layers1>
        <Toptag>This weekend only</Toptag>
        <Toptag>EXTRA 40% OFF ALL SALE ITEMS!</Toptag>
        <AtagDiv>
          <Atag href="">shop</Atag>
          <Atag href="">all sales final-see details</Atag>
        </AtagDiv>
      </Layers1>

      <Layers2>
        <IconDiv>
          <Icon>
            <LanguageOutlinedIcon />
          </Icon>
          <English>English</English>
          <Icon>
            <KeyboardArrowDownIcon />
          </Icon>
        </IconDiv>
        <IconDiv>
          <Icon>
            <PersonOutlineOutlinedIcon />
          </Icon>

          <English>
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              SignUp /
            </Link>
          </English>

          <English>
            <Link to={"/signin"} style={{ textDecoration: "none" }}>
              SignIn
            </Link>
          </English>
        </IconDiv>
      </Layers2>

      <Layers3>
        <Anthro>
          <Link to={"/"}>
            <Logo1 src={image1} alt="img2" />
          </Link>
          <Logo2 src={logo2} alt="img" />
        </Anthro>
        <Anthro>
          <InputBox placeholder="Search Anthropologie" />

          <ShoppingBagOutlinedIcon
            style={{ color: "teal", marginTop: "8px" }}
          />
        </Anthro>
      </Layers3>

      <Layers4>
        <Navdiv>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>New!</NavP>
            </Nav>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>Dresses</NavP>
            </Nav>
          </Link>
          <Link
            to={"/cloths"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Nav>
              <NavP>Clothing</NavP>
            </Nav>
          </Link>
          <Link
            to={"/shoes"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Nav>
              <NavP>Shoes</NavP>
            </Nav>
          </Link>
          <Link
            to={"/accessories"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Nav>
              <NavP>Accessories</NavP>
            </Nav>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>Gifts & Candles</NavP>
            </Nav>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>Home & Furnitures</NavP>
            </Nav>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>Beauty & Wellness</NavP>
            </Nav>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>Garden & Outdoor</NavP>
            </Nav>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>Weddings</NavP>
            </Nav>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <Nav>
              <NavP>Sale</NavP>
            </Nav>
          </Link>
        </Navdiv>
      </Layers4>
    </Container>
  );
};
