import React, { useContext, useState } from 'react';
import { UserContext } from '../utility/Context';
import { signOut as handleSignOut } from '../services/Firebase';
import MenuBarView from './MenuBarView';
import SignInModal from './SignInModal';

function MenuBar() {
  const { currentUser } = useContext(UserContext);
  const [signInModalVisible, setSignInModalVisible] = useState(false);

  const handleSignInModalOpen = () => setSignInModalVisible(true);
  const handleSignInModalClose = () => setSignInModalVisible(false);

  return (
    <>
      <SignInModal show={signInModalVisible} handleSignInModalClose={handleSignInModalClose} />
      <MenuBarView
        currentUser={currentUser}
        handleSignOut={handleSignOut}
        handleSignInModalOpen={handleSignInModalOpen}
      />
    </>
  );
}

export default MenuBar;
