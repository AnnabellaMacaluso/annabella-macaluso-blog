import React from 'react';
import {Link, graphql} from 'gatsby';

import SEO from '../components/seo';
import PageLayout from '../components/PageLayout';

import styled from 'styled-components';

import {SmallCaps, FakeSmallCaps} from '../utils/smallcaps';

import formatDate from '../utils/formatDate';

const SupTitle = styled(SmallCaps)``;

const Article = styled.div`
  margin: 2em 0em;
  :first-of-type {
    margin-top: 0em;
  }
  :last-of-type {
    margin-bottom: 0em;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  margin: 0.2em 0em;
  line-height: 1.2;
`;

const Excerpt = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSize.small};
`;

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <PageLayout>
        <SEO
          title="Home"
          keywords={[`gilles`, `castel`]}
        />
        {posts.map(({node}) => {
          const title = node.frontmatter.title || node.fields.slug;
          const date = new Date(node.frontmatter.date);
          const {day, year, month} = formatDate(date);
          return (
            <Article key={node.fields.slug}>
              <Link to={`/post${node.fields.slug}`}>
                <SupTitle>
                  {month} <FakeSmallCaps>{day}</FakeSmallCaps>,{' '}
                  <FakeSmallCaps>{year}</FakeSmallCaps> &bull;{' '}
                  <FakeSmallCaps>{node.timeToRead}</FakeSmallCaps> min. read
                </SupTitle>
                <Title>
                  {title}
                </Title>
                <Excerpt dangerouslySetInnerHTML={{__html: node.snippet}} />
              </Link>
            </Article>
          );
        })}
      </PageLayout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {publish: {eq: "yes"}}}
    ) {
      edges {
        node {
          snippet
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;
