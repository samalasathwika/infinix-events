import React from 'react';

const galleryImages = [
  {
    category: 'Weddings',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
        title: 'Elegant Wedding Reception'
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
        title: 'Traditional Wedding Ceremony'
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
        title: 'Destination Wedding'
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866',
        title: 'Wedding Decor'
      },
      {
        url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0',
        title: 'Beachside Wedding'
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
        title: 'Garden Wedding'
      }
    ]
  },
  {
    category: 'Birthday Celebrations',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84',
        title: 'Kids Birthday Bash'
      },
      {
        url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368',
        title: 'Themed Birthday Party'
      },
      {
        url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
        title: 'Adult Birthday Celebration'
      },
      {
        url: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d',
        title: 'Birthday Decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
        title: 'Sweet Sixteen Party'
      },
      {
        url: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21',
        title: 'Birthday Cake Ceremony'
      }
    ]
  },
  {
    category: 'Corporate Events',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
        title: 'Business Conference'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
        title: 'Product Launch'
      },
      {
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
        title: 'Corporate Gala'
      },
      {
        url: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef',
        title: 'Team Building Event'
      },
      {
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
        title: 'Corporate Workshop'
      },
      {
        url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
        title: 'Networking Event'
      }
    ]
  },
  {
    category: 'Award Ceremonies',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6',
        title: 'Industry Awards Night'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
        title: 'Excellence Awards'
      },
      {
        url: 'https://images.unsplash.com/photo-1561489413-985b06da5bee',
        title: 'Red Carpet Event'
      },
      {
        url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
        title: 'Gala Dinner'
      },
      {
        url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf',
        title: 'Recognition Ceremony'
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
        title: 'Annual Awards Function'
      }
    ]
  },
  {
    category: 'Social Gatherings',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1530023367847-a683933f4172',
        title: 'Cocktail Party'
      },
      {
        url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
        title: 'Garden Party'
      },
      {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
        title: 'Engagement Party'
      },
      {
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
        title: 'Reunion Event'
      },
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
        title: 'Anniversary Celebration'
      },
      {
        url: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9',
        title: 'Outdoor Social Event'
      }
    ]
  },
  {
    category: 'Virtual & Hybrid Events',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1609234656388-0ff363383899',
        title: 'Virtual Conference Setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7',
        title: 'Hybrid Event Studio'
      },
      {
        url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
        title: 'Virtual Team Meeting'
      },
      {
        url: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf',
        title: 'Digital Event Production'
      },
      {
        url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
        title: 'Live Streaming Setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
        title: 'Virtual Award Show'
      }
    ]
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Our Event Gallery
          </h1>
          <p className="text-xl text-center opacity-90 max-w-2xl mx-auto">
            Explore our portfolio of memorable events and celebrations
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {galleryImages.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-6 font-semibold text-lg">
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}