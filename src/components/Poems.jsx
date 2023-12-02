import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PoemCarousel from './PoemCarousel';
import PoemCard from './PoemCard';

const Poems = () => {
  const [poem, setPoem] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [allPoems, setAllPoems] = useState([]);
  const [expandedPoemId, setExpandedPoemId] = useState(null);
  const [expandedPoemText, setExpandedPoemText] = useState('');
  const [favorites, setFavorites] = useState({});


  useEffect(() => {
    fetch('http://localhost:3000/api/poems/getAllPoems')
    .then(data => data.json())
    // .then(data => console.log(data));
    .then(data => setAllPoems(data));
  }, []);

  const handleFindPoem = () => {
    // Placeholder for the logic to find and set a new poem
    setPoem('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  };

  const handleGetPoems = () => {
    console.log('got poems');
    fetch('http://localhost:3000/api/poems/getAllPoems')
    .then(data => data.json())
    .then(data => console.log(data));
    
  };




  const handleFindSinglePoem = (poemID) => {
    // Check if we're collapsing the currently expanded card
    if (poemID === expandedPoemId) {
      setExpandedPoemId(null);
      setExpandedPoemText('');
    } else {
      fetch(`http://localhost:3000/api/poems/getSinglePoem/poem-${poemID}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(poemData => {
          setExpandedPoemId(poemID);
          setExpandedPoemText(poemData[0].text); // Assuming 'text' holds the poem text
        })
        .catch(error => console.error('Error fetching poem:', error));
    }
  };


  const handleFavoriteToggle = (poemID) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [poemID]: !prevFavorites[poemID], // Toggle favorite state
    }));

    // Perform the fetch request to update the backend about the favorited poem
    const userID = 1; // Need to replace with the actual user id
    const isFavorited = !!favorites[poemID]; // Check the current favorite state
    const url = `http://localhost:3000/api/poems/${isFavorited ? 'markFavorite' : 'removeFavorite'}/user/${userID}/poem-${poemID}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {userID: null} // Need to update with the actual User ID
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error updating favorite:', error);
    });
  };
  

  return (
        <PoemCarousel>
          {allPoems.map((poem, i) => (
            <PoemCard
            title={poem.title}
            author={`${poem.first_name} ${poem.last_name}`}
            key={{i}}
            poemID={poem.poem_id}
            handleFindSinglePoem={() => handleFindSinglePoem(poem.poem_id)}
            isExpanded={poem.poem_id === expandedPoemId}
            expandedPoemText={expandedPoemId === poem.poem_id ? expandedPoemText : ''}
            />
            ))}
        </PoemCarousel>
  );
};

export default Poems;
