import gql from 'graphql-tag';

export const GET_ITEM_QUANTIY = gql`
{
    quantity @client
}
`


export function addItemToCart(client,change=1){
    let {quantity} = client.cache.readQuery({query:GET_ITEM_QUANTIY});
    client.writeData({ data: { quantity: quantity+change } })
}


