'use client';
import React, { useEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';
import { Product } from '@/app/dataTypes/types';
import { fetchProducts } from '@/app/api';
import Image from 'next/image';


const productsAtom = atom<Product[]>([]);

const HomePage: React.FC = () => {
    const [products, setProducts] = useAtom(productsAtom);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchProducts();
                setProducts(response.aaData);
                // console.log(response.aaData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    const handleClick = () => {
        alert('halaman belum dibuat')
    }

    return (
        <section className=''>
            <div className='grid grid-cols-6 gap-4'>
                {products.map((item, index: number) => (
                    <section key={index} className="w-[180px] h-[280px] m-3 pb-1 bg-white rounded">
                        <div className="cursor-pointer" onClick={handleClick}>
                            <Image src={item.photo} alt={item.photo} width={180}
                                height={200} unoptimized />
                        </div>
                        <div className="grid place-items-center p-0">
                            <div className="text-sm m-0">{item.name}</div>
                            <div className="text-orange m-0">
                                {item.currency} {item.price}
                            </div>
                            <button className="bg-[#843b49] px-2 h-8 text-sm border-none">Masukkan Keranjang</button>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default HomePage;