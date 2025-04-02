			
import React from 'react'

type FooterMenuItem = {
  ID: number;
  title: string;
  url: string;
};

type FooterProps = {
  footerData?: {
    footerMenuItems?: FooterMenuItem[];
  };
};

export default function Footer({ footerData }: FooterProps) {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <div className="flex gap-4">
        {footerData?.footerMenuItems && footerData.footerMenuItems.length > 0 ? (
          footerData.footerMenuItems.map((item) => (
            <a key={item.ID} href={item.url} className="text-gray-400 hover:text-gray-600">
              {item.title}
            </a>
          ))
        ) : (
          <span className="text-gray-400">No menu items available</span>
        )}
      </div>
    </footer>
  );
}
			
			