import React from "react";

const MedicalCenterAddress = ({
  medicalName,
  doctorName,
  address,
  telephoneNo,
  faxno,
  emailid = "", 
  phoneNo,
}) => {
 
  const emailList = emailid ? emailid.split(',') : [];

  return (
    <>
      <ul className="description-list-2">
        <li>
          <i className="feather-check" />
          {medicalName}
          <br />
          <span className="fw-normal">{doctorName}</span>
          <br />
          <span>
            Address : <span className="fw-normal">{address}</span>
          </span>
          <br />
          <span>
            Telephone No:<span className="fw-normal">{telephoneNo}</span>
          </span>
          <br />
          {faxno && (
            <span>
              Fax No:<span className="fw-normal">{faxno}</span>
            </span>
          )}
          <br />
          {phoneNo ? (
            <span>
              Phone No: <span className="fw-normal">{phoneNo}</span>
            </span>
          ) : (
            <div className="email-container">
              <span>Email:</span>
              {emailList.map((email, index) => (
                <span key={index} className="fw-normal email-item">
                  {email.trim()}
                  {index < emailList.length - 1 && ','} 
                </span>
              ))}
            </div>
          )}
        </li>
      </ul>
    </>
  );
};


export default MedicalCenterAddress;

