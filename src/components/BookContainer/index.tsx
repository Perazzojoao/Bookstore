import { Item } from "@/types/api.type";
import Image from "next/image";

interface BookContainerProps {
  book: Item
}

const BookContainer = ({ book }: BookContainerProps) => {
  const imageLink = book.volumeInfo.imageLinks
  return (
    <>
      <div key={book.id} className="flex flex-nowrap gap-4 p-2">
        {
          imageLink ?
            <Image
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              width={128}
              height={192}
              className="object-cover rounded-md"
            />
            :
            <div className="border flex justify-center items-center rounded-sm min-w-[128px] min-h-[179px] p-2">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                className="rounded-sm"
              />
            </div>

        }
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg sm:text-xl line-clamp-1">{book.volumeInfo.title}</h3>
          <p className="italic">{book.volumeInfo.authors?.join(', ')}</p>
          <p className="line-clamp-4 text-justify text-sm">{book.volumeInfo.description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="my-3 inset-0 bg-zinc-200 w-3/4 min-h-[1px]"></div>
      </div>
    </>
  );
}

export default BookContainer;