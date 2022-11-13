import React, { useCallback, useState } from 'react';
import './Popup.css';
import { GET_CERTIFICATES, SET_CERTIFICATES } from '../../constants';
import { Ext } from '../../constants/ext';

const Popup = () => {
  const [certificates, setCertificates] = useState([]);

  const sendMessage = useCallback(
    (message) =>
      new Promise((resolve, reject) => {
        Ext.tabs.query({ currentWindow: true, active: true }, async function (tabs: any[]) {
          const activeTab = tabs[0];

          if (!activeTab.id) reject('INVALID TAB');
          resolve(await Ext.tabs.sendMessage(activeTab.id, message));
        });
      }),
    [],
  );

  const getCertificates = useCallback(async () => {
    //TODO: ADD LOGIC

    const cerficatesFromContent = await sendMessage({
      type: GET_CERTIFICATES,
    });

    return cerficatesFromContent;
  }, [sendMessage]);

  const setCertificatesToContent = useCallback(async () => {
    //TODO: ADD LOGIC

    sendMessage({
      type: SET_CERTIFICATES,
      value: [],
    });
  }, []);

  return (
    <div className="App">
      <h1>Find your certificates</h1>
    </div>
  );
};

export default Popup;
