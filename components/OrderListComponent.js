import { useState, useEffect } from 'react';

const OrderList = props => {
    const [state, setState] = useState([
        { name: 'Muffin', quantity: 1 },
        { name: 'Scone', quantity: 1 },
        { name: 'Cookie', quantity: 1 },
        { name: 'Brownie', quantity: 1 },
        { name: 'GF Cookie', quantity: 1 },
        { name: 'Protein Puck', quantity: 1 },
        { name: 'Vegan + Gluten Free Waffle', quantity: 1 },
        { name: 'Waffle', quantity: 1 },
        { name: 'Bacon Cheddar Waffle', quantity: 1 },
        { name: 'Pesto + Feta Waffle', quantity: 1 },
        { name: 'Bacon + Cheddar Sandwich', quantity: 1 },
        { name: 'Turkey Sausage + Pepper Jack', quantity: 1 },
        { name: 'Veggie + Pepper Jack', quantity: 1 },
        { name: 'Egg & Cheddar', quantity: 1 },
        { name: 'Aussie Toast', quantity: 1 },
        { name: 'Stacks', quantity: 1 },
        { name: 'Hashbrown', quantity: 1 },
        { name: 'Sides', quantity: 1 },
        { name: 'Chicken Avocado', quantity: 1 },
        { name: 'Tomato Mozzarella', quantity: 1 },
        { name: 'Ham + Cheese', quantity: 1 },
        { name: 'Grilled Cheese', quantity: 1 },
        { name: 'Tomato Soup', quantity: 1 },
        { name: 'Waffle Dog', quantity: 1 },
        { name: 'Drip', quantity: 1 },
        { name: 'Americano', quantity: 1 },
        { name: 'Double Espresso', quantity: 1 },
        { name: 'Cappuccino', quantity: 1 },
        { name: 'Latte', quantity: 1 },
        { name: 'Mocha', quantity: 1 },
        { name: 'White Mocha', quantity: 1 },
        { name: 'Iced Coffee', quantity: 1 },
        { name: 'Iced Tea', quantity: 1 },
        { name: 'Lemonade', quantity: 1 },
        { name: 'Chai Latte', quantity: 1 },
        { name: 'Hot Cocoa', quantity: 1 },
    ]);

    const handleChange = e => {
        setState(
            [...state].map(item => {
                if (item.name === e.target.name) {
                    return { ...item, quantity: +e.target.value };
                } else return item;
            }),
        );
    };
    const handleSubmit = (e, id, quantity) => {
        e.preventDefault();
        props.onAdd(id, quantity);
    };

    const list = props.products.map(product => {
        return (
            <article key={product.id} className="col-9 col-sm-8 col-md-6 col-lg-4 mx-auto">
                <div className="card">
                    <div className="card-header justify-content-between d-flex">
                        <h6>{product.name}</h6>
                        <h6>${product.price.toFixed(2)}</h6>
                    </div>
                    <figure className="card-body">
                        <img src={product.image} alt={product.name} />
                    </figure>
                    <figcaption className="card-footer">
                        {product.description}
                        <form onSubmit={e => handleSubmit(e, product.id, state.filter(item => item.name === product.name)[0].quantity)} className="text-right">
                            <label htmlFor={product.name}>QTY</label>
                            <input size="2" type="text" pattern="[1-9]" title="Add products less than 9" id={product.name} name={product.name} value={state.filter(item => item.name === product.name)[0].quantity} onChange={handleChange} />
                            <button type="submit" className="form-control">
                                Add
                            </button>
                        </form>
                    </figcaption>
                </div>
            </article>
        );
    });

    return (
        <div className="container">
            <div className="row">{list}</div>
        </div>
    );
};
export default OrderList;
