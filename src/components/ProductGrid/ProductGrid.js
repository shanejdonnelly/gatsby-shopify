import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as styles from './ProductGrid.module.css'
//import StoreContext from '~/context/StoreContext'
//import { Grid, Product, Title, PriceTag } from './styles'

const ProductGrid = () => {
 /* const {
    store: { checkout },
  } = useContext(StoreContext)

  const { products } = useStaticQuery(
    graphql`
      {
        allShopifyProduct {
          edges {
            node {
              id
              description
              title
              images {
                id
                originalSrc
              }
            }
          }
        }
      }
    `
  )
  */

const data = useStaticQuery(graphql`
  query MyQuery {
  allShopifyProduct(limit: 10) {
    edges {
      node {
        productType
        handle
        id
        description
        title
        images {
          originalSrc
        }
      }
    }
  }
}
  `)
  const products = data.allShopifyProduct.edges
  /*
  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))
    */
console.log(products)
  return (
    <div className={styles.grid}>
        {products.map((product) => (

            <div key={product.node.id} className={styles.product}>
              <Link to={`/product/${product.node.id}/`}>

                  <img
                    src={product.node.images[0].originalSrc}
                    alt={product.node.description}
                  />

              </Link>
              <h1 className={styles.title}>{product.node.title}</h1>

              <div className={styles.priceTag}>$12.89</div>
            </div>
      ))}
    </div>
  )
}

export default ProductGrid
