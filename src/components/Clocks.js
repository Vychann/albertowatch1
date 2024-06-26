import React, { useState } from 'react';
import './Clocks.css';

const initialClocks = [
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/323/2876/QXM381BRHA-NB__24594.1655312672.png?c=2', alt: 'ATLAS MIM CLOCK', price: '$400.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/283/2780/QXA759KLH-NB__56743.1655251105.png?c=2', alt: 'DAVIS WALL CLOCK', price: '$120.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/476/3801/QXA807ARH_Translucent__98866.1675374923.png?c=2', alt: 'SHIGATO CLOCK', price: '$75.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/474/3772/QXM397SRH_A_Translucent__47789.1674241528.png?c=2', alt: 'WINTER KING CLOCK', price: '$270.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/528/4159/QXA821KRH_translucent__69938.1704473694.png?c=2', alt: 'LAVIN CLOCK', price: '$70.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/520/4117/QXA812SRH_Translucent__28943.1691005154.png?c=2', alt: 'DISCO CLOCK', price: '$80.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/491/3907/QXA791TLH_Translucent__17102.1676663552.png?c=2', alt: 'AMBER CLOCK', price: '$110.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/404/2798/QXA788ZLH-NB__94031.1655254865.png?c=2', alt: 'HI/LO LUMINOUS CLOCK', price: '$85.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/292/2908/QXM383BRHA-NB__67727.1657659181.png?c=2', alt: 'MIDNIGHT CLOCK', price: '$750.00' },
  { src: 'https://cdn11.bigcommerce.com/s-qh06nmrb4v/images/stencil/190x250/products/286/2784/QXA764KLH-NB__39673.1655251537.png?c=2', alt: 'BENNETT CLOCK', price: '$150.00' },
  { src: 'https://harrisclocks.in/cdn/shop/products/Product-1-42.jpg?v=1671607923&width=990', alt: 'THREADNEEDLE STREET', price: '$150.00' },
  { src: 'https://harrisclocks.in/cdn/shop/products/IMG_3642.png?v=1631692344&width=990', alt: 'BOND STREET', price: '$110.00' },
  { src: 'https://harrisclocks.in/cdn/shop/products/WechatIMG27322.png?v=1615277935&width=990', alt: 'PARK LANE', price: '$130.00' },
  { src: 'https://harrisclocks.in/cdn/shop/files/10A.jpg?v=1713861522&width=990', alt: 'CAMDEN HIGH STREET', price: '$200.00' },
  { src: 'https://harrisclocks.in/cdn/shop/products/DSC08122-1copy.png?v=1595236810&width=990', alt: 'TRAFALGAR STREET', price: '$180.00' },
  { src: 'https://harrisclocks.in/cdn/shop/products/12.png?v=1599117255&width=990', alt: 'EUSTON ROAD', price: '$100.00' },
  { src: 'https://harrisclocks.in/cdn/shop/files/2.jpg?v=1719054331&width=533', alt: 'COVENT', price: '$100.00' },
  { src: 'https://harrisclocks.in/cdn/shop/products/IMG_0019copy2.png?v=1632908865&width=990', alt: 'HARLEY STREET', price: '$140.00' },
  { src: 'https://harrisclocks.in/cdn/shop/products/2-1.jpg?v=1615190713&width=990', alt: 'BRICK LANE BY THE NIGHT', price: '$200.00' },
  { src: 'https://harrisclocks.in/cdn/shop/files/fc619f8d29b076fd7b50465c88bd8554.jpg?v=1713862862&width=990', alt: 'JERMYN STREET', price: '150.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw24390b5c/images/Titan/Catalog/W0071PM01_1.jpg?sw=800&sh=800', alt: 'WESTMINSTER CLOCK', price: '$400.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb061433d/images/Titan/Catalog/W0022MA01_1.jpg?sw=800&sh=800', alt: 'CRYSTAL CLOCK', price: '$200.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw87615f63/images/Titan/Catalog/W0087PA02_1.jpg?sw=360&sh=360', alt: 'SECRET CLOCK', price: '$150.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7c0fe54c/images/Titan/Catalog/W0057MA01_1.jpg?sw=800&sh=800', alt: 'ROSE CLOCK', price: '$120.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw62e91d5c/images/Titan/Catalog/W0010PA02_1.jpg?sw=360&sh=360', alt: 'PALL MALL CLOCK', price: '$125.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw833efb21/images/Titan/Catalog/W0043PA04_1.jpg?sw=800&sh=800', alt: 'ANCIENT CLOCK', price: '$180.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0e08d265/images/Titan/Catalog/W0078MA01_1.jpg?sw=360&sh=360', alt: 'DAVIS CLOCK', price: '$160.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcfb6f7ff/images/Titan/Catalog/W0079PA02_1.jpg?sw=800&sh=800', alt: 'LENOX CLOCK', price: '$190.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaf3b7527/images/Titan/Catalog/W0010PA01_1.jpg?sw=360&sh=360', alt: 'SANO CLOCK', price: '$185.00' },
  { src: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw40f4fd15/images/Titan/Catalog/W0041PA01_1.jpg?sw=360&sh=360', alt: 'SARA CLOCK', price: '$100.00' },
];

const Clocks = () => {
  const [sortedClocks, setSortedClocks] = useState(initialClocks);

  const sortClocksByPrice = () => {
    const sorted = [...sortedClocks].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return priceA - priceB;
    });
    setSortedClocks(sorted);
  };

  return (
    <div>
      <button onClick={sortClocksByPrice}>Sort by Price (Low to High)</button>
      <div className="gallery" id="gallery">
        {sortedClocks.map((clock, index) => (
          <div className="clock-item" key={index}>
            <img src={clock.src} alt={clock.alt} />
            <h3>{clock.alt}</h3>
            <p className="price">{clock.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clocks;
