import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

class Twitters extends PureComponent {
  render() {
    const { twitters } = this.props;
    return (
      <GridTemplate pageType="twitters">
        {twitters.map((item) => (
          <Card
            id={item.id}
            cardType="twitters"
            title={item.title}
            content={item.content}
            created={item.created}
            twitterName={item.twitterName}
            key={item.id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  })),
};
Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });
export default connect(mapStateToProps)(Twitters);
