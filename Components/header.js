"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Popup from "../Components/Popup";

export default function Header() {
  const Router = useRouter();
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleLoginForm = () => {
    setIsLoginFormVisible((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    Router.push("/");
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <HeaderContainer>
      <LogoDiv>
        <Link href="/">
          <LogoImage src="/images/Logo.png" alt="logo" />
        </Link>
      </LogoDiv>

      <MiddleDiv>
        <Navigation>
          <NavItem href="/">Shop</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/combos">Combos</NavItem>
          <NavItem href="/joggers">Joggers</NavItem>
        </Navigation>
      </MiddleDiv>

      <SearchDiv>
        <SearchIcon src="/images/search.png" alt="search" />
        <SearchInput
          type="text"
          placeholder="Search..."
        />
      </SearchDiv>

      <SearchBoxWrapper>
        <SearchIcon
          src="/images/search.png"
          alt="search"
          onClick={toggleSearch}
        />
        {isSearchVisible && (
          <SearchInput
            type="text"
            placeholder="Search..."
          />
        )}
      </SearchBoxWrapper>

      <IconDiv>
        <Icon1 src="/images/wishlist.png" alt="search" />
        <Icon2
          src={
            isLoggedIn ? "/images/box-arrow-in-left.svg" : "/images/account.png"
          }
          alt="account"
          onClick={isLoggedIn ? handleLogout : toggleLoginForm}
        />
        <Icon1 src="/images/cart.png" alt="search" />
      </IconDiv>

      <HamburgerContainer onClick={toggleMenu} $isOpen={isOpen}>
        <div />
        <div />
        <div />
      </HamburgerContainer>

      <MobileMenu $isOpen={isOpen}>
        <NavItem href="/" onClick={toggleMenu}>
          Shop
        </NavItem>
        <NavItem href="/men" onClick={toggleMenu}>
          Men
        </NavItem>
        <NavItem href="/women" onClick={toggleMenu}>
          Women
        </NavItem>
        <NavItem href="/combos" onClick={toggleMenu}>
          Combos
        </NavItem>
        <NavItem href="/joggers" onClick={toggleMenu}>
          Joggers
        </NavItem>
      </MobileMenu>

      {isLoginFormVisible && (
        <Popup onClose={toggleLoginForm} setLoggedIn={setIsLoggedIn} />
      )}
    </HeaderContainer>
  );
}
const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  padding: 12px 20px;
  gap: 12px;
  border-radius: 8px;
  @media (min-width: 702px) {
    display: none;
  }
  @media (min-width: 360px) and (max-width: 529px) {
    padding: 10px;
    gap: 5px;
  }
`;

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  padding: 10px 30px;
  cursor: pointer;
  border-bottom: 1px solid #bebcbd;
  @media (min-width: 360px) and(max-width:600px) {
    justify-content: space-between;
  }
`;
const LogoDiv = styled.div``;
const LogoImage = styled.img``;

const MiddleDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 360px) and (max-width: 1039px) {
    display: none;
  }
`;
const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (min-width: 1040px) and (max-width: 1140px) {
    gap: 20px;
  }
`;
const NavItem = styled(Link)`
  color: #807d7e;
  list-style: none;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: #3c4242;
  }
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  padding: 12px 20px;
  gap: 12px;
  border-radius: 8px;
  @media (max-width: 701px) {
    display: none;
  }
`;
const SearchIcon = styled.img``;
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: black;
  @media (min-width: 360px) and (max-width: 529px) {
    font-size: 10px;
  }
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const Icon1 = styled.img`
  background-color: #f6f6f6;
  padding: 12px;
  border-radius: 8px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Icon2 = styled.img`
  background-color: #f6f6f6;
  padding: 12px;
  border-radius: 8px;
`;
const HamburgerContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 0px;
  height: 30px;
  cursor: pointer;
  z-index: 999;
  div {
    width: 20px;
    height: 4px;
    background-color: #807d7e;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translateY(8px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translateY(-8px)" : "rotate(0)"};
    }
  }
  @media (max-width: 1039px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  width: 170px;
  background-color: white;
  color: black;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  padding: 15px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 998;
  a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 10px;
    &:hover {
      background-color: rgb(151, 149, 149);
    }
  }
  @media (min-width: 1039px) {
    display: none;
  }
`;
