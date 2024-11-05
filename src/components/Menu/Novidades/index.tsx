'use client'

import { api } from "@/lib/api";
import { Item } from "@/types/api.type";
import Image from "next/image";
import { useEffect, useState } from "react";

const Novidades = () => {
  const [item, setItem] = useState<Item[]>([]);

  async function getNovidades() {
    const response = await api.get('?q=intitle:', {
      params: {
        orderBy: 'newest',
        maxResults: 6
      }
    });
    setItem(response.data.items);
  }

  useEffect(() => {
    getNovidades();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {item.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 items-center">
          <a href={item.volumeInfo.previewLink} target="_blank">
            <Image
              src={item.volumeInfo.imageLinks.thumbnail}
              alt={item.volumeInfo.title}
              width={128}
              height={192}
              className="object-cover rounded-md"
            />
          </a>
          <h4 className="text-sm text-center line-clamp-2">{item.volumeInfo.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Novidades;