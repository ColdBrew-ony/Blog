import Footer from './Footer'
import Header from './Header'
import Leftside from './Leftside'
import Body from './Body'
import { Grid, GridItem } from '@chakra-ui/react'

const Layout = ({children}) => (

        <div>
            <Grid
                templateAreas={`"header header"
                                "nav main"
                                "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h='200px%'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem area={'header'}>
                    <Header />
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    <Leftside/>
                </GridItem>
                <GridItem pl='2' bg='green.300' area={'main'}>
                    <Body> {children} </Body>
                </GridItem>
                <GridItem area={'footer'}>
                    <Footer />
                </GridItem>
            </Grid>
        </div>
        
        
    );

export default Layout