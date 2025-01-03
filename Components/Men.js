"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Men() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const filteredProducts = response.data.filter(
          (product) => product.category === "men's clothing"
        );
        setProducts(filteredProducts.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = (Id) => {
    if (localStorage.getItem("token")) {
      router.push(`/product/${Id}`);
    } else {
      return alert("Please Login");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MenContainer>
      <ContainerTop>
        <Span></Span>
        <CategoriesHeading>Categories For Men</CategoriesHeading>
      </ContainerTop>

      <ContainerBottom>
        {products.map((product) => (
          <CategoriesTop key={product.id}>
            <ProductsImage>
              <CategoryImage src={product.image} alt={product.title} />
            </ProductsImage>

            <CategoriesBottom>
              <ProductName>
                <Title>{product.title}</Title>
                <Paragraph>Explore Now!</Paragraph>
              </ProductName>
              <ArrowDiv>
                <Box onClick={() => handleClick(product.id)}>
                  <ArrowIcon src="/images/arrow-right.svg" alt="Next" />
                </Box>
              </ArrowDiv>
            </CategoriesBottom>
          </CategoriesTop>
        ))}
      </ContainerBottom>
    </MenContainer>
  );
}

const MenContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;
const ContainerTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
`;
const Span = styled.span`
  width: 8px;
  height: 30px;
  border-radius: 10px;
  background-color: #8a33fd;
`;
const CategoriesHeading = styled.h2`
  color: #3c4242;
  font-size: 34px;
  font-weight: 600;
  @media (min-width: 360px) and (max-width: 689px) {
    font-size: 20px;
  }
`;

const ContainerBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 0px;
  gap: 60px 20px;
`;
const CategoriesTop = styled.div`
  width: 350px;
  border-radius: 10px;
`;

const ProductsImage = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryImage = styled.img`
  width: 250px;
  height: 393.26px;
  gap: 0px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
`;

const CategoriesBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270.36px;
  height: 41.9px;
  margin-top: 40px;
`;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.h5`
  color: #2a2f2f;
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;
const Paragraph = styled.p`
  color: #7f7f7f;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;

const ArrowDiv = styled.div`
  cursor: pointer;
`;
const Box = styled.div``;
const ArrowIcon = styled.img``;
