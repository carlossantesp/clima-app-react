import tw, { styled } from "twin.macro";

export const FormularioContainer = styled.form`
  ${tw`
    flex flex-col gap-4 items-center my-4
  `}
`;

export const GroupInput = styled.div`
  ${tw`
    grid grid-cols-1 gap-2 w-full relative
  `}
`;

export const LabelForm = styled.label`
  ${tw`
    block text-gray-800 font-semibold text-xs tracking-wide
  `}
`;

export const InputForm = styled.input`
  ${tw`
    inline-block appearance-none p-4 border border-gray-400 border-solid
    focus:ring-1 focus:ring-blue-300
  `}
`;

export const SelectForm = styled.select`
  ${tw`
    inline-block bg-white appearance-none p-4 border border-gray-400 border-solid
    focus:ring-1 focus:ring-blue-300
  `}
`;
export const SelectIcon = styled.div`
  ${tw`
    pointer-events-none absolute bottom-2 right-2
  `}
  svg {
    ${tw`
      fill-current h-6 w-6
    `}
  }
`;

export const Button = styled.button`
  ${tw`
    appearance-none inline-block font-semibold p-4 border-none bg-gray-800 text-gray-200 uppercase shadow-md duration-150
    hover:bg-gray-700 hover:cursor-pointer hover:shadow-lg
  `}
`;
