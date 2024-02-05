'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Category } from '@/app/dataTypes/types';
import { atom, useAtom } from 'jotai';
import { fetchProductCategory } from '@/app/api';

const categoriesAtom = atom<Category[]>([]);
const Navbar: React.FC = () => {
    const [category, setCategory] = useAtom(categoriesAtom);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchProductCategory();
                setCategory(response.aaData);
                // console.log(response.aaData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    return (
        <nav className="bg-red-700 fixed z-10 w-full top-0">
            <div className="container mx-auto flex justify-between items-center py-3">
                <div className="cursor-pointer">
                    <Image
                        src="/images/logo/hijab-logo-vector-26808833-removebg-preview.png" // Path relatif dari folder 'public'
                        alt="gambar"
                        width={200}
                        height={200}
                        className='-mt-[60px] -mb-[80px]'
                    />
                </div>
                <div className="hidden md:grid items-center -ml-5">
                    <div className="flex">
                        <input
                            type="search"
                            placeholder="Search"
                            className="p-2 mr-2 w-[720px] border border-gray-300 rounded"
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                        />
                        {/* <button className="p-2 bg-green-500 text-white" onClick={handleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button> */}
                    </div>
                    <div className="">
                        {category.map((e) => (
                            <button
                                key={e.keyword_id}
                                // onClick={() => { dispatch(keywordProduct(search)); }}
                                className="text-sm font-medium hover:text-gray-800 px-2 transition-all"
                            >
                                {e.keyword_name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-5">
                    <button className="text-xl" onClick={() => alert('Halaman belum dibuat')}>
                        <Image src="/images/logo/keranjang-belanja-removebg-preview.png" alt='' width={40} height={40} />
                    </button>
                    <div className="flex items-center">
                        <button className="text-sm" onClick={() => alert('Halaman belum dibuat')}>
                            Register
                        </button>
                        <div className="mx-2">|</div>
                        <button className="text-sm" onClick={() => alert('Halaman belum dibuat')}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
