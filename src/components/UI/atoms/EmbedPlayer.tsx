import React from 'react'

type Props = {
    height: string,
    width: string,
    url: string
}

export default function EmbedPlayer({height, width, url} : Props) {
    return (
        <iframe width={width} height={height} src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
}