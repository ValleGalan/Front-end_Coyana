import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-end">
              <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                &times;
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
              <form id="registerForm">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="popup_user_email"
                    id="popup_user_email"
                    className="textfield email border border-gray-300 rounded py-2 px-4 w-full"
                  />
                </div>
                <div className="sc_app_error" id="sc_app_error_msg" style={{ display: 'none' }}></div>
                <div className="sc_app_success_msg" id="sc_app_success_msg" style={{ display: 'none' }}></div>
                <div>
                  <button
                    type="button"
                    className="button2 sc-app-popup-submit bg-blue-500 bg-text-color py-2 px-4 rounded hover:bg-blue-700"
                    name="Submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
