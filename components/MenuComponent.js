import React from 'react';

function Rendercategoryproduct(props) {
    const specificcategorylist = props.products.map(product => {
        return (
            <div key={product.id} className="d-flex justify-content-between">
                <h5>{product.name}</h5>
                <h5>${product.price.toFixed(2)}</h5>
            </div>
        );
    });

    const categoryname = props.products[0].category[0].toUpperCase() + props.products[0].category.slice(1);

    return (
        <React.Fragment>
            <h4 className="text-center section-title p-3">{categoryname}</h4>
            <div className="p-sm-5">{specificcategorylist}</div>
        </React.Fragment>
    );
}

function Menu(props) {
    return (
        <div className="container">
            <h2 className="text-center m-4">Our Menu</h2>
            <Rendercategoryproduct products={props.products.filter(product => product.category === 'pastries')} />
            <Rendercategoryproduct products={props.products.filter(product => product.category === 'waffles')} />
            <Rendercategoryproduct products={props.products.filter(product => product.category === 'breakfast')} />
            <Rendercategoryproduct products={props.products.filter(product => product.category === 'lunch')} />
            <Rendercategoryproduct products={props.products.filter(product => product.category === 'drinks')} />
        </div>
    );
}
export default Menu;
