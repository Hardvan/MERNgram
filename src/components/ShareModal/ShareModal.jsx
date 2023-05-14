import { Modal, useMantineTheme } from "@mantine/core";
import "./ShareModal.css";
import PostShare from "../PostShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  // Function to handle modal close
  function handleClose() {
    setModalOpened(false);
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[1]
      }
      size="55%"
      overlayOpacity={0.55}
      overlayBlur={3} // Blur the background
      opened={modalOpened}
      onClose={handleClose}
    >
      {/* Modal Content */}
      <PostShare />
    </Modal>
  );
}

export default ShareModal;
