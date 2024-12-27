"use client";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterBox>
          <Title>Need Help</Title>
          <NeedHelpUl>
            <NeedItems href="#">Contact Us</NeedItems>
            <NeedItems href="#">Track Order</NeedItems>
            <NeedItems href="#">Returns & Refunds</NeedItems>
            <NeedItems href="#">FAQ's</NeedItems>
            <NeedItems href="#">Career</NeedItems>
          </NeedHelpUl>
        </FooterBox>

        <FooterBox>
          <Title>Company</Title>
          <NeedHelpUl>
            <NeedItems href="#">About Us</NeedItems>
            <NeedItems href="#">euphoria Blog</NeedItems>
            <NeedItems href="#">euphoriastan</NeedItems>
            <NeedItems href="#">Collaboration</NeedItems>
            <NeedItems href="#">Media</NeedItems>
          </NeedHelpUl>
        </FooterBox>

        <FooterBox>
          <Title>More Info</Title>
          <NeedHelpUl>
            <NeedItems href="#">Term and Conditions</NeedItems>
            <NeedItems href="#">Privacy Policy</NeedItems>
            <NeedItems href="#">Shipping Policy</NeedItems>
            <NeedItems href="#">Sitemap</NeedItems>
          </NeedHelpUl>
        </FooterBox>

        <FooterBox>
          <Title>Location</Title>
          <NeedHelpUl>
            <NeedItems href="#">support@euphoria.in</NeedItems>
            <NeedItems href="#">
              Eklingpura Chouraha, Ahmedabad Main Road
            </NeedItems>
            <NeedItems href="#">
              (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
            </NeedItems>
          </NeedHelpUl>
        </FooterBox>
      </FooterTop>

      <FooterBottom>
        <FooterLeft>
          <SocialIcon src="/images/facebook (1).svg" alt="image" />
          <SocialIcon src="/images/instagram (1).svg" alt="image" />
          <SocialIcon src="/images/twitter (1).svg" alt="image" />
          <SocialIcon src="/images/linkedin (1).svg" alt="image" />
        </FooterLeft>

        <FooterRight>
          <DownloadApp>Download The App </DownloadApp>
          <AppIcons>
            <PlayStoreImage src="/images/Group (1).png" />
            <PlayStoreImage src="/images/Group (2).png" />
          </AppIcons>
        </FooterRight>
      </FooterBottom>

      <FooterCategories>
        <Popular>
          <PopularCategories>Popular Categories</PopularCategories>
        </Popular>
        <ArrowDiv>
          <Arrowicon src="/images/Icon.png" />
        </ArrowDiv>
      </FooterCategories>

      <FooterCopyRights>
        <FooterContent>
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </FooterContent>
      </FooterCopyRights>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #3c4242;
  color: #f6f6f6;
  padding: 59px 110px 10px 110px;
`;
const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  cursor: pointer;
  @media (max-width: 16350px) {
    gap: 30px;
  }
`;
const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 350px;
`;
const Title = styled.h4`
  font-size: 25px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 669px) {
    font-size: 20px;
  }
`;
const NeedHelpUl = styled.ul`
  list-style: none;
  text-decoration: none;
  line-height: 35px;
  margin: 0;
  padding: 0;
`;
const NeedItems = styled.li`
  font-size: 15px;
  font-weight: 300;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 0px;
  border-bottom: 0.1px solid #f6f6f6;
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: start;
    gap: 50px;
  }
`;
const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const SocialIcon = styled.img`
  background-color: #f6f6f6;
  padding: 7px;
  border-radius: 8px;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  cursor: pointer;
`;
const DownloadApp = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 470px) {
    font-size: 15px;
  }
`;
const AppIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 470px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const PlayStoreImage = styled.img``;

const FooterCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1px solid #f6f6f6;
  padding: 30px 0px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Popular = styled.div`
  cursor: pointer;
`;
const PopularCategories = styled.h6`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;
const ArrowDiv = styled.div`
  cursor: pointer;
`;
const Arrowicon = styled.img``;

const FooterCopyRights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  cursor: pointer;
`;
const FooterContent = styled.p`
  font-size: 14px;
  margin: 0;
  @media (max-width: 500) {
    font-size: 10px;
  }
`;
