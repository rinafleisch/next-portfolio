import Layout from '../components/Layout';

const Error = ({ statusCode }) => (
    <Layout title="Error!!!">
        {statusCode ? `Could not load your user data: Status Code ${statusCode}` :
            `Sorry, couldn't get that page.`}
    </Layout>
);

export default Error;