import Layout from '../components/Layout.js';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
    <li>
        <Link as={`${slug}`} href={`/posts?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li> 
)

const Blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="using-react" title="Using React" />
            <PostLink slug="using-angular" title="Angular" />
            <PostLink slug="using-vue" title="Vue" />
            <PostLink slug="data-science-for-fun" title="Data Science for Fun" />
        </ul>
    </Layout>
);

export default Blog;