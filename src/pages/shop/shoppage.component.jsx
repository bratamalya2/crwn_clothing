import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state={
            collections: SHOP_DATA
        }
    }
    render()
    {
        return (<div>
            {
                this.state.collections.map((set_data)=> (
                <div><CollectionPreview key={set_data.id} title={set_data.title} items={set_data.items.slice(0,4)}/></div>
                ))
            } 
        </div>)
    }
}

export default ShopPage