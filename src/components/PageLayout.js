import React, { Component } from 'react';

import Layout from '../components/Layout';
import Aside from '../components/Aside';

import styled from 'styled-components';

const Main = styled.main`
  max-width: ${props => props.theme.maxWidth}px;
  flex-grow: 1;
  padding: 1em;
`;

const LargeMain = styled.main`
  flex-grow: 1;
  padding: 1em;
`;

class PageLayout extends Component {
  render() {
    const Component = this.props.large ? LargeMain : Main;
    return (
      <Layout>
        <div
          css={`
          display: flex;

          justify-content: center;
          margin: 3em 1em;
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
        >
        <Aside />
        <Component>
        {this.props.children}
        </Component>
      </div>
    </Layout>
    );
  }
}
export default PageLayout;
