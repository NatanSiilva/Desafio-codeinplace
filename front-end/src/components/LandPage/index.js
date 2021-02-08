
import { ApolloProvider } from '@apollo/client'
import client from '../../services/apollo'


import ContainerApp from '../ContainerApp'
import CardRest from '../CardRest'
import YingYag from '../yin-yang'
import CardGraphql from '../CardGraphql'



function LandPage() {
  return (
    <ApolloProvider client={client}>
      <ContainerApp>
        <CardRest />
        <YingYag />
        <CardGraphql />
      </ContainerApp>
    </ApolloProvider>
  );
}

export default LandPage;
