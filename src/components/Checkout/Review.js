import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { Product } from '..';

const Review = ({ checkoutToken, shippingData }) => {

    // console.log(shippingData)

    return (
        <>
        This should be the confirmation review page!!!!
        
            <Typography variant='h6' >Order Summary</Typography>
            <List disablePadding >
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0px'}} key={product.name} >
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant='body2' >{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0px'}}>
                    <ListItemText primary='Total' />
                    <Typography variant='subtitle1' style={{ fontWeight:700 }} >
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review;
