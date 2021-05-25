import React from 'react'
import { Link } from 'gatsby'

//import SEO from '~/components/seo'
import ProductGrid from '../components/ProductGrid/ProductGrid.js'

const IndexPage = () => (
  <>

    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
