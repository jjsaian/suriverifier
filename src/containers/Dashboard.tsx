import React, { FC } from "react";
// import { useAuthentication } from "./Authentication";
import { Card } from "react-bootstrap";
import "./Dashboard.css";
import CredentialTable from './CredentialTable';
const Dashboard: FC = () => {
  // const { sdk } = useAuthentication();
  // const did = sdk!.did;
  return (
    <div className="Home">
      <Card>
        <Card.Header as="h5">
          List of Bachelor Degrees
        </Card.Header>
        <Card.Body children={<div><p>Credentials with a checkmark represents a validated credential.</p><CredentialTable /></div>} />
      </Card>
    </div>
  );
};
export default Dashboard;