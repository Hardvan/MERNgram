import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";

function ProfileModal({ modalOpened, setModalOpened }) {
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
      <form className="infoForm">
        <h3>Your Info</h3>

        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="worksAt"
            placeholder="Works at"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="livesIn"
            placeholder="Lives In"
            className="infoInput"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="relationshipStatus"
            placeholder="Relationship Status"
            className="infoInput"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className="btn infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
