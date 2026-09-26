function ProductCard({productLoading, selectedProduct, productError}){
    return(
        <>
            {
                productLoading 
                    ? <p>Loading product...</p>
                    : productError.trim()
                        ? <p>⚠️{productError}</p>
                        : Object.entries(selectedProduct).length > 0
                            ? Object.entries(selectedProduct).map(([props, value]) => {
                                return (
                                    <p key={props}>{props}: {JSON.stringify(value)}</p>
                                )
                            }) 
                            : <p>No product is selected.</p>

            }
        </>
    )
}

export default ProductCard