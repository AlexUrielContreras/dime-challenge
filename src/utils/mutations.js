import { gql } from '@apollo/client';

export const CREATE_CART = gql`
    mutation cartCreate {
        cartCreate {
            cart {
                id 
                checkoutUrl
            }
        }
    }
`;


export const ADD_TO_CART = gql` 
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
	cartLinesAdd(cartId: $cartId, lines: $lines) {
		cart {
			cost {
				checkoutChargeAmount {
					amount
				}
			}
			totalQuantity
        }
	}
} 
`;