import React, { useState, useEffect } from "react";

const BeAwareModal = () => {
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   // Check if this is the user's first time visiting the page
  //   const isFirstVisit = localStorage.getItem("isFirstVisit");

  //   if (!isFirstVisit) {
  //     // If it's the first visit, show the modal
  //     setShowModal(true);
  //     // Mark the first visit in localStorage so we don't show the modal again
  //     localStorage.setItem("isFirstVisit", "true");
  //   }
  // }, []);

  useEffect(() => {
    const visitTimestamp = localStorage.getItem("visitTimestamp");

    if (!visitTimestamp) {
      setShowModal(true);
      localStorage.setItem("visitTimestamp", Date.now().toString());
    } else {
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000; 
      const timePassed = now - parseInt(visitTimestamp, 10);

      if (timePassed > oneDay) {
        // More than 1 day has passed, show modal again and update timestamp
        setShowModal(true);
        localStorage.setItem("visitTimestamp", Date.now().toString());
      }
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          {/* Overlay */}
          <div
            className="modal-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1040, // Behind modal but above other content
            }}
          ></div>

          {/* Modal */}
          <div
            className="modal fade twm-sign-up show"
            id="sign_up_popup"
            aria-hidden="true"
            aria-labelledby="sign_up_popupLabel"
            tabIndex="-1"
            style={{ display: "block", zIndex: 1050 }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <form>
                  <div className="modal-header mt-0">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={closeModal}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <div className="update-section">
                        <h5 className="text-primary">📣 Important Update:</h5>
                        <p>
                            We're excited to share that Angel Management Consultant
                            is in the process of becoming <strong>Angel Portal Private
                            Limited.</strong> During this transition, you may see both names
                            being used—please note that it's still the same trusted
                            team and services behind the scenes. Thank you for your
                            continued trust and support!
                        </p>
                    </div>
                    <hr />
                    <div className="alert-section">
                      <h5 className="text-danger">⚠️Fraud Alert – Please Read ⚠️</h5>
                      <p>
                        Some individuals are fraudulently using our name. We
                        only send emails from our official domain:
                        <strong>@angelgulfjobs.com</strong>
                        <br />
                        (e.g., info@angelgulfjobs.com)
                      </p>
                      <p>If you receive an email from any other domain, it is not from us.
                      Please do not respond and report it to us immediately.</p>
                     
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BeAwareModal;
