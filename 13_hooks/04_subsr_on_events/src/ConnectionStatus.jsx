import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

export default function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener('online', event => {
      setIsOnline(true);
    });
    window.addEventListener('offline', event => {
      setIsOnline(false);
    });

    return () => {
      window.removeEventListener('online', event => {
        setIsOnline(true);
      });
      window.removeEventListener('offline', event => {
        setIsOnline(false);
      });
    };
  });

  return (
    <div className={classNames('status', { status_offline: !isOnline })}>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  );
}
