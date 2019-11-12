import React from 'react'
import ModalVideo from 'react-modal-video'
import { StyledModal } from '../style/StyledModal'

const MovieModal = ({ isOpen, youtubeKey, closeModal }) => {
  return (
    <StyledModal>
      <ModalVideo
        channel="youtube"
        allowFullScreen={true}
        autoplay={true}
        isOpen={isOpen}
        videoId={youtubeKey}
        onClose={closeModal}
      />
    </StyledModal>
  )
}

export default MovieModal
