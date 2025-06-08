// import React from 'react';

export default function Offersection() {
  // ✅ Move variable declarations outside the return
  const offers = [
    {
      id: 1,
      title: '50% Off Shoes',
      description: 'Get the best shoes at half price!',
      image: 'https://m.media-amazon.com/images/I/71RT3cnoFQL._SY695_.jpg',
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free',
      description: 'Limited time clothing offer.',
      image: 'https://m.media-amazon.com/images/I/71OijuPigWL._SY879_.jpg',
    },
    {
      id: 3,
      title: 'Clearance Sale',
      description: 'Up to 70% off on electronics.',
      image: 'https://m.media-amazon.com/images/I/61NcJuDzfqL._SL1500_.jpg',
    },
    {
      id: 4,
      title: 'Summer Sale',
      description: 'Cool deals on summer wear!',
      image: 'https://m.media-amazon.com/images/I/614qM1GGvkL._SY879_.jpg',
    },
    {
      id: 5,
      title: 'Gadget Bonanza',
      description: 'Save big on the latest gadgets.',
      image: 'https://m.media-amazon.com/images/I/71z6H3VKwWL._SL1500_.jpg',
    },
    {
      id: 6,
      title: 'Fitness Gear Discount',
      description: 'Up to 60% off on fitness equipment.',
      image: 'https://m.media-amazon.com/images/I/81mSxpPdLeL._SX679_.jpg',
    },
    {
      id: 7,
      title: 'Kitchen Essentials',
      description: 'Mega discounts on cookware.',
      image: 'https://m.media-amazon.com/images/I/61aZ1CUskVL._SX679_.jpg',
    },
    {
      id: 8,
      title: 'Book Fair',
      description: 'Flat 30% off on all books.',
      image: 'https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg',
    },
    {
      id: 9,
      title: 'Home Decor Deals',
      description: 'Spruce up your space on a budget.',
      image: 'https://m.media-amazon.com/images/I/81C0F1wSygL._SX679_.jpg',
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Special Offers</h2>
      <div className="row">
        {offers.map((offer) => (
          <div className="col-md-4 mb-3" key={offer.id}>
            <div className="card h-100 p-2" style={{ maxHeight: '300px', fontSize: '0.9rem' }}>
              <img
                src={offer.image}
                alt={offer.title}
                className="card-img-top"
                style={{ height: '190px', objectFit: 'contain' }}
              />
              <div className="card-body p-2">
                <h5 className="card-title mb-1" style={{ fontSize: '1rem' }}>
                  {offer.title}
                </h5>
                <p className="card-text" style={{ fontSize: '0.85rem' }}>
                  {offer.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
