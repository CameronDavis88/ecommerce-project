import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, addToCart }) => {
    // this was the way the demonstration did css see useStyles imported above and styles.js file
    const classes = useStyles();

    // destructuring properties from product from props which is per object as it is mapped in Products
    const { name, price, image, description, id } = product;

    return (
        <Card className={classes.root} >
            <CardMedia
                className={classes.media}
                image={image}
                title={name}/>
            <CardContent >
                <div>
                    <Typography variant='h5' gutterBottom component='h2' > {name} </Typography >
                    <img className='item-image' src={image.url} alt={name} />
                    <Typography variant='h5' component='h2' > {price.formatted_with_symbol} </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => addToCart(id, 1)} >
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
