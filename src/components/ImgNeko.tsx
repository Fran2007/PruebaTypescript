interface Item {
  url: string;
}

interface ImgNekoProps {
  item: Item;
  id: number;
}

const ImgNeko: React.FC<ImgNekoProps> = ({ item, id }) => {
  return (
    <div className="flex flex-row mx-5 my-2 bg-gray-950 rounded-lg shadow-xl p-5 pt-8" key={id}>
      <img src={item.url} alt="Neko" />
    </div>
  );
};

export default ImgNeko;