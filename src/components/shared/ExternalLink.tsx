import React from 'react'
type LinkProps = {
    name: string,
    url: string,
}
export default function ExternalLink({ name, url }: LinkProps) {
    return (
        <a href={url}
            className='link'
            aria-label={`Learn more about ${name}`}
            target='_blank'
            rel='noopener noreferrer'>
            {name}
        </a>

    )
}
