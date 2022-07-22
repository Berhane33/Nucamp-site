import SubHeader from '../components/SubHeader';
import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
//import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
  
    return (
        <Container>
            <SubHeader current='Directory'/>
            <CampsitesList />
        </Container>
    )
};

export default CampsitesDirectoryPage;