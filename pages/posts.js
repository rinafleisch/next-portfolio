import Layout from '../components/Layout.js';
import { withRouter } from 'next/router';

const Posts = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: "80vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatum laudantium eius iste ab aspernatur architecto quis, consequuntur doloremque dolorum totam explicabo nam maiores tenetur cumque voluptatem ut delectus! Dolore?
        </p>
    </Layout>
);

export default withRouter(Posts);