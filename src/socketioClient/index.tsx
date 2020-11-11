// import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import config from '../config';

const ENDPOINT = `${config.API_URL}/game`;
export default socketIOClient(ENDPOINT);
// const SocketioClient: React.FC<any> = () => {
//   const [socket, setSocket] = useState(null);
//   const [profile, setProfile] = useState(null);

//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const _socket = socketIOClient(ENDPOINT);
//     setSocket(_socket);
//     _socket.on('lobby', function (data) {
//       setRooms(data);
//     });

//     _socket.on('profile', function (data) {
//       setProfile(data);
//     });
//   }, []);

//   const createRoom = () => {
//     let roomName = prompt('Please enter your room name:', '');
//     if (roomName == null || roomName === '') {
//       alert('Wrong room name!');
//     } else {
//       if (!profile || !profile.skypeID) {
//         let skypeID = prompt('Enter your SkypeID here:');
//         if (skypeID == null || skypeID === '') {
//           alert('Wrong skypeID!');
//         } else {
//           socket.emit('joinRoom', roomName, skypeID);
//           socket.emit('createRoom', roomName, skypeID);
//           alert('Room "' + roomName + '" was created!');
//         }
//       } else {
//         socket.emit('joinRoom', roomName, profile.skypeID);
//         socket.emit('createRoom', roomName, profile.skypeID);
//         alert('Room "' + roomName + '" was created!');
//       }
//     }
//   };

//   const joinRoom = (roomName) => {
//     if (!profile || !profile.skypeID) {
//       let skypeID = prompt('Enter your SkypeID here:');
//       if (skypeID == null || skypeID === '') {
//         alert('Wrong skypeID!');
//       } else {
//         socket.emit('joinRoom', roomName, skypeID);
//         alert('Joined "' + roomName + '" room');
//       }
//     } else {
//       socket.emit('joinRoom', roomName, profile.skypeID);
//       alert('Joined "' + roomName + '" room');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       {/* bootstrap */}
//       <link
//         rel="stylesheet"
//         href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
//         integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
//         crossOrigin="anonymous"
//       />
//       <button
//         hidden={profile}
//         onClick={createRoom}
//         className="btn btn-success my-5">
//         Tạo phòng
//       </button>
//       {rooms.length === 0 ? (
//         <h1 className="mb-4">Không có phòng nào</h1>
//       ) : (
//         <>
//           {rooms.map((room, index) => (
//             <div className="container">
//               <h5 className=" my-4">
//                 {room.name.slice(5)} ({room.num}) [
//                 {room.skypeIDs.map((id) => (
//                   <>{id},</>
//                 ))}
//                 ]
//                 {room.num < 2 && !profile && (
//                   <button
//                     className="btn btn-info mx-5"
//                     onClick={() => joinRoom(room.name)}>
//                     join
//                   </button>
//                 )}
//                 {room.num === 2 &&
//                 profile &&
//                 profile.roomName === room.name &&
//                 profile.partner ? (
//                   <a
//                     className="btn btn-success ml-2"
//                     href={'skype:live:' + profile.partner}>
//                     call
//                   </a>
//                 ) : (
//                   ''
//                 )}
//               </h5>
//             </div>
//           ))}
//         </>
//       )}
//       <br />
//       <div>{profile ? `Current SkypeID: ${profile.skypeID}` : ``}</div>
//       <div>{profile ? `Current room: ${profile.roomName}` : ``}</div>
//       <div>{profile ? `Current partner: ${profile.partner}` : ``}</div>
//     </div>
//   );
// };

// export default SocketioClient;
