import { gql } from '@apollo/client';


export const QUERY_PRODUCT = gql`
{
	products(first: 5) {
			edges {
				node{
					id 
					title
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