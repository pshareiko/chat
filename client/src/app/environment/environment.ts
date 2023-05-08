import { RxStompConfig } from '@stomp/rx-stomp';

export const environment = {
  applicationName: 'Chat',
  protocol: 'http',
  host: 'localhost',
  port: 8080,
  production: false,
  stompConfig: {
    brokerURL: 'ws://localhost:8080/ws',
    connectionTimeout: 10000,
    reconnectDelay: 5000,
  } as RxStompConfig,
};
