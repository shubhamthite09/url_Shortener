import React from 'react';

const UrlList = () => {
    let urls = [
        {shortUrl:"ok",originalUrl:"new"},
        {shortUrl:"ok1",originalUrl:"new1"},
        {shortUrl:"ok2",originalUrl:"new2"},
    ]
    return (
        <div className="mt-4 p-3 m-5">
        {urls.map((url) => (
            <div key={url.shortUrl} className="bg-white p-2 my-1 border rounded">
            <p>
                Original URL: <a href={url.originalUrl}>{url.originalUrl}</a>
            </p>
            <p>
                Short URL: <a href={url.shortUrl}>{url.shortUrl}</a>
            </p>
            </div>
        ))}
        </div>
    );
};

export default UrlList;