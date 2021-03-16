import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`
    min-h-screen
  `}
  & {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;
export const Wrapper = styled.div`
  ${tw`
    flex flex-col md:flex-row md:items-stretch gap-4
  `}
`;
export const MainSection = styled.main`
  ${tw`
    p-4 text-center w-full
    lg:max-w-6xl
    mx-auto mt-8
  `}
`;
export const AsideSection = styled.aside`
  ${tw`
    p-4 bg-gray-100 w-full md:w-96
  `}
`;
