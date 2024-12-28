"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function MenProductDetailsPage({ params }) {
  const param = use(params);
  const id = param.id;
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const router = useRouter();

  const sizesToShow = product?.size || ["S", "M", "L", "XL"];
  const colorsToShow = product?.colors || [
    "Red",
    "#EDD146",
    "#EB84B0",
    "#9C1F35",
  ];
  const imagesToShow = product?.images || [
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  ];

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSimilarProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const filteredProducts = res.data.filter(
        (product) => product.category === "men's clothing"
      );
      setSimilarProducts(filteredProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductData();
    fetchSimilarProducts();
  }, [id]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const [isClicked, setIsclicked] = useState({});
  const handleLikeClick = (productId) => {
    setIsclicked((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleProductClick = (id) => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div>Loading Product details.....!!!</div>;

  return (
    <>
      <BottomLine />
      <PageContainer>
        <LeftSection>
          <ImageSlider>
            {imagesToShow.map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                active={index === activeImage}
                onClick={() => setActiveImage(index)}
                alt="Product thumbnail"
              />
            ))}
            <ArrowButton
              onClick={() =>
                setActiveImage((activeImage + 1) % imagesToShow.length)
              }
            >
              &#8595;
            </ArrowButton>
          </ImageSlider>
          <ProductImage src={`${product.image}`} alt="Product" />
        </LeftSection>

        <RightSection>
          <Path>Shop &gt; Men &gt; {product.category}</Path>
          <ProductTitle>{product.title}</ProductTitle>
          <RatingSection>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star key={i} active={i < Math.round(product.rating.rate)}>
                  ★
                </Star>
              ))}
            </Rating>
            <CountTag>{product.rating.rate}</CountTag>
            <CommentsIcon src="/images/Icon.svg" alt="image"></CommentsIcon>
            <CommentText>{product.rating.count} Comments</CommentText>
          </RatingSection>

          <SizeSection>
            <SizeTitle>
              <Text1>Select Size</Text1>
              <Text2>Size Guide &#8594;</Text2>
            </SizeTitle>
            <SizeBox>
              {sizesToShow.map((size) => (
                <SizeOption
                  key={size}
                  selected={size === selectedSize}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </SizeOption>
              ))}
            </SizeBox>
          </SizeSection>

          <ColorSection>
            <ColorTitle>Colors Available</ColorTitle>
            <ColorBox>
              {colorsToShow.map((color) => (
                <ColorOption
                  key={color}
                  color={color}
                  selected={color === selectedColor}
                  onClick={() => handleColorSelect(color)}
                />
              ))}
            </ColorBox>
          </ColorSection>

          <CartButton>
            <AddToCartButton>
              <CartIcon src="/images/Icon (2).svg" alt="no-svg" />
              Add to Cart
            </AddToCartButton>
            <Price>$ {product.price}</Price>
          </CartButton>
          <GreyLine />

          <BottomInfo>
            <InfoItem>
              <InfoIcon src="/images/credit card.svg" alt="no-svg" />
              <InfoText>Secure Payment</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon src="/images/Size & Fit.svg" />
              <InfoText>Size & Fit</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon src="/images/truck.svg" />
              <InfoText>Free Shipping</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon src="/images/Free Shipping & Returns.svg" />
              <InfoText>Free Shipping & Returns</InfoText>
            </InfoItem>
          </BottomInfo>
        </RightSection>
      </PageContainer>

      <ProductDescription>
        <Top>
          <Span></Span>
          <Heading>Product Description</Heading>
        </Top>
        <Container>
          <LeftBox>
            <TabsContainer>
              <Tab1>
                Description <Line></Line>
              </Tab1>
              <Tab2>
                User Comments &nbsp; <Num1>21</Num1>{" "}
              </Tab2>
              <Tab3>
                Question & Answer &nbsp; <Num2>4</Num2>
              </Tab3>
            </TabsContainer>
            <Description> {product.description} </Description>
          </LeftBox>

          <DetailsContainer>
            <Detail>
              <Label>Fabric</Label>
              <Value>{product.category}</Value>
            </Detail>
            <Detail>
              <Label>Pattern</Label>
              <Value>Printed</Value>
            </Detail>
            <Detail>
              <Label>Fit</Label>
              <Value>Regular-fit</Value>
            </Detail>
            <Detail>
              <Label>Neck</Label>
              <Value>Round Neck</Value>
            </Detail>
            <Detail>
              <Label>Sleeve</Label>
              <Value>Half-sleeves</Value>
            </Detail>
            <Detail>
              <Label>Style</Label>
              <Value>Casual Wear</Value>
            </Detail>
          </DetailsContainer>
        </Container>
      </ProductDescription>

      <CategoryContainer>
        <TopBox>
          <Span1></Span1>
          <Heading1>Similar Products</Heading1>
        </TopBox>
        <ProductGrid>
          {similarProducts.map((product) => (
            <ProductCard key={product.id}>
              <LikeButton onClick={() => handleLikeClick(product.id)}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.49486 2.59679C6.99535 0.849278 4.49481 0.379202 2.61602 1.9794C0.737233 3.5796 0.472726 6.25506 1.94815 8.14762C3.17486 9.72116 6.88733 13.0399 8.10407 14.114C8.2402 14.2342 8.30827 14.2943 8.38766 14.3179C8.45695 14.3385 8.53277 14.3385 8.60207 14.3179C8.68146 14.2943 8.74952 14.2342 8.88565 14.114C10.1024 13.0399 13.8149 9.72116 15.0416 8.14762C16.517 6.25506 16.2848 3.56277 14.3737 1.9794C12.4626 0.396034 9.99438 0.849278 8.49486 2.59679Z"
                    fill={isClicked[product.id] ? "red" : "none"}
                    stroke={isClicked[product.id] ? "red" : "#807D7E"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </LikeButton>

              <SimilarProductImage
                src={product.image}
                alt="No-Image"
                onClick={() => handleProductClick(product.id)}
              />
              <CardDetails>
                <LeftSide>
                  <ProductName>{product.title}</ProductName>
                  <BrandName>Otto</BrandName>
                </LeftSide>
                <RightSide>
                  <PriceBox>
                    <ProductPrice>$ {product.rating.count}</ProductPrice>
                  </PriceBox>
                </RightSide>
              </CardDetails>
            </ProductCard>
          ))}
        </ProductGrid>
      </CategoryContainer>
    </>
  );
}
const BottomLine = styled.div`
  height: 1px;
  background-color: #bebcbd;
`;
const CountTag = styled.span`
  color: #807d7e;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 470px) {
    font-size: 10px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;
const Star = styled.span`
  font-size: 26px;
  color: ${(props) => (props.active ? "gold" : "#ccc")};
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 980px) {
    padding-bottom: 0px;
  }
  @media screen and (min-width: 650px) and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: left;
    gap: 25px;
    margin-left: 50px;
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: left;
    gap: 25px;
    margin-left: 40px;
  }
  @media screen and (min-width: 401px) and (max-width: 500px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 400px) {
    margin: 0px;
    padding: 0px;
  }
`;
const LeftSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  gap: 20px;
  @media screen and (min-width: 650px) and (max-width: 800px) {
    width: 80%;
  }
`;
const ImageSlider = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  @media screen and (max-width: 980px) {
    padding-left: 15px;
  }
`;
const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 5px;
  cursor: pointer;
  border: ${(props) => (props.active ? "2px solid #007bff" : "none")};
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;
const ArrowButton = styled.button`
  background-color: black;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 15px;
  font-weight: 800;
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-top: 5px;
    padding: 6px;
  }
`;
const ProductImage = styled.img`
  flex: 3;
  max-width: 60%;
  object-fit: cover;
  border-radius: 8px;
  min-height: 400px;
  @media screen and (max-width: 662px) {
    min-height: 300px;
    object-fit: fill;
    max-width: 180px;
  }
`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 50px 0px 0px 50px;
  @media screen and (max-width: 800px) {
    width: 80%;
    padding-left: 5px;
  }
`;
const Path = styled.div`
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
  gap: 15px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;
const ProductTitle = styled.h2`
  font-size: 34px;
  font-weight: 600;
  line-height: 47.6px;
  letter-spacing: 2%;
  color: #3c4242;
  margin-bottom: 10px;
  width: 600px;
  @media screen and (max-width: 1040px) {
    font-size: 1.5rem;
    width: 500px;
  }
  @media screen and (min-width: 1040px) and (max-width: 1200px) {
    font-size: 1.4rem;
    max-width: 280px;
  }
  @media screen and (min-width: 801px) and (max-width: 980px) {
    font-size: 1.4rem;
    max-width: 280px;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    width: 400px;
  }
  @media screen and (min-width: 471px) and (max-width: 600px) {
    width: 300px;
  }
  @media screen and (max-width: 470px) {
    font-size: 1.4rem;
    max-width: 300px;
    padding-left: 15px;
  }
`;
const RatingSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 25px;
  @media screen and (max-width: 1040px) {
    font-size: 0.9rem;
    gap: 6px;
  }
  @media screen and (max-width: 470px) {
    font-size: 0.7rem;
    width: 340px;
    gap: 3px;
  }
  @media screen and (max-width: 470px) {
    padding-left: 15px;
    max-width: 280px;
  }
`;
const CommentsIcon = styled.img``;
const CommentText = styled.p`
  color: #807d7e;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 470px) {
    font-size: 10px;
  }
`;

const SizeSection = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;
const SizeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 25px;
  font-size: 1rem;
  margin-bottom: 20px;
`;
const Text1 = styled.span`
  color: #3f4646;
  font-size: 17px;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
const Text2 = styled.span`
  font-weight: 400;
  color: #807d7e;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
const SizeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SizeOption = styled.div`
  color: #3c4242;
  font-size: 14px;
  font-weight: 500;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  ${(props) =>
    props.selected &&
    `
    border: 2px solid #3C4242;
    background-color: #3C4242;
    color : #ffff;
  `};
  @media screen and (max-width: 1040px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }
`;

const ColorSection = styled.div`
  margin-bottom: 30px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;
const ColorTitle = styled.div`
  color: #3f4646;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
const ColorBox = styled.div`
  display: flex;
`;
const ColorOption = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? "2px solid black" : "1px solid transparent"};
  transition: all 0.3s;
  @media screen and (max-width: 1040px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 470px) {
    width: 20px;
    height: 20px;
  }
`;

const CartButton = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;
const AddToCartButton = styled.button`
  padding: 12px 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 17px;
  font-weight: 400;
  color: white;
  background-color: #8a33fd;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(183, 243, 196);
  }
  @media screen and (max-width: 470px) {
    padding: 15px 20px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 380px) {
    padding: 10px 15px;
  }
`;
const CartIcon = styled.img``;
const Price = styled.button`
  padding: 12px 40px;
  gap: 12px;
  font-size: 18px;
  font-weight: 600;
  color: #3c4242;
  background-color: #fff;
  border: 1px solid #3c4242;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #bebcbd;
    border: 1px solid #3c4242;
    color: #fff;
  }
  @media screen and (max-width: 470px) {
    padding: 15px 20px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 380px) {
    padding: 10px 15px;
  }
`;
const GreyLine = styled.div`
  margin: 40px 0px;
  width: 80%;
  height: 1px;
  background-color: #bebcbd;
  @media screen and (max-width: 800px) {
    width: auto;
  }
  @media screen and (max-width: 470px) {
    margin: 25px 8px;
  }
`;

const BottomInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`;
const InfoItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const InfoIcon = styled.img`
  background-color: #f6f6f6;
  padding: 15px;
  border-radius: 20px;
`;
const InfoText = styled.p`
  color: #3c4242;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProductDescription = styled.div`
  width: 80%;
  margin: 50px auto 0;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  @media screen and (max-width: 470px) {
    max-width: 340px;
  }
  @media screen and (max-width: 407px) {
    max-width: 200px;
  }
`;
const Span = styled.div`
  background-color: #8a33fd;
  width: 6px;
  height: 28px;
  border-radius: 10px;
`;
const Heading = styled.h1`
  color: #3c4242;
  font-size: 28px;
  font-weight: 600;
  @media screen and (max-width: 470px) {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
  @media screen and (max-width: 1158px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const TabsContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: first baseline;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 535px) {
    flex-wrap: wrap;
  }
`;
const Tab1 = styled.div`
  color: #3c4242;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Line = styled.div`
  width: 6.5rem;
  height: 1px;
  background-color: #000000;
`;
const Tab2 = styled.div`
  display: flex;
  align-items: center;
  color: #807d7e;
`;
const Tab3 = styled.div`
  display: flex;
  align-items: center;
  color: #807d7e;
`;
const Num1 = styled.span`
  color: white;
  border: 1px solid #8a33fd;
  background-color: #8a33fd;
  width: 9px;
  height: 12px;
  font-size: x-small;
  border-radius: 4px;
  padding: 3px 6px;
`;
const Num2 = styled.span`
  color: white;
  border: 1px solid #3c4242;
  background-color: #3c4242;
  padding: 3px 6px;
  font-size: x-small;
  border-radius: 4px;
  width: 9px;
  height: 12px;
`;
const Description = styled.p`
  margin: 20px auto;
  color: #807d7e;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 2%;
  width: 610px;
  @media (max-width: 700px){
    width: 400px;
  }
  @media (max-width: 500px){
    width: 300px;
  }
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2 3;
  @media screen and (max-width: 370px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3 2;
  }
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid #f5f0f0;
  background-color: #f6f6f6;
  gap: 10px;
  margin: 0;
`;
const Label = styled.span`
  color: #807d7e;
  font-weight: 400;
  font-size: 16px;
  @media screen and (max-width: 470px) {
    font-size: 0.8rem;
  }
`;
const Value = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #3c4242;
  @media screen and (max-width: 470px) {
    font-size: 0.8rem;
  }
`;

const CategoryContainer = styled.div`
  width: 80%;
  margin: 50px auto 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (max-width: 470px) {
    margin: 20px;
  }
`;
const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
`;
const Span1 = styled.div`
  background-color: #8a33fd;
  width: 6px;
  height: 28px;
  border-radius: 10px;
`;
const Heading1 = styled.h1`
  color: #3c4242;
  font-size: 28px;
  font-weight: 600;
  @media screen and (max-width: 700px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ProductCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const LikeButton = styled.div`
  position: relative;
  z-index: 5;
  svg {
    background: #f8f8f8;
    padding: 2% 2%;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 19px;
    height: 20px;
    cursor: pointer;
  }
`;

const SimilarProductImage = styled.img`
  width: auto;
  height: 393.26px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    max-height: 250px;
  }
  @media screen and (max-width: 480px) {
    max-height: 200px;
  }
`;
const CardDetails = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 8px;
    padding: 10px 0px;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProductName = styled.h5`
  color: #2a2f2f;
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  @media screen and (max-width: 900px) {
    max-width: 120px;
  }
  @media screen and (max-width: 780px) {
    font-size: 0.9rem;
    max-width: 100px;
  }
  @media screen and (max-width: 680px) {
    max-width: 90px;
  }
  @media screen and (max-width: 600px) {
    max-width: 140px;
    margin: 2px 0px;
  }
  @media screen and (max-width: 490px) {
    max-width: 100px;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.7rem;
    max-width: 60px;
  }
`;

const BrandName = styled.p`
  color: #7f7f7f;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  @media screen and (min-width: 541px) and (max-width: 780px) {
    font-size: 0.7rem;
    max-width: 100px;
  }
  @media screen and (max-width: 540px) {
    font-size: 0.7rem;
    margin: 0px;
  }
`;

const PriceBox = styled.div``;
const ProductPrice = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #3c4242;
  border: none;
  cursor: pointer;
  width: 82.31px;
  height: 36.58px;
  border-radius: 8px;
  @media screen and (max-width: 780px) {
    font-size: 0.8rem;
    max-width: 100px;
  }
  @media screen and (max-width: 680px) {
    font-size: 0.7rem;
    max-width: 90px;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
    max-width: 100px;
  }
`;
