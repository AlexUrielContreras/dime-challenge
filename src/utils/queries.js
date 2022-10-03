import { gql } from '@apollo/client';


export const QUERY_PRODUCT = gql`
{
	products(first: 5) {
			edges {
				node{
					id 
					title
					featuredImage {
						url
					}
					variants(first: 5) {
						edges{
							node {
								id
								priceV2 {
									amount
								}
							}
						}
					}
			}
		}
	}
}

`;

export const QUERY_CART = gql`
	query cart($id: ID!) {
		cart(id: $id) {
			cost {
				checkoutChargeAmount {
					amount
				}
			}
		}
	}
`;