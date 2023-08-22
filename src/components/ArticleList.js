import React from 'react';
import Article from './Article'

function ArticleList({posts}){
const newArr = posts.map(article => {
    return <Article article={article} key={article.id} title={article.title} 
    date={article.date} preview={article.preview} />
})
    return (
    <main>
{newArr}
    </main>
)
}

export default ArticleList

