type GalleryItemProps = {
  src: string;
  onClick: () => void;
};

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer p-2">
      <img
        src={src}
        alt="Thumbnail"
        className="block object-cover rounded-md hover:scale-95 duration-300 transition-all md:max-h-[200px]"
      />
    </div>
  );
};
