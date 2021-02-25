import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


import CollectionPreview from '../collection-preview/collection-preview.component'

import {createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => {
            return (
                <CollectionPreview key={id} {...otherCollectionProps} />
            );

        })}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);