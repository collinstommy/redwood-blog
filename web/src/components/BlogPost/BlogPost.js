import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

const StyledArticle = styled.article`
  font-family: sans-serif;
`

const BlogPost = ({ post }) => {
  return (
    <StyledArticle key={post.id}>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <p>{post.body}</p>
      <div>
        Posted at: <time>{post.createdAt}</time>
      </div>
    </StyledArticle>
  )
}

export default BlogPost
