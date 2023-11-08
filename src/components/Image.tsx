import React, { FC } from 'react';
import '../About.css';

interface Props {
    image: string;
    name: string;
    program_year: string;
    university: string;
    fb_link: string;
}

const Image: FC<Props> = ( { image, name, program_year, university, fb_link } ) => {
    return (
        <>
            <img src={image} />
            <a href={fb_link} className="name-link">
                <p className="name-text">{name}</p>
                <p className="info-text">{program_year}</p>
                <p className="caption-text">{university}</p>
            </a>
        </>
    );
};

export default Image;
