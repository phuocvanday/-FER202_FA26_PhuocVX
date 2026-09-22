import taiNgheImg from '../assets/products/tainghe-bluetooth.png';
import chuotImg from '../assets/products/chuot-khong-day.png';
import banPhimImg from '../assets/products/ban-phim-co.jpg';
import manHinhImg from '../assets/products/man-hinh-24.jpg';
import webcamImg from '../assets/products/webcam-fullhd.jpg';
import loaMiniImg from '../assets/products/loa-mini.jpg';
import ssdImg from '../assets/products/ssd-512gb.jpg';
import usbImg from '../assets/products/usb-64gb.png';

export const products = [
  {
    id: 1,
    name: 'Tai nghe Bluetooth',
    price: 590000,
    category: { name: 'Âm thanh' },
    inStock: true,
    discount: 10,
    rating: { rate: 4.5, count: 120 },
    image: taiNgheImg,
  },
  {
    id: 2,
    name: 'Chuột không dây',
    price: 250000,
    category: { name: 'Phụ kiện' },
    inStock: true,
    discount: 0,
    rating: { rate: 4.2, count: 85 },
    image: chuotImg,
  },
  {
    id: 3,
    name: 'Bàn phím cơ',
    price: 1250000,
    category: { name: 'Phụ kiện' },
    inStock: false,
    discount: 0,
    rating: { rate: 4.8, count: 210 },
    image: banPhimImg,
  },
  {
    id: 4,
    name: 'Màn hình 24 inch',
    price: 3490000,
    category: { name: 'Màn hình' },
    inStock: true,
    discount: 15,
    rating: { rate: 4.4, count: 64 },
    image: manHinhImg,
  },
  {
    id: 5,
    name: 'Webcam Full HD',
    price: 780000,
    category: { name: 'Phụ kiện' },
    inStock: true,
    discount: 0,
    rating: { rate: 4.0, count: 47 },
    image: webcamImg,
  },
  {
    id: 6,
    name: 'Loa mini',
    price: 450000,
    category: { name: 'Âm thanh' },
    inStock: false,
    discount: 20,
    rating: { rate: 3.9, count: 32 },
    image: loaMiniImg,
  },
  {
    id: 7,
    name: 'Ổ cứng SSD 512GB',
    price: 1190000,
    category: { name: 'Lưu trữ' },
    inStock: true,
    discount: 5,
    rating: { rate: 4.7, count: 156 },
    image: ssdImg,
  },
  {
    id: 8,
    name: 'USB 64GB',
    price: 150000,
    category: { name: 'Lưu trữ' },
    inStock: true,
    discount: 0,
    rating: { rate: 4.1, count: 93 },
    image: usbImg,
  },
];
