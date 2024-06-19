import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaRegStar } from 'react-icons/fa';
import { SPONSORS_VIDEOS } from '../data/sponsors/index.jsx';

// Estilización con styled-components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;

`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const VideoFrame = styled(motion.div)`
  flex: 1 1 calc(33.333% - 20px);
  max-width: 33.333%;
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
`;

const SponsorVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SPONSORS_VIDEOS.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TitleContainer
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaRegStar size={32} color="#f39c12" />
        <motion.h4
        className='h4'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Sponsors
        </motion.h4>
      </TitleContainer>
      <VideoContainer>
        {SPONSORS_VIDEOS.slice(0, 3).map((sponsor, index) => (
          <VideoFrame
            key={sponsor.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {sponsor.videoUrl ? (
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <video
                  src={sponsor.videoUrl}
                  muted
                  loop
                  autoPlay
                  controls={false}
                  style={{ borderRadius: '10px' }}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              </a>
            ) : (
              <div>No hay video disponible para este patrocinador.</div>
            )}
          </VideoFrame>
        ))}
      </VideoContainer>
    </Container>
  );
};

export default SponsorVideos;
