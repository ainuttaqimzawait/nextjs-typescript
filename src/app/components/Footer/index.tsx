// import { faFacebookF, faInstagram, faTwitter, faTh } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-5 w-screen bottom-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid text-center">
                        <h3 className="text-xl font-bold">Kontak Kami</h3>
                        <Link href="#" className="text-white">Jl. Palagan km 10 Rejodani, Ngaglik Sleman Yogyakarta</Link>
                        <Link href="#" className="text-white">Email: info@example.com</Link>
                        <Link href="#" className="text-white">Phone: (123) 456-7890</Link>
                    </div>
                    <div className="grid text-center">
                        <Link href='#' className="text-xl font-bold">Layanan Kami</Link>
                        <Link href="#" className="text-white">Bantuan</Link>
                        <Link href="#" className="text-white">Metode Pembayaran</Link>
                        <Link href="#" className="text-white">Pengembalian dan Penukaran</Link>
                        <Link href="#" className="text-white">Syarat dan Ketentuan</Link>
                    </div>
                    <div className="grid text-center">
                        <h3 className="text-xl font-bold">Ikuti Kami</h3>
                        <div className="flex justify-evenly">
                            <Link href='https://hijja.sistemtoko.com/?page=10#' passHref>
                                <Image src="/images/logo/download-removebg-preview.png" alt='' width={60} height={60} />
                            </Link>
                            <Link href='https://www.instagram.com/hijjaindonesia/' passHref>
                                <Image src="/images/logo/logo-wa-whatsapp-removebg-preview.png" alt='' width={60} height={60} />
                            </Link>
                            <Link href='https://www.instagram.com/hijjaindonesia/' passHref>
                                <Image src="/images/logo/logo-tiktok-removebg-preview.png" alt='' width={60} height={60} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm mt-8">supported by www.sistemtoko.com. Allright reserved</div>
        </footer>
    );
};

export default Footer;
