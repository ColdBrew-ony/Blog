import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Stack,
  Flex
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// import {  BoxProps} from '@chakra-ui/react';

import { css } from "@emotion/react";

// interface Props extends BoxProps {
// 	value: string;
// 	isLoading: boolean;
// 	onSearchChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
// 	resultRenderer: ( result: any ) => JSX.Element;
// 	onResultSelect: ( result: any ) => void;
// 	resultListMaxHeight?: string;
// 	searchResults?: any[];
// 	placeholder?: string;
// 	input?: { iconPosition: 'left' | 'right'; };
// 	noResultFoundText?: string;
// }


export const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
      
    </>
  );
};

export default function Header() {

    // const headerStyle = () => css`
    // height: 44px;
    // position: sticky;
    // top: 0;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // `;

  return (
		<Flex h={16}>
			<Stack spacing={4} direction="row" align="end" m="1rem">
				<SearchBar />
			</Stack>
		</Flex>
	
  )
}

