import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = ({ className }) => (
    <ContentLoader
        className={className}
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="138" cy="120" r="120" />
        <rect x="0" y="265" rx="5" ry="5" width="280" height="25" />
        <rect x="0" y="308" rx="10" ry="10" width="280" height="85" />
        <rect x="0" y="420" rx="5" ry="5" width="90" height="27" />
        <rect x="130" y="410" rx="25" ry="25" width="150" height="45" />
    </ContentLoader>
);

export default Skeleton;
