import React, { FC, useState } from "react";
import { useAuthentication } from "./Authentication";
import { Button, Form, FormControl } from "react-bootstrap";
import config from '../config';

const Login: FC = () => {
  const { loading, login } = useAuthentication();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shareCredRequestToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNyZWRlbnRpYWxSZXF1aXJlbWVudHMiOlt7InR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJJRERvY3VtZW50Q3JlZGVudGlhbFBlcnNvblYxIl0sImNvbnN0cmFpbnRzIjpbXX1dLCJjYWxsYmFja1VSTCI6IiJ9LCJleHAiOjE2MjA0NzAyNDUwMDAsInR5cCI6ImNyZWRlbnRpYWxSZXF1ZXN0IiwianRpIjoiNDAyNTg4MDU4Yjg3ZWMyYiIsImlzcyI6ImRpZDplbGVtOkVpQTJ3VVp4dWFLRTM3QjhuOFNNMklXSXFmLWZiMDhleVF3bEJzVkVuUTZrb0E7ZWxlbTppbml0aWFsLXN0YXRlPWV5SndjbTkwWldOMFpXUWlPaUpsZVVwMlkwZFdlVmxZVW5CaU1qUnBUMmxLYW1OdFZtaGtSMVZwVEVOS2NtRlhVV2xQYVVscVkwaEtjR0pYUm5sbFUwbHpTVzFHYzFwNVNUWkphMVpVVFdwVk1sTjVTamtpTENKd1lYbHNiMkZrSWpvaVpYbEtRVmt5T1hWa1IxWTBaRU5KTmtsdGFEQmtTRUo2VDJrNGRtUjZUbkJhUXpWMlkyMWpkbU15Vm1wa1dFcHdaRWhyZG1ScVNXbE1RMHAzWkZkS2MyRlhUa3hhV0d0cFQyeDBOMGx0Ykd0SmFtOXBTVE5DZVdGWE1XaGpibXRwVEVOS01XTXlSbTVhVTBrMlNXNU9jRm95TlhCaWJXTnBURU5LTUdWWVFteEphbTlwVlRKV2FtTkVTVEZPYlhONFZtMVdlV0ZYV25CWk1rWXdZVmM1ZFZNeVZqVk5ha0Y0VDBOSmMwbHVRakZaYlhod1dUQjBiR1ZWYUd4bFEwazJTV3BCZWxsVVNtcFpNbFpxV1ZkS2FVNUhSVEZOVkZsNFdXcEpNVmxVVVROYVJGVXlXV3BhYUZscVpHaFpWMWw1V1ZSRmVrOVhWbTFaZWxFeVRqSldhMDVVVlhkWmFrVXlUa2RSZUUxVVRtaE5lbFUwV1hwbk5FNURTamxNU0hOcFlWZFJhVTlwU1dwamJWWnFZak5hYkdOdWEybE1RMG94WXpKR2JscFRTVFpKYmtwc1dUSTVNbHBZU2pWSmFYZHBaRWhzZDFwVFNUWkpiRTVzV1ROQmVVNVVXbkpOVmxwc1kyMXNiV0ZYVG1oa1IyeDJZbXQwYkdWVVNYZE5WR2RwVEVOS2QyUlhTbk5oVjA1TVdsaHNTVnBZWjJsUGFVbDNUVEpKTkZwVVRteGFiVXBzVG5wT2EwOVVaR2hhYW1Sc1RtcEJNVmx0VG14UFZFbDNUMFJyTlU1dFdUVlpha0Y0VFcxV2FFNTZRVEJOYWtGNFdXcHNhMDB5Vm0xTlIwMTVUMFJLYkU1Nll6Vk5SMUV5VGpKWmFXWldNSE5KYlVZeFpFZG9iR0p1VW5CWk1rWXdZVmM1ZFVscWNHSkphVTUzWTIxc2RGbFlTalZKYkRCelNXMUdlbU15Vm5sa1IyeDJZbXN4YkdSSGFIWmFRMGsyVjNsSmFtTklTbkJpVjBaNVpWTktaR1pSSWl3aWMybG5ibUYwZFhKbElqb2lWVlJWZUdGRWJsZGFkR04xZFhCbk9XeE1SbGhzTW1wVlJsbE5jMWRVYkc5NlkyUkJjMDlJUlcxYVVuZE1SRVpxVTJRMldHdDJSSGh1V0ZrNGVIUk9RWFJJTTBKblZrdE1aazg0V2pGcGQyY3daSGxTVkZFaWZRI3ByaW1hcnkifQ.dca7ea98170f5df1df95cca5f901e34ad13de22f71db0e0480b90784f7eabd7a258f425738555c751fbf185b3f9250f5e1f07c105050f296dbc857c2b576ef3e');
//<a href={config.wallet_url + '/share-credentials?token=' + shareCredRequestToken} target='_blank' rel="noopener noreferrer">here!</a></p>
  async function onLogin() {
    try {
      await login.fromLoginAndPassword(username, password);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className='Login' >
      <div className='Form'>
        <h1 className='Title'>Admin Login</h1>
        <p className='Info'>Credentials shared to Dunder Mifflin by Issuer</p>

        <Form style={{ width: "100%" }} className="text-center">
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Button block disabled={loading} onClick={onLogin}>
            Login
          </Button>
        </Form>
      </div>
    </div>
    
  );
};

export default Login;
