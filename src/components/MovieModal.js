import React from 'react'
import PropTypes from 'prop-types'
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

MovieModal.propTypes = {
  isOpen: PropTypes.string,
  youtubeKey: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
}
MovieModal.defaultProps = {
  isOpen: false,
}

export default MovieModal
