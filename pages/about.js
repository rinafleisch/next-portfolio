import Layout from '../components/Layout.js';
// import fetch from 'isomorphic-unfetch';
import Error from './_error';
import { Component } from 'react';

export default class About extends Component {

    // puts the data on the props object rather than the state (stateless)
    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/rinafleisch")
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, statusCode };
    }

    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="About">
                <p>{user.name}</p>
                <p>{user.bio}</p>
                <img src={user.avatar_url} alt="avatar" height="200px" />
            </Layout>
        );
    }
}
    // state = {
    //     user: null
    // };
    // this would be the traditional way of getting this data
    // how do we do it with server side rendering?
    // componentDidMount() {
    //     fetch('https://api.github.com/users/rinafleisch')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 user: data
    //             });
    //         })
    // }
            // fetch("https://api.github.com/users/rinafleisch")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     });
