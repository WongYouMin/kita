function ProductsList({loading, error, products, selectProduct, loadMoreProducts, hasMoreProducts}) {
    return(
         <>
            {
                loading
                    ? <p>Loading products...</p>
                    : error.trim()
                        ? <p>{error}</p>
                        : products.length > 0
                        ? products.map(({id, title}) => {
                            return (
                                <button key={id} value={id} onClick={selectProduct}>[{title}]</button>
                            )
                        })
                        : <p>No products found.</p>
            }
            <br />
            <button name="loadMore" disabled={!hasMoreProducts} onClick={loadMoreProducts}>Load More</button>
        </>
    )
}

export default ProductsList