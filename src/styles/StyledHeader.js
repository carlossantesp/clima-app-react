import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`
    bg-blue-800
    w-full
    py-4
  `}
`;
export const HeaderBrand = styled.div`
  ${tw`
    flex justify-center items-center gap-2
  `}
`;
export const HeaderLink = styled.a`
  ${tw`
    text-xl
    font-bold
    font-sans
    text-white
    no-underline
    uppercase
  `}
`;

export const HeaderLogo = styled.div`
  ${tw`
    w-8
    h-8
  `}
  img {
    ${tw`
      w-full
      block
    `}
  }
`;
