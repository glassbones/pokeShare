import React from "react";
import { Helmet } from "react-helmet";

export default ({url, image, desc, title}) => 

    <Helmet>

        {/* <!-- Facebook Meta Tags --> */}
        <meta 
            property="og:url" 
            content={url} />
        <meta 
            name="description" 
            content={desc} />
        <meta 
            property="og:title" 
            content={title}/>
        <meta 
            property="og:image" 
            content={image} 
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta 
            name="twitter:card" 
            content="summary_large_image" />
        <meta 
            name="twitter:title" 
            content={title} />
        <meta
            name="twitter:description"
            content={desc}
        />
        <meta 
            property="og:image" 
            content={image} 
        />
    
    </Helmet>

