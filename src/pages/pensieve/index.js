import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IconZap } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fontSizes, fonts } = theme;
import sr from '@utils/sr';
import { srConfig /*github*/ } from '@config';

const StyledMainContainer = styled(Section)`
  & > header {
    text-align: center;
    margin-bottom: 100px;

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    ${mixins.flexBetween};
    margin-top: 20px;
    width: 100%;
  }
`;
const StyledGrid = styled.div`
  margin-top: 50px;

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledPostInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
  header,
  a {
    width: 100%;
  }
`;
const StyledPost = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledPostInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledPostHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledPostName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
`;
const StyledPostDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
`;
// const StyledDate = styled.span`
//   text-transform: uppercase;
//   font-family: ${fonts.SFMono};
//   font-size: ${fontSizes.xs};
//   color: ${colors.lightSlate};
// `;
const StyledTags = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.green};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      ${mixins.inlineLink};
    }
  }
`;

const Link = styled.a``;

const PensievePage = ({ posts }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledMainContainer id="posts" ref={revealContainer}>
      <header>
        <h1 className="big-title">Posts</h1>
      </header>

      <StyledGrid>
        <div className="posts">
          {posts &&
            posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, /*date,*/ link, tags } = frontmatter;
              // const d = new Date(date);

              return (
                <StyledPost key={i} tabIndex="0">
                  <StyledPostInner>
                    <header>
                      <Link href={link}>
                        <StyledPostHeader>
                          <StyledFolder>
                            <IconZap />
                          </StyledFolder>
                        </StyledPostHeader>
                        <StyledPostName>{title}</StyledPostName>
                        <StyledPostDescription>{description}</StyledPostDescription>
                      </Link>
                    </header>
                    <footer>
                      {/* <StyledDate>{`${d.toLocaleDateString()}`}</StyledDate> */}
                      <StyledTags>
                        {tags.map((tag, i) => (
                          <li key={i}>
                            <Link to={`#`}>#{tag}</Link>
                          </li>
                        ))}
                      </StyledTags>
                    </footer>
                  </StyledPostInner>
                </StyledPost>
              );
            })}
        </div>
      </StyledGrid>
    </StyledMainContainer>
  );
};

PensievePage.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default PensievePage;
