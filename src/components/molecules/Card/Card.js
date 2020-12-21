import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

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
  border:5px solid ${({ theme }) => theme.twitters}; 
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

class Card extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { redirect } = this.state;

    const {
      // eslint-disable-next-line no-shadow,react/prop-types
      id, cardType, title, created, twitterName, articleUrl, content, removeItem,
    } = this.props;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper cardType={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters'
          && <SyledAvatar src={`https://avatar.oxro.io/avatar.svg?name=${twitterName}`} />}
          {cardType === 'articles' && <StyledLinkButton src={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>

          <Paragraph>
            {content}
          </Paragraph>
          <Button onClick={() => removeItem(cardType, id)} secondary>REMOVE</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,

};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});
export default connect(null, mapDispatchToProps)(Card);
