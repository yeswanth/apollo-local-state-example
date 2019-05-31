import gql from 'graphql-tag';

export const GET_ITEM_QUANTIY = gql`
{
    quantity @client
}
`


export function addItemToCart(client,change=1){

    client.writeQuery({query,})
    // client.writeData({ data: { visibilityFilter: filter } })
}


