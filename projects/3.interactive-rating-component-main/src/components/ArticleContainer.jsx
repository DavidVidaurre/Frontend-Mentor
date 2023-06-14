import '../styles/ArticleContainer.css'

export function ArticleContainer ({ children }) {
  return (
    <article className='article-container'>
      {children}
    </article>
  )
}
