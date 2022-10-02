import { gql } from '@apollo/client';


export const QUERY_PRODUCT = gql`
{
	products(first:5) {
		nodes {
			id 
			title
			featuredImage {
				url
			}
			variants(first:5) {
				nodes {
					priceV2 {
						amount
					}
				}
			}
		}
	}
}
`;