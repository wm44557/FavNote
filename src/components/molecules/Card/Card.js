import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px 10px;
  background-color: ${({ theme, cardType }) => (cardType ? theme[cardType] : 'white')};
  :first-of-type{
  z-index: 999;
  }
  
  ${({ flex }) => flex && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between`};
`;

const DateInfo = styled(Paragraph)`
margin: 0 0 5px;
font-weight: bold;
font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const SyledAvatar = styled.img`
  position: absolute;
  right:25px;
  top: 25px;
  height: 86px;
  width: 86px;
  border:5px solid ${({ theme }) => theme.twitter}; 
  border-radius: 50%;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right:25px;
  top: 25px;
  transform: translateY(-15%);
`;

// eslint-disable-next-line react/prop-types
const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper cardType={cardType}>
      <StyledHeading>Hello Roman</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <SyledAvatar src="https://unavatar.now.sh/twitter/hello_roman" />}
      {cardType === 'article' && <StyledLinkButton />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos
        dolore labore odio quasi sapiente. Ad cum debitis eaque error ipsa, modi molestias, nihil,
        pariatur quae quidem rem sapiente tempora?
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
