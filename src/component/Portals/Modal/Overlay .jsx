const modalOverlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0,0,0,0.65)",
};

const ModalOverlay = ({ onClick }) => {
  return <div onClick={onClick} style={modalOverlayStyles} />
};

export default ModalOverlay