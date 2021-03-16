import tw, { styled } from "twin.macro";

export const SectionWrapper = styled.section(({ isSecondary }) => [
  tw`
    grid grid-cols-2 grid-rows-2 gap-2
    lg:grid-cols-3 lg:gap-x-2 lg:gap-y-0
  `,
  isSecondary && tw`grid-cols-3 grid-rows-1 lg:gap-2`,
]);

export const ArticleCard = styled.article(({ isPrimary }) => [
  tw`
    bg-gray-100 text-gray-900 my-2 shadow-md flex flex-col justify-center items-center
    py-4
  `,
  isPrimary &&
    tw`
    col-span-2 my-0 bg-gray-300
    lg:row-span-2
  `,
]);

export const TitleCard = styled.h2`
  ${tw`text-3xl m-0 font-semibold`}
  span {
    ${tw`text-gray-500 text-2xl`}
  }
`;
export const NumberCard = styled.p`
  ${tw`text-6xl m-0 font-black text-blue-800`}
  span {
    ${tw`text-5xl`}
  }
`;
export const DesCard = styled.p`
  ${tw`m-0 text-gray-500 pt-2 font-semibold capitalize`}
`;
export const InfoCard = styled.p`
  ${tw`m-0 pt-2 text-gray-600 text-lg font-bold`}
`;

export const ImageIcono = styled.img`
  ${tw`
    w-6
    h-6
    block
    mx-auto
  `}
`;
