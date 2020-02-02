import React from 'react';
import articles from './article-content';

const ArticlePage = ({ match }) => {
    const { name } = match.params;
    const matchingArticle = articles.find(article => article.name === name);
    return matchingArticle ? 
    (
        <>
        <h1>{matchingArticle.title}</h1>
        {matchingArticle.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
        </>
    ) : (
        <h1>Uh oh, looks like that article doesn't exist</h1>
    );
};

export default ArticlePage;
