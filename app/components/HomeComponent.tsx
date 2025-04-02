'use client';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../axios';
import { API_PATHS } from '../../constants';

export default function HomeComponent() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPI(API_PATHS.HERO);  // Fetch from the homepage API path
        console.log("API Response Data:", data);  // Log the API response
        
        // Parse the content if available
        if (data && data.content && data.content.rendered) {
          // Extract h2, p, and button data
          const parsedContent = parseContent(data.content.rendered);
          setHomeData(parsedContent);  // Set the parsed content
        }
        setLoading(false);  // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();  // Call the fetch function when the component mounts
  }, []);

  // Function to parse the content HTML and extract specific elements
  const parseContent = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    const h2 = doc.querySelector('h2')?.textContent || '';
    const p = doc.querySelector('p')?.textContent || '';
    const buttonLink = doc.querySelector('.wp-block-button__link')?.getAttribute('href') || '#';
    const buttonText = doc.querySelector('.wp-block-button__link')?.textContent || 'Button';

    return {
      h2,
      p,
      button: {
        text: buttonText,
        link: buttonLink
      }
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-left p-8">
      {homeData ? (
        <div>
          <h2 className="text-2xl">{homeData.h2}</h2>
          <p>{homeData.p}</p>
          <a href={homeData.button.link} className="px-6 py-2 text-white font-semibold uppercase rounded-full bg-gradient-to-r from-gray-600 to-gray-400 border border-gray-300 shadow-md ring-2 ring-gray-200 ring-opacity-50 hover:from-gray-700 hover:to-gray-500 active:from-gray-800 active:to-gray-600">
            {homeData.button.text}
          </a>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}