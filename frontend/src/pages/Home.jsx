import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  /* border: 1px solid black; */
  /* height:2500px; */
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
 
`;
const TopBox = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  height: 90px;
`;
const ImageTop = styled.img``;
const Middle = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 1px solid blue; */
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const MiddleLeft = styled.div`
  width: 70%;
  /* border: 1px solid pink; */

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
const MiddleRight = styled.div`
  width: 30%;
  /* border: 1px solid pink; */

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Single = styled.img`
  width: 100%;
  height: 600px;
`;
const Double = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  /* border: 1px solid red; */
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 600px;
  /* border: 1px solid red; */
  margin-bottom: 10px;
`;
const Like = styled.div`
  width: 100%;
  height: 400px;
  border-top: 1px solid gray;
  display: flex;
  gap:15px;
  margin-bottom:70px;
`;
const LikeDiv=styled.div`
    width:19%;
    height:100%;
   
    margin-top:20px;
`
const LikeImage = styled.img`
width:100%;
height:100%;
`
const PTag=styled.p`
    text-align: left;
`
const Pt=styled.p`
    color:gray;
    font-size: 14px;
`
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <TopBox>
          <ImageTop
            style={{ height: "100%", width: "100%" }}
            src="https://images.ctfassets.net/5de70he6op10/6jLjT1AyPznRcro3PG6wcj/fb1b201470d651e05c895313ffabdbec/061722_40offSOS_HPG_BBB_LS.jpg?w=1302&q=80&fm=webp"
          />
          <ImageTop
            style={{ height: "100%", width: "100%" }}
            src="https://images.ctfassets.net/5de70he6op10/6vLnpJH9VTKImoPrvc41rm/3eea1c0dc91b3ba7e294667779b7037f/061722_DressFlashSale_HPG_Banner_1.jpg?w=1302&q=80&fm=webp"
          />
        </TopBox>
        <Middle>
          <MiddleLeft>
            <ImageDiv>
              <Single src="https://images.ctfassets.net/5de70he6op10/vU02u4Ed7W7ZkS5Xs4A9F/8bb4ad56dbd9d0cd603893fd9084015b/M1.jpg?w=1756&q=80&fm=webp" />
            </ImageDiv>
            <Double>
              <Single
                style={{ width: "50%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/5KFDrC8FPVViNsVHIErMLE/7536376a0f27b7e56b0a784116135db2/2UP_Getaway.jpg?w=856&q=80&fm=webp"
              />
              <Single
                style={{ width: "50%", height: "100%" }}
                src="https://images.ctfassets.net/5de70he6op10/qY2whtEWgL8dFhYWmuKPw/5698b6b316d710db348adbe5878d1881/061322_HPG_2x_2UP_Skirts.jpg?w=856&q=80&fm=webp"
              />
            </Double>
            <ImageDiv>
              <Single src="https://images.ctfassets.net/5de70he6op10/2QGun4PWRx9cuojWlBQtnW/ce87d8a7fe49937b947fb66185e94dd5/3rd-Row-Home_-Shop-the-Assortment-_-Explore-the-LP.jpg?w=1756&q=80&fm=webp" />
            </ImageDiv>
          </MiddleLeft>
          <MiddleRight>
            <ImageTop
              style={{ height: "450px", width: "100%" }}
              src="https://images.ctfassets.net/5de70he6op10/1TgGoVz8r3iv7bXrpqI7O0/0b8d4b9250154b23aefbd2c9161569ee/RR_Bedding.jpg?w=856&q=80&fm=webp"
            />
            <ImageTop
              style={{ height: "450px", width: "100%" }}
              src="https://images.ctfassets.net/5de70he6op10/1TgGoVz8r3iv7bXrpqI7O0/0b8d4b9250154b23aefbd2c9161569ee/RR_Bedding.jpg?w=856&q=80&fm=webp"
            />
            <ImageTop
              style={{ height: "450px", width: "100%" }}
              src="https://images.ctfassets.net/5de70he6op10/1TgGoVz8r3iv7bXrpqI7O0/0b8d4b9250154b23aefbd2c9161569ee/RR_Bedding.jpg?w=856&q=80&fm=webp"
            />
            <ImageTop
              style={{ height: "450px", width: "100%" }}
              src="https://images.ctfassets.net/5de70he6op10/1TgGoVz8r3iv7bXrpqI7O0/0b8d4b9250154b23aefbd2c9161569ee/RR_Bedding.jpg?w=856&q=80&fm=webp"
            />
          </MiddleRight>
        </Middle>
        <Double
          style={{ height: "620px", width: "100%" }}
        >
          <Single src="https://images.ctfassets.net/5de70he6op10/5sDk11qKleSdvIOvZc35OD/3eee309aaddeabaa38696b5c92e526a2/4th-Row-2UP_Shop-All.jpg?w=1301&q=80&fm=webp" />
          <Single src="https://images.ctfassets.net/5de70he6op10/6zS5hd8iXJvVo6XdWajuVz/e1938a3f0f4a368c3a42cefe3ae7f37b/4th-Row-2UP_New-Apparel-_-Accessories.jpg?w=1301&q=80&fm=webp" />
        </Double>
        <PTag>You May Also Like</PTag>
        <Like>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/4130646420031_001_b2?$an-category$&qlt=80&fit=constrain" />
            <Pt>T.La Classic Comfy Top</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/4123900970003_031_b15?$an-category$&qlt=80&fit=constrain" />
            <Pt>T.La Classic Comfy Top</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/4130647160123_011_b2?$an-category$&qlt=80&fit=constrain" />
            <Pt>T.La Classic Comfy Top</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/4112920170037_031_b2?$an-category$&qlt=80&fit=constrain" />
            <Pt>T.La Classic Comfy Top</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/4122570520023_093_b2?$an-category$&qlt=80&fit=constrain" />
            <Pt>T.La Classic Comfy Top</Pt>
          </LikeDiv>
        </Like>
        <PTag>Trending Now</PTag>
        <Like>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/51542686_070_b2?$an-category$&qlt=80&fit=constrain" />
            <Pt>Botanical Teapot</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/44520443_066_b11?$an-category$&qlt=80&fit=constrain" />
            <Pt>Herbivore Botanical Mini Rose Hibiscus hydrating Face Mist</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/42602557_105_b?$an-category$&qlt=80&fit=constrain" />
            <Pt>Havenview Mural</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/68321181_074_b2?$an-category$&qlt=80&fit=constrain" />
            <Pt>Caronlina K Crochet Bikini Set</Pt>
          </LikeDiv>
          <LikeDiv>
            <LikeImage src="https://images.urbndata.com/is/image/Anthropologie/4130348690173_066_b2?$an-category$&qlt=80&fit=constrain" />
            <Pt>By Anthropologie Off-The Shoulder Linen Mini Dress</Pt>
          </LikeDiv>
        </Like>
      </Container>
      <Footer />
    </div>
  );
};
