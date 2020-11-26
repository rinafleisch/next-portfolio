import Layout from '../components/Layout';

const Error = ({ statusCode }) => (
    <Layout title="Oops! 404">
        {statusCode ? `Could not load your user data: Status Code ${statusCode} \n\r Please try again.`  :
            `Sorry, couldn't get that page.`}
    </Layout>
);

export default Error;