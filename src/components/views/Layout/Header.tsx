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

import React, { useState } from 'react';
import {    Spinner, Box, Icon, BoxProps, InputRightElement,  Text } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

interface Props extends BoxProps {
	value: string;
	isLoading: boolean;
	onSearchChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
	resultRenderer: ( result: any ) => JSX.Element;
	onResultSelect: ( result: any ) => void;
	resultListMaxHeight?: string;
	searchResults?: any[];
	placeholder?: string;
	input?: { iconPosition: 'left' | 'right'; };
	noResultFoundText?: string;
}


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

export default function Header( props: Props) {
    const {
      value,
      isLoading,
      input,
      onSearchChange,
      resultRenderer,
      onResultSelect,
      resultListMaxHeight = '60vh',
      placeholder = '',
      searchResults = [],
      noResultFoundText = 'No results found.',
      ...rest
    } = props;

    const { iconPosition = 'left' } = input || {};

    const [ showResults, setShowResults ] = useState( false );

    const onBlur = () => {
      setTimeout( () => {
        setShowResults( false );
      }, 170 );
    };
  return (
    <>
    <Flex h={16} alignItems={'center'} justifyContent={'end'} position={'fixed'}>
      <Stack spacing={4} direction="row" align="end" m="1rem">
        <SearchBar />
      </Stack>
    <Box
			position="relative"
			w="30%"
			{ ...rest }
		>
			<InputGroup mb="10px">
				{
					iconPosition === 'left' &&
					<InputLeftElement
						pointerEvents="none"
						children={
							isLoading
								? <Spinner size="sm" />
								: <Icon as={ FaSearch } />
						}
					/>
				}

				<Input
					borderColor="rgba(34,36,38,.15)"
					borderRadius="full"
					placeholder={ placeholder }
					value={ value }
					onChange={ onSearchChange }
					onFocus={ () => setShowResults( true ) }
					onBlur={ onBlur }
				/>

				{
					iconPosition === 'right' &&
					<InputRightElement
						pointerEvents="none"
						children={
							isLoading
								? <Spinner size="sm" />
								: <Icon as={ FaSearch } />
						}
					/>
				}
			</InputGroup>
			{
				showResults && (
					<Box
						bgColor="white"
						maxHeight={ resultListMaxHeight }
						overflowY="auto"
						borderRadius="0.3em"
						boxShadow="0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%);"
						sx={ {
							"&::-webkit-scrollbar": {
								display: 'none'
							}
						} }
					>
						{
							// searchResults.length > 0
							// 	? searchResults.map( result => (
							// 		<Box
							// 			key={ result.id || result._id || result.key }
							// 			borderBottom="1px solid rgba(34,36,38,.1)"
							// 			cursor="pointer"
							// 			_hover={ {
							// 				bgColor: '#f9fafb'
							// 			} }
							// 			onClick={ () => onResultSelect( result ) }
							// 		>
							// 			<Flex alignItems="center">
							// 				<Box p="0.8em" margin="0" color="black">
							// 					{ resultRenderer( result ) }
							// 				</Box>
							// 			</Flex>
							// 		</Box>
							// 	) )
							// 	: value.length > 0 && !isLoading && (
							// 		<Box
							// 			borderBottom="1px solid rgba(34,36,38,.1)"
							// 		>
							// 			<Flex alignItems="center" >
							// 				<Box p="0.8em" margin="0" color="black">
							// 					<Text>{ noResultFoundText }</Text>
							// 				</Box>
							// 			</Flex>
							// 		</Box>
							// 	)
						}
					</Box >
				)
			}
		</Box>
    </Flex>
    </>

  )
}