import React from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import withContext from '../hoc/withContext';

const dummyArticle = {
  id: 1,
  title: 'Wake me up when Vue ends',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  twitterName: 'hello_roman',
  articleUrl: 'https://youtube.com/helloroman',
  created: '1 day',
};

// eslint-disable-next-line no-unused-vars,react/prop-types
const DetailsPage = ({ pageContext, activeItem }) => {
  const [item] = activeItem;
  console.log(item);
  return (
    <DetailsTemplate
      pageType={pageContext}
      title={dummyArticle.title}
      created={dummyArticle.created}
      content={dummyArticle.content}
      articleUrl={dummyArticle.articleUrl}
    />
  );
};

DetailsPage.propTypes = {
  pageContext: PropTypes.string.isRequired,
};
const mapStateToProps = (state, ownProps) => ({
  activeItem: state[ownProps.pageContext].filter((item) => item.id === ownProps.match.params.id),
});
export default withContext(connect(mapStateToProps)(DetailsPage));
