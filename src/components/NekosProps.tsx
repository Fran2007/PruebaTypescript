import {memo} from 'react'

interface NekosPropsType {
    url: string;
    artist_name: string;
}


export const  NekosProps = ({url, artist_name}: NekosPropsType) => {
return (
    <div>
        <img src={url} />
        <h1>{artist_name}</h1>
    </div>
)
}

export default memo(NekosProps);