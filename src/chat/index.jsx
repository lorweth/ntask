import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Input, List, ListItem, Progress, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as SockJS from 'sockjs-client';
import { over } from 'stompjs';
import { fetchChatRooms, fetchMessage } from './chatSlice';

const WS_URL = process.env.REACT_APP_WS_URL;

export default function Chat() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const rooms = useSelector((state) => state.chat.events);
  const msgList = useSelector((state) => state.chat.msgList);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [sendInfo, setSendInfo] = useState({
    from: null,
  });
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const chatInputRef = useRef({});

  // Get all events as room chats
  useEffect(() => {
    dispatch(fetchChatRooms({ page: 0, size: 30 }));

    // Connect to websocket
    const socket = new SockJS(WS_URL);
    const client = over(socket);
    client.connect({}, (frame) => {
      // eslint-disable-next-line no-console
      console.log(`Connected: ${frame}`);
    });
    setStompClient(client); // store stomp client
  }, []);

  // Update sendInfo when login userData changes
  useEffect(() => {
    if (userData && userData.id !== null && userData.id !== undefined) {
      setSendInfo({
        ...sendInfo,
        from: userData.id,
      });
    }
  }, [userData]);

  // Update sendInfo when selectedRoom changes
  useEffect(() => {
    if (selectedRoom) {
      dispatch(fetchMessage({ eventID: selectedRoom.id, page: 0, size: 30 }));
      // Subscribe to room chat
      stompClient.subscribe(`/topic/${selectedRoom.id}`, (payload) => {
        setMessages((msg) => [JSON.parse(payload.body), ...msg]);
      });
    }
  }, [selectedRoom]);

  useEffect(() => {
    if (msgList) {
      setMessages(msgList);
    }
  }, [msgList]);

  const onClickRoom = (room) => {
    dispatch(setSelectedRoom(room));
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    const { current } = chatInputRef;
    const msg = current.value.trim();
    if (msg === '') {
      return;
    }

    const message = {
      content: msg,
      room: selectedRoom.id,
      from: userData.id,
    };
    stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(message));
    current.value = '';
  };

  const loadMoreRoom = () => {
    // eslint-disable-next-line no-console
    console.log('load more room');
  };

  const loadMoreMessage = () => {
    // eslint-disable-next-line no-console
    console.log('load more message');
  };

  return (
    <Box
      as="div"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        p: 2,
        width: '100%',
        height: '100%',
        gap: '0.5rem',
        boxShadow: 'md',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 4,
          flexDirection: 'column',
          borderRight: '1px solid',
          borderColor: 'gray.200',
        }}
      >
        <Box as="div" sx={{ display: 'flex', flexDirection: 'column' }}>
          {selectedRoom ? (
            <List sx={{ m: 2 }}>
              <InfiniteScroll
                dataLength={messages.length}
                next={loadMoreMessage}
                height="500px"
                style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.2rem', m: 2 }}
                hasMore
                loader={<Progress isIndeterminate />}
              >
                {messages.length < 0 ? (
                  <ListItem key="no-content">
                    <Text>Let&lsquo;s start chatting</Text>
                  </ListItem>
                ) : (
                  messages.map((item) => (
                    <ListItem key={`message_${item.id}`}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: item.from === userData.id ? 'end' : 'start',
                        }}
                      >
                        <Text
                          sx={{
                            width: 'max-content',
                            padding: '.2rem .5rem',
                            color: 'blackAlpha.900',
                            backgroundColor: 'gray.300',
                            borderRadius: '0.3rem',
                          }}
                        >
                          {item.content}
                        </Text>
                      </Box>
                    </ListItem>
                  ))
                )}
              </InfiniteScroll>
            </List>
          ) : (
            <Box
              component="div"
              height="500px"
              display="flex"
              flexDirection="column"
              justifyContent="end"
            >
              <Text textAlign="center">Please choose a room</Text>
            </Box>
          )}
          <Box
            as="form"
            sx={{
              display: 'flex',
              gap: '0.2rem',
              m: 2,
            }}
            onSubmit={onSendMessage}
          >
            <Input sx={{ flex: 11 }} ref={chatInputRef} />
            <Button type="submit" colorScheme="messenger">
              <FontAwesomeIcon icon={solid('paper-plane')} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <InfiniteScroll
          dataLength={rooms.length}
          next={loadMoreRoom}
          height="100%"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}
          hasMore
          loader={<Progress isIndeterminate />}
        >
          {rooms.map((event) => (
            <Button
              key={event.id}
              variant="solid"
              colorScheme={selectedRoom && selectedRoom.id === event.id ? 'teal' : 'gray'}
              onClick={() => onClickRoom(event)}
            >
              <FontAwesomeIcon icon={solid('users')} />
              &nbsp;{event.name}
            </Button>
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
}
