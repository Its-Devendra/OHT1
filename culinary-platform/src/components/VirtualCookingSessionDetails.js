import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, CircularProgress } from '@mui/material';

const VirtualCookingSession = () => {
  const [sessionStatus, setSessionStatus] = useState('pending');
  const { sessionId } = useParams();

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const sessionData = await getSessionData(sessionId);
        setSessionStatus(sessionData.status);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    };

    fetchSessionData();
  }, [sessionId]);

  const getSessionData = async (sessionId) => {
    try {
      const response = await fetch(`YOUR_API_ENDPOINT/session/${sessionId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching session data:', error);
    }
  };

  const joinSession = async () => {
    try {
      await fetch(`YOUR_API_ENDPOINT/session/${sessionId}/join`, {
        method: 'POST',
      });
      setSessionStatus('active');
    } catch (error) {
      console.error('Error joining session:', error);
    }
  };

  const leaveSession = async () => {
    try {
      await fetch(`YOUR_API_ENDPOINT/session/${sessionId}/leave`, {
        method: 'POST',
      });
      setSessionStatus('completed');
    } catch (error) {
      console.error('Error leaving session:', error);
    }
  };

  return (
    <div>
      {sessionStatus === 'pending' && (
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <CircularProgress />
          <Typography variant="h5">Loading session details...</Typography>
        </div>
      )}
      {sessionStatus === 'active' && (
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <Typography variant="h5">Virtual Cooking Session</Typography>
          <Button variant="contained" color="secondary" onClick={leaveSession}>
            Leave Session
          </Button>
        </div>
      )}
      {sessionStatus === 'completed' && (
        <Typography variant="h5">Session has ended.</Typography>
      )}
      {/* Button to join the session */}
      {sessionStatus !== 'active' && sessionStatus !== 'pending' && (
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={joinSession}>
            Join Session
          </Button>
        </div>
      )}
    </div>
  );
};

export default VirtualCookingSession;
