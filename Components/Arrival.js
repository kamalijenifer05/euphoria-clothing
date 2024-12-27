"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Arrival() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <div style={{ fontSize: "30px", color: "black" }}></div>,
    nextArrow: <div style={{ fontSize: "30px", color: "black" }}></div>,

    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <NewArrivalsSection>
      <Top>
        <Span></Span>
        <Heading>New Arrival</Heading>
      </Top>
      <SlickSlider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage
              src={product.image}
              onClick={() => handleProductClick(product.id)}
              alt={product.category}
            />
            <ProductCategory>{product.title}</ProductCategory>
          </ProductCard>
        ))}
      </SlickSlider>
    </NewArrivalsSection>
  );
}

const NewArrivalsSection = styled.div`
  width: 80%;
  margin: 50px auto;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Span = styled.div`
  background-color: #8a33fd;
  width: 8px;
  height: 30px;
  border-radius: 10px;
`;

const Heading = styled.h1`
  color: #3c4242;
  font-size: 34px;
  font-weight: 700;
  @media (min-width: 360px) and (max-width: 689px) {
    font-size: 20px;
  }
`;

const ProductCard = styled.div``;
const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 260px;
  @media screen and (max-width: 460px) {
    max-height: 200px;
  }
`;
const ProductCategory = styled.h5`
  color: #2a2f2f;
  font-size: 17px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;

const SlickSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-prev,
  .slick-next {
    font-size: 30px;
    color: black;
    background: black;
    border-radius: 50%;
    padding: 10px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }

  .slick-next {
    left: 100%;
  }
`;
