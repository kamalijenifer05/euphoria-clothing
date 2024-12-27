"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Feedback() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <FeedbackContainer>
      <FeedbackTop>
        <Span></Span>
        <Heading>Feedback</Heading>
      </FeedbackTop>

      <FeedbackBottom>
        {products.map((product) => (
          <Card key={product.id}>
            <CardTop>
              <Image src="/images/span-1.png" alt="image" />
              <Rating>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} active={i < Math.round(product.rating.rate)}>
                    ★
                  </Star>
                ))}
              </Rating>
            </CardTop>

            <CardBottom>
              <Categories>{product.title}</Categories>
              <Description>{product.description}</Description>
            </CardBottom>
          </Card>
        ))}
      </FeedbackBottom>
    </FeedbackContainer>
  );
}

const FeedbackContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const FeedbackTop = styled.div`
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
const Heading = styled.h2`
  color: #3c4242;
  font-size: 34px;
  font-weight: 600;
`;

const FeedbackBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const Card = styled.div`
  width: 250px;
  padding: 23.19px;
  border-radius: 10px;
  border: 1px solid #bebcbd;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img``;
const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Star = styled.span`
  font-size: 16px;
  color: ${(props) => (props.active ? "gold" : "#ccc")};
`;

const CardBottom = styled.div``;
const Categories = styled.h4`
  color: #3c4242;
  width: 150px;
`;
const Description = styled.p`
  color: #807d7e;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  width: 250px;
`;
