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
  return (
    <>
    <Flex h={16} alignItems={'center'} justifyContent={'end'}>
      <Stack spacing={4} direction="row" align="end" m="1rem">
        <SearchBar />
      </Stack>
    </Flex>

    </>
  )
}