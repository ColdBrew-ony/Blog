import Footer from './Footer'
import Header from './Header'
import Leftside from './Leftside'
import Body from './Body'
import { Grid, GridItem } from '@chakra-ui/react'

const MainLayout = ({children}) => (

        <div>
            <Grid
                templateAreas={`"nav header"
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
                <GridItem area={'nav'}>
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

export default MainLayout