import {useFetch} from '../hooks/useFetch';
import { NekosProps } from './NekosProps';

interface Item {
    url: string;
  }

export default function Nekos ()  {

    const {data, fetchData} =  useFetch("https://nekos.best/api/v2/neko");

  return (
    <div>
      <button onClick={fetchData}>Generate gifts</button>
      <ul>
      {data.map((item: Item, id) => {
          return <img key={id} src={item.url} alt="Neko" />;
        })}
      </ul>
    </div>
  )
}
