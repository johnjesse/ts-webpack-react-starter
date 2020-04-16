import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { PostSummary } from '../components/PostSummary';

const { Image, Content, TimeStamp, Title, Summary } = PostSummary;
const Post = () => (
  <PostSummary>
    <Image
      src={`https://placekitten.com/${Math.floor(Math.random() * 300 + 200)}/${Math.floor(Math.random() * 300 + 200)}`}
      alt=""
    />
    <Content>
      <Title>My first blog post</Title>
      <Summary>
        Here is a little summary about the blog post, with some more words to make it a little more realistic
      </Summary>
      <TimeStamp day={15} month={4} year={2020} />
    </Content>
  </PostSummary>
);

const Home = (_props: RouteComponentProps) => (
  <main>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </main>
);

export { Home };
